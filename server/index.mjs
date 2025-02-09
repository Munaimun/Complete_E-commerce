import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/index.mjs"; // Assuming you have your routes here
const app = express();

import SSLCommerzPayment from 'sslcommerz-lts';

const port = process.env.PORT || 8000;
app.use(express.json());

// CORS configuration to allow frontend requests from localhost:5173
app.use(
  cors({
    origin: "*", // Allow requests from this origin
    methods: ["GET", "POST"], // Allow GET and POST methods
    credentials: true, // Allow cookies to be sent if needed
  })
);

// Routes
app.use("/", router);

// Catch-all route to serve index.html for unmatched routes
app.get("*", (req, res) => {
  res.send("done");
  // res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Checkout route
app.post("/checkout", async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productCollection.findOne({ _id: new ObjectId(productId) });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    console.log(product);

    const data = {
      total_amount: 100,
      currency: "BDT",
      tran_id: "REF123",
      success_url: "http://localhost:3030/success",
      fail_url: "http://localhost:3030/fail",
      cancel_url: "http://localhost:3030/cancel",
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: product.name,
      product_category: product.category || "General",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "customer@example.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    // Uncomment SSLCommerz logic when ready
    // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    // sslcz.init(data).then(apiResponse => {
    //   const GatewayPageURL = apiResponse.GatewayPageURL;
    //   res.redirect(GatewayPageURL);
    //   console.log("Redirecting to:", GatewayPageURL);
    // });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ error: "Failed to process order." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
