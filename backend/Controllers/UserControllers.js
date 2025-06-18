const User = require("../Model/UserModel");

// Get all users
const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  if (!users) {
    return res.status(404).json({ message: "Users not found" });
  }

  return res.status(200).json({ users });
};

// Add new user
const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;
  let user;

  try {
    user = new User({ name, gmail, age, address });
    await user.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  if (!user) {
    return res.status(400).json({ message: "Unable to add user" });
  }

  return res.status(201).json({ user });
};

// Get user by ID
const getById = async (req, res, next) => {
  const id = req.params.id;
  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

// Update user
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, gmail, age, address } = req.body;
  let user;

  try {
    user = await User.findByIdAndUpdate(id, { name, gmail, age, address }, { new: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  if (!user) {
    return res.status(404).json({ message: "Unable to update user" });
  }

  return res.status(200).json({ user });
};

// Delete user
const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;

  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  if (!user) {
    return res.status(404).json({ message: "Unable to delete user" });
  }

  return res.status(200).json({ message: "User deleted successfully" });
};

// Export
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
