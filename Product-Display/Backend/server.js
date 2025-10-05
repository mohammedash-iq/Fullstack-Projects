import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import Product from "./models/product.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// routes for all the product operations
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  connectToDB();
});
