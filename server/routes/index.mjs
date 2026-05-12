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

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
