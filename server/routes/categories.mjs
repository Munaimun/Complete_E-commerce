import { Router } from "express";
import { pool } from "../db/pool.mjs";
import { mapDbCategory, mapDbProduct } from "../utils/productMapper.mjs";

const router = Router();

const categoryProductQuery = `
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
    const [rows] = await pool.query(
      `SELECT id, legacy_id, name, slug, image, description
       FROM categories
       ORDER BY name ASC`
    );
    res.json(rows.map(mapDbCategory));
  } catch (error) {
    console.error("Error fetching categories", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `${categoryProductQuery}
      WHERE p.category_slug = ?
      GROUP BY p.id
      ORDER BY p.created_at DESC`;

    const [rows] = await pool.query(sql, [id]);
    if (!rows.length) {
      return res
        .status(404)
        .json({ message: "No products matched with this category" });
    }

    return res.json(rows.map(mapDbProduct));
  } catch (error) {
    console.error("Error fetching products by category", error);
    return res.status(500).json({ message: "Failed to fetch category products" });
  }
});

export const categoryRoutes = router;
