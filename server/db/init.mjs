import {
  blogsData,
  categories,
  highlightsProducts,
  products,
} from "../constants/index.mjs";
import { pool } from "./pool.mjs";

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL UNIQUE,
      full_name VARCHAR(255),
      password_hash VARCHAR(255),
      provider ENUM('local', 'firebase') DEFAULT 'local',
      role ENUM('customer', 'admin') DEFAULT 'customer',
      firebase_uid VARCHAR(255) UNIQUE,
      avatar VARCHAR(512),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      legacy_id INT UNIQUE,
      name VARCHAR(120) NOT NULL,
      slug VARCHAR(120) NOT NULL UNIQUE,
      image VARCHAR(512),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      legacy_id INT UNIQUE,
      category_id BIGINT NOT NULL,
      category_slug VARCHAR(120) NOT NULL,
      category_name VARCHAR(120) NOT NULL,
      name VARCHAR(400) NOT NULL,
      description TEXT,
      regular_price DECIMAL(12,2) NOT NULL,
      discounted_price DECIMAL(12,2) NOT NULL,
      quantity INT DEFAULT 1,
      rating DECIMAL(3,2) DEFAULT 0,
      reviews INT DEFAULT 0,
      brand VARCHAR(255),
      overview VARCHAR(255),
      is_stock BOOLEAN DEFAULT TRUE,
      is_new BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT,
      INDEX idx_products_category_slug (category_slug),
      INDEX idx_products_name (name(120))
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS product_images (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      product_id BIGINT NOT NULL,
      image_url VARCHAR(512) NOT NULL,
      sort_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS product_colors (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      product_id BIGINT NOT NULL,
      color_value VARCHAR(60) NOT NULL,
      sort_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      legacy_id INT UNIQUE,
      image VARCHAR(512),
      title VARCHAR(300) NOT NULL,
      description TEXT,
      base VARCHAR(80),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS highlights (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      legacy_id INT UNIQUE,
      name VARCHAR(255) NOT NULL,
      title VARCHAR(255),
      button_title VARCHAR(120),
      image VARCHAR(512),
      base_path VARCHAR(120),
      color VARCHAR(40) DEFAULT '#ffffff',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      user_id BIGINT,
      email VARCHAR(255) NOT NULL,
      shipping_address TEXT NOT NULL,
      phone VARCHAR(40) NOT NULL,
      total_amount DECIMAL(12,2) NOT NULL,
      order_status ENUM('created','confirmed','packed','shipped','delivered','cancelled') DEFAULT 'created',
      payment_status ENUM('pending','paid','failed') DEFAULT 'pending',
      payment_method VARCHAR(80) DEFAULT 'cash_on_delivery',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
      INDEX idx_orders_email (email)
    ) ENGINE=InnoDB;
  `);

  // Add role column to users if it doesn't exist (ignore error if it does)
  try {
    await pool.query(
      `ALTER TABLE users ADD COLUMN role ENUM('customer', 'admin') DEFAULT 'customer'`
    );
  } catch (err) {
    // Column already exists, ignore
    if (err.code !== 'ER_DUP_FIELDNAME') throw err;
  }

  // Add order_status column to orders if it doesn't exist (ignore error if it does)
  try {
    await pool.query(
      `ALTER TABLE orders ADD COLUMN order_status ENUM('created','confirmed','packed','shipped','delivered','cancelled') DEFAULT 'created'`
    );
  } catch (err) {
    // Column already exists, ignore
    if (err.code !== 'ER_DUP_FIELDNAME') throw err;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS order_items (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      order_id BIGINT NOT NULL,
      product_id BIGINT NOT NULL,
      quantity INT NOT NULL,
      unit_price DECIMAL(12,2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
    ) ENGINE=InnoDB;
  `);
};

const seedCategories = async () => {
  const [rows] = await pool.query(`SELECT COUNT(*) AS total FROM categories`);
  if (rows[0].total > 0) {
    return;
  }

  const categorySql = `
    INSERT INTO categories (legacy_id, name, slug, image, description)
    VALUES (?, ?, ?, ?, ?)
  `;

  for (const category of categories) {
    await pool.query(categorySql, [
      category._id,
      category.name,
      category._base,
      category.image,
      category.description,
    ]);
  }
};

const seedProducts = async () => {
  const [rows] = await pool.query(`SELECT COUNT(*) AS total FROM products`);
  if (rows[0].total > 0) {
    return;
  }

  const [categoryRows] = await pool.query(`SELECT id, slug, name FROM categories`);
  const categoryBySlug = new Map(categoryRows.map((c) => [c.slug, c]));

  for (const product of products) {
    const category = categoryBySlug.get(product._base);
    if (!category) {
      continue;
    }

    const [result] = await pool.query(
      `INSERT INTO products
       (legacy_id, category_id, category_slug, category_name, name, description, regular_price, discounted_price, quantity, rating, reviews, brand, overview, is_stock, is_new)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        product._id,
        category.id,
        category.slug,
        category.name,
        product.name,
        product.description,
        product.regularPrice,
        product.discountedPrice,
        product.quantity || 1,
        product.rating || 0,
        product.reviews || 0,
        product.brand || "",
        product.overView || "",
        Boolean(product.isStock),
        Boolean(product.isNew),
      ]
    );

    const productId = result.insertId;

    if (Array.isArray(product.images)) {
      for (let i = 0; i < product.images.length; i += 1) {
        await pool.query(
          `INSERT INTO product_images (product_id, image_url, sort_order) VALUES (?, ?, ?)`,
          [productId, product.images[i], i]
        );
      }
    }

    if (Array.isArray(product.colors)) {
      for (let i = 0; i < product.colors.length; i += 1) {
        await pool.query(
          `INSERT INTO product_colors (product_id, color_value, sort_order) VALUES (?, ?, ?)`,
          [productId, product.colors[i], i]
        );
      }
    }
  }
};

const seedBlogs = async () => {
  const [rows] = await pool.query(`SELECT COUNT(*) AS total FROM blogs`);
  if (rows[0].total > 0) {
    return;
  }

  for (const blog of blogsData) {
    await pool.query(
      `INSERT INTO blogs (legacy_id, image, title, description, base) VALUES (?, ?, ?, ?, ?)`,
      [blog._id, blog.image, blog.title, blog.description, blog._base]
    );
  }
};

const seedHighlights = async () => {
  const [rows] = await pool.query(`SELECT COUNT(*) AS total FROM highlights`);
  if (rows[0].total > 0) {
    return;
  }

  for (const highlight of highlightsProducts) {
    await pool.query(
      `INSERT INTO highlights (legacy_id, name, title, button_title, image, base_path, color)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        highlight._id,
        highlight.name,
        highlight.title,
        highlight.buttonTitle,
        highlight.image,
        highlight._base,
        highlight.color || "#ffffff",
      ]
    );
  }
};

export const initializeDatabase = async () => {
  await createTables();
  await seedCategories();
  await seedProducts();
  await seedBlogs();
  await seedHighlights();
};
