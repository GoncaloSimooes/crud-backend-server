const User = require("../models/user.model");

// Service to get all users
const getUsers = async () => {
  return await User.find({});
};

// Service to get a user by ID
const getUserById = async (id) => {
  return await User.findById(id);
};

// Service to create a new user
const createUser = async (userData) => {
  return await User.create(userData);
};

// Service to update a user by ID
const updateUserById = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

// Service to delete a user by ID
const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
