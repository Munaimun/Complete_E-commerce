import { pool } from "../db/pool.mjs";

export const requireAdmin = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [rows] = await pool.query(
      `SELECT role FROM users WHERE id = ? LIMIT 1`,
      [userId]
    );

    if (!rows.length || rows[0].role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    return next();
  } catch (error) {
    console.error("Error checking admin role", error);
    return res.status(500).json({ message: "Authorization failed" });
  }
};
