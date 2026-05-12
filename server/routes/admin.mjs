import { Router } from "express";
import { pool } from "../db/pool.mjs";
import { requireAuth } from "../middleware/auth.mjs";
import { requireAdmin } from "../middleware/roles.mjs";

const router = Router();

router.use(requireAuth, requireAdmin);

router.post("/categories", async (req, res) => {
  try {
    const { name, slug, image, description } = req.body;
    if (!name || !slug) {
      return res.status(400).json({ message: "name and slug are required" });
    }

    const [result] = await pool.query(
      `INSERT INTO categories (name, slug, image, description) VALUES (?, ?, ?, ?)`,
      [name, slug, image || null, description || null]
    );

    return res.status(201).json({ message: "Category created", id: result.insertId });
  } catch (error) {
    console.error("Error creating category", error);
    return res.status(500).json({ message: "Failed to create category" });
  }
});

router.put("/categories/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, slug, image, description } = req.body;
    if (!Number.isFinite(id)) {
      return res.status(400).json({ message: "Invalid category id" });
    }

    await pool.query(
      `UPDATE categories
       SET name = COALESCE(?, name),
           slug = COALESCE(?, slug),
           image = COALESCE(?, image),
           description = COALESCE(?, description)
       WHERE id = ? OR legacy_id = ?`,
      [name || null, slug || null, image || null, description || null, id, id]
    );

    return res.json({ message: "Category updated" });
  } catch (error) {
    console.error("Error updating category", error);
    return res.status(500).json({ message: "Failed to update category" });
  }
});

router.delete("/categories/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
      return res.status(400).json({ message: "Invalid category id" });
    }

    const [products] = await pool.query(
      `SELECT id FROM products WHERE category_id = ? OR category_id = (SELECT id FROM categories WHERE legacy_id = ? LIMIT 1) LIMIT 1`,
      [id, id]
    );

    if (products.length) {
      return res.status(409).json({ message: "Cannot delete category with products" });
    }

    await pool.query(`DELETE FROM categories WHERE id = ? OR legacy_id = ?`, [id, id]);
    return res.json({ message: "Category deleted" });
  } catch (error) {
    console.error("Error deleting category", error);
    return res.status(500).json({ message: "Failed to delete category" });
  }
});

