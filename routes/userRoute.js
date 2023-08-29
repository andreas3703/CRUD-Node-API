const express = require("express");
const User = require("../models/userModel");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

//get all product
router.get("/", getUsers);

//get a single product
router.get("/:id", getUser);

// create a product
router.post("/", createUser);

//Update and delete
router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
