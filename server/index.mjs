import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/index.mjs"; // Assuming you have your routes here
import { initializeDatabase } from "./db/init.mjs";
import { pool } from "./db/pool.mjs";
import { createOrderFromPayload } from "./utils/orderService.mjs";
import { requireAuth } from "./middleware/auth.mjs";
const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());

// CORS configuration to allow frontend requests from localhost:5173
app.use(
  cors({
    origin: "*", // Allow requests from all origins
    methods: ["GET", "POST"], // Allow GET and POST methods
    // credentials: true,
  })
);

// Routes
app.use("/", router);

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", database: "disconnected" });
  }
});

// Catch-all route to serve index.html for unmatched routes
app.get("*", (req, res) => {
  res.send("done");
  // res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Checkout route
app.post("/checkout", requireAuth, async (req, res) => {
  const conn = await pool.getConnection();
  try {
    if (req.user?.email !== req.body?.email) {
      return res.status(403).json({ error: "Order email does not match authenticated user" });
    }

    const createdOrder = await createOrderFromPayload(conn, req.body);

    // Uncomment SSLCommerz logic when ready
    // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    // sslcz.init(data).then(apiResponse => {
    //   const GatewayPageURL = apiResponse.GatewayPageURL;
    //   res.redirect(GatewayPageURL);
    //   console.log("Redirecting to:", GatewayPageURL);
    // });
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

const bootstrap = async () => {
  try {
    await initializeDatabase();

    if (process.env.VERCEL !== "1") {
      app.listen(port, () => {
        console.log(`Server is running on ${port}`);
      });
    }
  } catch (error) {
    console.error("Database unavailable; starting with static catalog data", error.message);
    if (process.env.VERCEL !== "1") {
      app.listen(port, () => {
        console.log(`Server is running on ${port}`);
      });
    }
  }
};

bootstrap();

export default app;
