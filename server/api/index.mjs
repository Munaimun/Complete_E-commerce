import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "../routes/index.mjs";
import { initializeDatabase } from "../db/init.mjs";
import { pool } from "../db/pool.mjs";
import { createOrderFromPayload } from "../utils/orderService.mjs";
import { requireAuth } from "../middleware/auth.mjs";

const app = express();

app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: false,
  })
);

// Initialize database on first request (but don't block requests)
let dbInitialized = false;
const initDbAsync = async () => {
  if (!dbInitialized) {
    try {
      await initializeDatabase();
      dbInitialized = true;
      console.log("Database initialized successfully");
    } catch (error) {
      console.error("Database initialization warning:", error.message);
      // Continue anyway - queries will fail with proper error messages
    }
  }
};

// Trigger DB initialization asynchronously
initDbAsync();

// Routes
app.use("/", router);

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", database: "disconnected", error: error.message });
  }
});

// Checkout route
app.post("/checkout", requireAuth, async (req, res) => {
  const conn = await pool.getConnection();
  try {
    if (req.user?.email !== req.body?.email) {
      return res.status(403).json({ error: "Order email does not match authenticated user" });
    }

    const createdOrder = await createOrderFromPayload(conn, req.body);

    return res.status(201).json({
      message: "Order placed successfully",
      order: createdOrder,
    });
  } catch (error) {
    console.error("Error processing order", error);
    const code = error.statusCode || 500;
    return res.status(code).json({ error: error.message || "Failed to process order." });
  } finally {
    conn.release();
  }
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

export default app;
