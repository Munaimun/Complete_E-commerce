import mysql from "mysql2/promise";

const requiredEnv = ["DB_HOST", "DB_USER", "DB_NAME"];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.warn(
    `Missing DB env vars: ${missingEnv.join(", ")}. Database connection may fail until configured.`
  );
}

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "complete_ecommerce",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_POOL_LIMIT || 10),
  queueLimit: 0,
});
