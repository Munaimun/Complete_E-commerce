import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.mjs";

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.use("/", router);

// Catch-all route to serve index.html for unmatched routes
app.get("*", (req, res) => {
  res.send().json("Test");
  // res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
