import { Router } from "express";
import { blogsData } from "../constants/index.mjs";

const router = Router();

router.get("/", (req, res) => {
  res.send(blogsData);
});

export const blogRoute = router;
