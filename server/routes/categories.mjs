import { Router } from "express";
import { categories, products } from "../constants/index.mjs";

const router = Router();

router.get("/", (req, res) => {
  res.send(categories);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const matchedProducts = products?.filter((item) => item?._base === id);

  if (!matchedProducts || matchedProducts.length === 0) {
    return res
      .status(404)
      .json({ message: "No products matched with this category" });
  }
  res.json(matchedProducts);
});

export const categoryRoutes = router;
