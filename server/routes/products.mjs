import { Router } from "express";
import { products } from "../constants/index.mjs";

const router = Router();

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single Phone was not found" });
  }
  res.send(product);
});

export const productRoute = router;
