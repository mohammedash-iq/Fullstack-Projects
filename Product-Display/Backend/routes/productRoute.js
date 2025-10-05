import express from "express";
import {
  updateProduct,
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProduct);
router.patch("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
