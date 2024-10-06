import asyncHandler from "express-async-handler";

export const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all users" });
});

export const createUser = asyncHandler(async (req, res) => {
  console.log("body", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("all fields are mandatory!!");
  }
  res.status(201).json({ message: "Create users" });
});

export const getUserById = asyncHandler(async (req, res) => {
  console.log("body", req.body);
  const id = req.params.id;
  res.status(200).json({ message: `Get user by id ${id}` });
});

export const updateUser = asyncHandler(async (req, res) => {
  console.log("body", req.body);
  const id = req.params.id;
  res.status(200).json({ message: `Update user by id ${id}` });
});

export const deleteUser = asyncHandler(async (req, res) => {
  console.log("body", req.body);
  const id = req.params.id;
  res.status(200).json({ message: `delete user by id ${id}` });
});

export default {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
