const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//get all product
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get a single product
const getProduct = asyncHandler(async (req, res) => {
  try {
    // const product = await Product.findById(req.params.id);
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// create a product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //cannot find any product in database
    if (!product) {
      res.status(404);
      throw new Error(`cannot find any prodct with ID ${id}`);
    } else {
      const updatedProduct = await Product.findById(req.params.id);
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    //cannot find any product in database
    if (!product) {
      res.status(404);
      throw new Error(`cannot find any product with ID ${id}`);
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
