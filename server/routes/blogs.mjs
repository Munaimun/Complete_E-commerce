import { Router } from "express";
import { pool } from "../db/pool.mjs";
import { mapDbBlog } from "../utils/productMapper.mjs";
import { blogsData, useStaticCatalog } from "../utils/catalogSource.mjs";

const router = Router();

router.get("/", async (req, res) => {
  try {
    if (useStaticCatalog) {
      return res.json(blogsData);
    }

    const [rows] = await pool.query(
      `SELECT id, legacy_id, image, title, description, base
       FROM blogs
       ORDER BY created_at DESC`
    );
    res.json(rows.map(mapDbBlog));
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

export const blogRoute = router;
