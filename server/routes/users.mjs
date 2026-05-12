import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../db/pool.mjs";
import { requireAuth } from "../middleware/auth.mjs";

const router = Router();

router.post("/sync", async (req, res) => {
  try {
    const { email, fullName, avatar, firebaseUid, provider } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const [existing] = await pool.query(
      `SELECT id FROM users WHERE email = ? LIMIT 1`,
      [email]
    );

    if (existing.length) {
      await pool.query(
        `UPDATE users
         SET full_name = COALESCE(?, full_name),
             avatar = COALESCE(?, avatar),
             firebase_uid = COALESCE(?, firebase_uid),
             provider = COALESCE(?, provider)
         WHERE id = ?`,
        [fullName || null, avatar || null, firebaseUid || null, provider || "firebase", existing[0].id]
      );

      return res.json({ message: "User synced", userId: existing[0].id });
    }

    const [inserted] = await pool.query(
      `INSERT INTO users (email, full_name, avatar, firebase_uid, provider)
       VALUES (?, ?, ?, ?, ?)`,
      [email, fullName || null, avatar || null, firebaseUid || null, provider || "firebase"]
    );

    return res.status(201).json({ message: "User synced", userId: inserted.insertId });
  } catch (error) {
    console.error("Error syncing user", error);
    return res.status(500).json({ message: "Failed to sync user" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const [existing] = await pool.query(`SELECT id FROM users WHERE email = ? LIMIT 1`, [
      email,
    ]);
    if (existing.length) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      `INSERT INTO users (email, full_name, password_hash, provider) VALUES (?, ?, ?, 'local')`,
      [email, fullName || null, passwordHash]
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: result.insertId,
        email,
        displayName: fullName || null,
        role: "customer",
      },
    });
  } catch (error) {
    console.error("Error registering user", error);
    return res.status(500).json({ message: "Failed to register user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const [rows] = await pool.query(
      `SELECT id, email, full_name, password_hash, role FROM users WHERE email = ? LIMIT 1`,
      [email]
    );

    if (!rows.length || !rows[0].password_hash) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, rows[0].password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: rows[0].id,
        email: rows[0].email,
        role: rows[0].role || "customer",
      },
      process.env.JWT_SECRET || "dev_secret",
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      user: {
        id: rows[0].id,
        email: rows[0].email,
        displayName: rows[0].full_name,
        role: rows[0].role || "customer",
      },
    });
  } catch (error) {
    console.error("Error logging in user", error);
    return res.status(500).json({ message: "Failed to login" });
  }
});

router.get("/profile", requireAuth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, email, full_name, avatar, provider, role, created_at
       FROM users WHERE id = ? LIMIT 1`,
      [req.user.id]
    );

    if (!rows.length) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      id: rows[0].id,
      email: rows[0].email,
      displayName: rows[0].full_name,
      avatar: rows[0].avatar,
      provider: rows[0].provider,
      role: rows[0].role || "customer",
      createdAt: rows[0].created_at,
    });
  } catch (error) {
    console.error("Error fetching profile", error);
    return res.status(500).json({ message: "Failed to fetch profile" });
  }
});

router.post("/bootstrap-admin", async (req, res) => {
  try {
    const setupKey = req.body?.setupKey;
    const email = req.body?.email;

    if (!setupKey || setupKey !== process.env.ADMIN_SETUP_KEY) {
      return res.status(401).json({ message: "Invalid setup key" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const [existing] = await pool.query(`SELECT id FROM users WHERE email = ? LIMIT 1`, [
      email,
    ]);

    if (!existing.length) {
      return res.status(404).json({ message: "User not found. Register first." });
    }

    await pool.query(`UPDATE users SET role = 'admin' WHERE id = ?`, [existing[0].id]);
    return res.json({ message: "User promoted to admin" });
  } catch (error) {
    console.error("Error bootstrapping admin", error);
    return res.status(500).json({ message: "Failed to bootstrap admin" });
  }
});

export const userRoute = router;
