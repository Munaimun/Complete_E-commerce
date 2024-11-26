import { Router } from "express";
import { highlightsProducts } from "../constants/index.mjs";

const router = Router();

router.get("/", (req, res) => {
  res.send(highlightsProducts);
});

export const hihglightsRoute = router;
