import { Router } from "express";
import { pool } from "../db/pool.mjs";
import { createOrderFromPayload } from "../utils/orderService.mjs";
import { requireAuth } from "../middleware/auth.mjs";
import { requireAdmin } from "../middleware/roles.mjs";

const router = Router();

router.post("/", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const created = await createOrderFromPayload(conn, req.body);
    return res.status(201).json({
      message: "Order created successfully",
      order: created,
    });
  } catch (error) {
    const code = error.statusCode || 500;
    console.error("Error creating order", error);
    return res.status(code).json({ message: error.message || "Failed to create order" });
  } finally {
    conn.release();
  }
});

router.get("/user/:email", requireAuth, async (req, res) => {
  try {
    const { email } = req.params;
    if (req.user.email !== email) {
      return res.status(403).json({ message: "You can only view your own orders" });
    }

    const [rows] = await pool.query(
      `SELECT id, email, shipping_address, phone, total_amount, order_status, payment_status, payment_method, created_at
       FROM orders
       WHERE email = ?
       ORDER BY created_at DESC`,
      [email]
    );

    return res.json(rows);
  } catch (error) {
    console.error("Error fetching orders", error);
    return res.status(500).json({ message: "Failed to fetch orders" });
  }
});

router.get("/:id", requireAuth, async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    if (!Number.isFinite(orderId)) {
      return res.status(400).json({ message: "Invalid order id" });
    }

    const [orders] = await pool.query(
      `SELECT id, user_id, email, shipping_address, phone, total_amount, order_status, payment_status, payment_method, created_at
       FROM orders WHERE id = ? LIMIT 1`,
      [orderId]
    );

    if (!orders.length) {
      return res.status(404).json({ message: "Order not found" });
    }

    const order = orders[0];
    const isOwner = order.email === req.user.email;

    if (!isOwner) {
      const [roleRows] = await pool.query(`SELECT role FROM users WHERE id = ? LIMIT 1`, [
        req.user.id,
      ]);

      if (!roleRows.length || roleRows[0].role !== "admin") {
        return res.status(403).json({ message: "Unauthorized to view this order" });
      }
    }

    const [items] = await pool.query(
      `SELECT oi.id, oi.product_id, oi.quantity, oi.unit_price, p.name AS product_name
       FROM order_items oi
       JOIN products p ON p.id = oi.product_id
       WHERE oi.order_id = ?
       ORDER BY oi.id ASC`,
      [orderId]
    );

    return res.json({ ...order, items });
  } catch (error) {
    console.error("Error fetching order detail", error);
    return res.status(500).json({ message: "Failed to fetch order detail" });
  }
});

router.patch("/:id/payment-status", requireAuth, requireAdmin, async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    const paymentStatus = req.body?.paymentStatus;

    if (!Number.isFinite(orderId)) {
      return res.status(400).json({ message: "Invalid order id" });
    }

    const validStatuses = ["pending", "paid", "failed"];
    if (!validStatuses.includes(paymentStatus)) {
      return res.status(400).json({ message: "Invalid payment status" });
    }

    await pool.query(
      `UPDATE orders
       SET payment_status = ?,
           order_status = CASE
             WHEN ? = 'paid' THEN 'confirmed'
             WHEN ? = 'failed' THEN 'cancelled'
             ELSE order_status
           END
       WHERE id = ?`,
      [paymentStatus, paymentStatus, paymentStatus, orderId]
    );

    return res.json({ message: "Payment status updated" });
  } catch (error) {
    console.error("Error updating payment status", error);
    return res.status(500).json({ message: "Failed to update payment status" });
  }
});

export const orderRoute = router;
