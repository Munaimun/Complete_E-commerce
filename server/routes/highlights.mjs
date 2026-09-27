import { Router } from "express";
import { pool } from "../db/pool.mjs";
import { mapDbHighlight } from "../utils/productMapper.mjs";
import { highlightsProducts, useStaticCatalog } from "../utils/catalogSource.mjs";

const router = Router();

router.get("/", async (req, res) => {
  try {
    if (useStaticCatalog) {
      return res.json(highlightsProducts);
    }

    const [rows] = await pool.query(
      `SELECT id, legacy_id, name, title, button_title, image, base_path, color
       FROM highlights
       ORDER BY created_at DESC`
    );
    res.json(rows.map(mapDbHighlight));
  } catch (error) {
    console.error("Error fetching highlights", error);
    res.status(500).json({ message: "Failed to fetch highlights" });
  }
});

export const hihglightsRoute = router;
