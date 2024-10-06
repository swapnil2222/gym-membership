import asyncHandler from "express-async-handler";
import { User } from "../models/index.js";
import { validateUser } from "../utils/userUtils.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

export const createUser = asyncHandler(async (req, res) => {
  validateUser(req.body);
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json({ message: "User created successfuly" });
});

export const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  await User.updateOne({ _id: id }, payload);
  res.status(200).json({ message: `User updated successfully` });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const response = await User.deleteOne({ _id: id });
  const message =
    response.deletedCount > 0
      ? `user with id ${id} deleted successfully.`
      : `No user found to delete.`;

  res.status(200).json({ message });
});
