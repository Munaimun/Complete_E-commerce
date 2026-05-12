import express from "express";

import { categoryRoutes } from "./categories.mjs";
import { blogRoute } from "./blogs.mjs";
import { hihglightsRoute } from "./highlights.mjs";
import { productRoute } from "./products.mjs";
import { userRoute } from "./users.mjs";
import { orderRoute } from "./orders.mjs";
import { adminRoute } from "./admin.mjs";

const router = express.Router();

const moduleRoutes = [
  { path: "/categories", route: categoryRoutes },
  { path: "/highlights", route: hihglightsRoute },
  { path: "/products", route: productRoute },
  { path: "/blogs", route: blogRoute },
  { path: "/users", route: userRoute },
  { path: "/orders", route: orderRoute },
  { path: "/admin", route: adminRoute },
];

// Log mounted routes for debugging on Vercel deployments
try {
  console.log("Server: about to mount routes:", moduleRoutes.map((r) => r.path));
} catch (e) {
  // ignore logging errors in strict environments
}

moduleRoutes.forEach((route) => {
  try {
    router.use(route.path, route.route);
    console.log(`Mounted route: ${route.path}`);
  } catch (err) {
    console.error(`Failed to mount route ${route.path}:`, err && err.message ? err.message : err);
  }
});

export default router;
