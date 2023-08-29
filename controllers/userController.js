const User = require("../models/userModel");

//get all product
const getUsers = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//get a single product
const getUser = async (req, res) => {
  try {
    // const product = await Product.findById(req.params.id);
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// create a product
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// update product
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    //cannot find any product in database
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any prodct with ID ${id}` });
    } else {
      const updatedUser = await User.findById(id);
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// delete product
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    //cannot find any product in database
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any prodct with ID ${id}` });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
