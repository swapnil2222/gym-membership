import asyncHandler from "express-async-handler";
import { Gym } from "../models/gymModel.js";

export const getGyms = asyncHandler(async (req, res) => {
  const gymsData = await Gym.find();
  res.status(200).json(gymsData);
});

export const createGym = asyncHandler(async (req, res) => {
  const newGym = new Gym(req.body);
  const result = await newGym.save();
  res.status(200).json({ message: "Gym created successfully", data: result });
});

export const getGymById = asyncHandler(async (req, res) => {
  const gymId = req.params.id;
  const gymData = await Gym.findById(gymId);
  res.status(200).json(gymData);
});

export const updateGymById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const updateResponse = await Gym.updateOne({ _id: id }, payload);
  const message =
    updateResponse.matchedCount === 1
      ? "Gym data updated successfully."
      : "No matching gym data found to update";
  res.status(200).json({ message: "Gym data updated successfully." });
});

export const deleteGymById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await Gym.deleteOne({ _id: id });
  const message =
    result.deletedCount > 0
      ? "Gym deleted successfully."
      : "No matching gym found to delete.";
  res.status(200).json({ message });
});
