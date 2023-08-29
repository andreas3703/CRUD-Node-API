const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

//get all product
router.get("/", getProducts);

//get a single product
router.get("/:id", getProduct);

// create a product
router.post("/", createProduct);

//Update and delete
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
