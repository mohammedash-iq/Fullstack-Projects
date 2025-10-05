import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// get all the products using this endpoint
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "No products found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// update a preexisting product using this endpoint
app.patch("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// create a new product at this endpoint
app.post("/api/product", async (req, res) => {
  const product = req.body;
  try {
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }
    const newProduct = new Product(product);

    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// delete existing product using this endpoint
app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  connectToDB();
});
