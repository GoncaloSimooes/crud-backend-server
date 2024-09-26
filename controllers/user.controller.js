const userService = require("../services/user.services");

const getUsers = async (req, res) => {
  try {
    // Call the service to get all users
    const users = await userService.getUsers();
    // Send a 200 response with the list of users
    res.status(200).json(users);
  } catch (error) {
    // Handle errors and send a 500 response with the error message
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Call the service to get a user by ID
    const user = await userService.getUserById(id);

    // If the user is not found, return a 404 status
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If found, return the user data with a 200 status
    res.status(200).json(user);
  } catch (error) {
    // Handle errors and send a 500 response with the error message
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    // Call the service to create a new user
    const user = await userService.createUser(req.body);
    // Return the created user with a 200 status
    res.status(200).json(user);
  } catch (error) {
    // Handle errors and send a 500 response with the error message
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Call the service to update the user by ID
    const user = await userService.updateUserById(id, req.body);

    // If the user is not found, return a 404 status
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the updated user with a 200 status
    res.status(200).json(user);
  } catch (error) {
    // Handle errors and send a 500 response with the error message
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Call the service to delete a user by ID
    const user = await userService.deleteUserById(id);

    // If the user is not found, return a 404 status
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return a success message with a 200 status
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    // Handle errors and send a 500 response with the error message
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