router.post("/products", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const {
      categorySlug,
      name,
      description,
      regularPrice,
      discountedPrice,
      quantity,
      rating,
      reviews,
      brand,
      overView,
      isStock,
      isNew,
      images,
      colors,
    } = req.body;

    if (!name || !categorySlug) {
      return res.status(400).json({ message: "name and categorySlug are required" });
    }

    const [categories] = await conn.query(
      `SELECT id, slug, name FROM categories WHERE slug = ? LIMIT 1`,
      [categorySlug]
    );
    if (!categories.length) {
      return res.status(404).json({ message: "Category not found" });
    }

    await conn.beginTransaction();

    const category = categories[0];
    const [result] = await conn.query(
      `INSERT INTO products
      (category_id, category_slug, category_name, name, description, regular_price, discounted_price, quantity, rating, reviews, brand, overview, is_stock, is_new)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        category.id,
        category.slug,
        category.name,
        name,
        description || null,
        Number(regularPrice || 0),
        Number(discountedPrice || 0),
        Number(quantity || 0),
        Number(rating || 0),
        Number(reviews || 0),
        brand || null,
        overView || null,
        Boolean(isStock),
        Boolean(isNew),
      ]
    );

    const productId = result.insertId;

    if (Array.isArray(images)) {
      for (let i = 0; i < images.length; i += 1) {
        await conn.query(
          `INSERT INTO product_images (product_id, image_url, sort_order) VALUES (?, ?, ?)`,
          [productId, images[i], i]
        );
      }
    }

    if (Array.isArray(colors)) {
      for (let i = 0; i < colors.length; i += 1) {
        await conn.query(
          `INSERT INTO product_colors (product_id, color_value, sort_order) VALUES (?, ?, ?)`,
          [productId, colors[i], i]
        );
      }
    }

    await conn.commit();
    return res.status(201).json({ message: "Product created", id: productId });
  } catch (error) {
    await conn.rollback();
    console.error("Error creating product", error);
    return res.status(500).json({ message: "Failed to create product" });
  } finally {
    conn.release();
  }
});

router.put("/products/:id", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const {
      categorySlug,
      name,
      description,
      regularPrice,
      discountedPrice,
      quantity,
      rating,
      reviews,
      brand,
      overView,
      isStock,
      isNew,
      images,
      colors,
    } = req.body;

    await conn.beginTransaction();

    let categoryId = null;
    let categoryName = null;
    let normalizedSlug = null;

    if (categorySlug) {
      const [catRows] = await conn.query(
        `SELECT id, name, slug FROM categories WHERE slug = ? LIMIT 1`,
        [categorySlug]
      );

      if (!catRows.length) {
        await conn.rollback();
        return res.status(404).json({ message: "Category not found" });
      }

      categoryId = catRows[0].id;
      categoryName = catRows[0].name;
      normalizedSlug = catRows[0].slug;
    }

    await conn.query(
      `UPDATE products
       SET category_id = COALESCE(?, category_id),
           category_slug = COALESCE(?, category_slug),
           category_name = COALESCE(?, category_name),
           name = COALESCE(?, name),
           description = COALESCE(?, description),
           regular_price = COALESCE(?, regular_price),
           discounted_price = COALESCE(?, discounted_price),
           quantity = COALESCE(?, quantity),
           rating = COALESCE(?, rating),
           reviews = COALESCE(?, reviews),
           brand = COALESCE(?, brand),
           overview = COALESCE(?, overview),
           is_stock = COALESCE(?, is_stock),
           is_new = COALESCE(?, is_new)
       WHERE id = ? OR legacy_id = ?`,
      [
        categoryId,
        normalizedSlug,
        categoryName,
        name || null,
        description || null,
        regularPrice != null ? Number(regularPrice) : null,
        discountedPrice != null ? Number(discountedPrice) : null,
        quantity != null ? Number(quantity) : null,
        rating != null ? Number(rating) : null,
        reviews != null ? Number(reviews) : null,
        brand || null,
        overView || null,
        isStock != null ? Boolean(isStock) : null,
        isNew != null ? Boolean(isNew) : null,
        id,
        id,
      ]
    );

    const [productRows] = await conn.query(
      `SELECT id FROM products WHERE id = ? OR legacy_id = ? LIMIT 1`,
      [id, id]
    );

    if (!productRows.length) {
      await conn.rollback();
      return res.status(404).json({ message: "Product not found" });
    }

    const productId = productRows[0].id;

    if (Array.isArray(images)) {
      await conn.query(`DELETE FROM product_images WHERE product_id = ?`, [productId]);
      for (let i = 0; i < images.length; i += 1) {
        await conn.query(
          `INSERT INTO product_images (product_id, image_url, sort_order) VALUES (?, ?, ?)`,
          [productId, images[i], i]
        );
      }
    }

    if (Array.isArray(colors)) {
      await conn.query(`DELETE FROM product_colors WHERE product_id = ?`, [productId]);
      for (let i = 0; i < colors.length; i += 1) {
        await conn.query(
          `INSERT INTO product_colors (product_id, color_value, sort_order) VALUES (?, ?, ?)`,
          [productId, colors[i], i]
        );
      }
    }

    await conn.commit();
    return res.json({ message: "Product updated" });
  } catch (error) {
    await conn.rollback();
    console.error("Error updating product", error);
    return res.status(500).json({ message: "Failed to update product" });
  } finally {
    conn.release();
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    await pool.query(`DELETE FROM products WHERE id = ? OR legacy_id = ?`, [id, id]);
    return res.json({ message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product", error);
    return res.status(500).json({ message: "Failed to delete product" });
  }
});

export const adminRoute = router;
