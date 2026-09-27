import { Router } from "express";
import { pool } from "../db/pool.mjs";
import { mapDbProduct } from "../utils/productMapper.mjs";
import { products, useStaticCatalog } from "../utils/catalogSource.mjs";

const router = Router();

const productQuery = `
  SELECT
    p.id,
    p.legacy_id,
    p.category_slug,
    p.category_name,
    p.name,
    p.description,
    p.regular_price,
    p.discounted_price,
    p.quantity,
    p.rating,
    p.reviews,
    p.brand,
    p.overview,
    p.is_stock,
    p.is_new,
    GROUP_CONCAT(DISTINCT pi.image_url ORDER BY pi.sort_order SEPARATOR ',') AS images,
    GROUP_CONCAT(DISTINCT pc.color_value ORDER BY pc.sort_order SEPARATOR ',') AS colors
  FROM products p
  LEFT JOIN product_images pi ON pi.product_id = p.id
  LEFT JOIN product_colors pc ON pc.product_id = p.id
`;

router.get("/", async (req, res) => {
  try {
    const { search, category } = req.query;

    if (useStaticCatalog) {
      const normalizedSearch = String(search || "").toLowerCase();
      const filteredProducts = products.filter((product) => {
        const matchesSearch =
          !normalizedSearch || product.name.toLowerCase().includes(normalizedSearch);
        const matchesCategory = !category || product._base === category;
        return matchesSearch && matchesCategory;
      });

      return res.json(filteredProducts);
    }

    const conditions = [];
    const params = [];

    if (search) {
      conditions.push("p.name LIKE ?");
      params.push(`%${search}%`);
    }

    if (category) {
      conditions.push("p.category_slug = ?");
      params.push(category);
    }

    const whereSql = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

    const sql = `${productQuery}
      ${whereSql}
      GROUP BY p.id
      ORDER BY p.created_at DESC`;

    const [rows] = await pool.query(sql, params);
    res.json(rows.map(mapDbProduct));
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const incomingId = Number(req.params.id);
    if (!Number.isFinite(incomingId)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    if (useStaticCatalog) {
      const product = products.find((item) => item._id === incomingId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res.json(product);
    }

    const sql = `${productQuery}
      WHERE p.legacy_id = ? OR p.id = ?
      GROUP BY p.id
      LIMIT 1`;

    const [rows] = await pool.query(sql, [incomingId, incomingId]);
    if (!rows.length) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(mapDbProduct(rows[0]));
  } catch (error) {
    console.error("Error fetching product", error);
    return res.status(500).json({ message: "Failed to fetch product" });
  }
});

export const productRoute = router;
