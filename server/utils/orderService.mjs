const findProductIdByLegacyOrId = async (conn, incomingId) => {
  const numericId = Number(incomingId);
  if (!Number.isFinite(numericId)) {
    return null;
  }

  const [rows] = await conn.query(
    `SELECT id FROM products WHERE legacy_id = ? OR id = ? LIMIT 1`,
    [numericId, numericId]
  );

  return rows.length ? rows[0].id : null;
};

export const createOrderFromPayload = async (conn, payload) => {
  const email = payload?.email;
  const address = payload?.address;
  const phone = payload?.phone;
  const products = payload?.order?.products || [];
  const total = Number(payload?.order?.total || 0);
  const paymentMethod = payload?.order?.paymentMethod || "cash_on_delivery";

  if (!email || !address || !phone || !Array.isArray(products) || products.length === 0) {
    const error = new Error("Missing required order data");
    error.statusCode = 400;
    throw error;
  }

  await conn.beginTransaction();

  try {
    const [existingUsers] = await conn.query(
      `SELECT id FROM users WHERE email = ? LIMIT 1`,
      [email]
    );

    let userId;
    if (existingUsers.length) {
      userId = existingUsers[0].id;
    } else {
      const [insertedUser] = await conn.query(
        `INSERT INTO users (email, full_name) VALUES (?, ?)`,
        [email, payload?.name || payload?.displayName || "Customer"]
      );
      userId = insertedUser.insertId;
    }

    const [insertedOrder] = await conn.query(
      `INSERT INTO orders (user_id, email, shipping_address, phone, total_amount, payment_status, payment_method, order_status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [userId, email, address, phone, total, "pending", paymentMethod, "created"]
    );

    const orderId = insertedOrder.insertId;

    for (const item of products) {
      const productId = await findProductIdByLegacyOrId(conn, item._id);
      if (!productId) {
        const error = new Error(`Product not found for id ${item._id}`);
        error.statusCode = 404;
        throw error;
      }

      const quantity = Number(item.quantity || 1);
      const unitPrice = Number(item.discountedPrice || item.regularPrice || 0);

      const [stockRows] = await conn.query(
        `SELECT quantity, is_stock FROM products WHERE id = ? FOR UPDATE`,
        [productId]
      );

      if (!stockRows.length || !stockRows[0].is_stock) {
        const error = new Error("Product is out of stock");
        error.statusCode = 409;
        throw error;
      }

      if (Number(stockRows[0].quantity) < quantity) {
        const error = new Error("Insufficient inventory for one or more products");
        error.statusCode = 409;
        throw error;
      }

      await conn.query(
        `INSERT INTO order_items (order_id, product_id, quantity, unit_price)
         VALUES (?, ?, ?, ?)`,
        [orderId, productId, quantity, unitPrice]
      );

      await conn.query(
        `UPDATE products
         SET quantity = quantity - ?,
             is_stock = CASE WHEN quantity - ? <= 0 THEN FALSE ELSE is_stock END
         WHERE id = ?`,
        [quantity, quantity, productId]
      );
    }

    await conn.commit();
    return { orderId, email, total, orderStatus: "created", paymentStatus: "pending" };
  } catch (error) {
    await conn.rollback();
    throw error;
  }
};
