import expressAsyncHandler from "express-async-handler";
import { Member } from "../models/index.js";

export const getMembers = expressAsyncHandler(async (req, res) => {
  const members = await Member.find();
  res.status(200).json({ data: members });
});

export const createMember = expressAsyncHandler(async (req, res) => {
  const newMember = new Member(req.body);
  const response = await newMember.save();
  res
    .status(201)
    .json({ message: "record created successfully", data: response });
});

export const getMemberById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const member = await Member.findById(id);
  res.status(200).json({ data: member });
});

export const updateMemberById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const response = await Member.updateOne({ _id: id }, payload);
  const message =
    response.matchedCount === 1
      ? "member updated successfully."
      : "No matching member found to update";
  res.status(200).json({ message });
});

export const deleteMemberById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const response = await Member.deleteOne({ _id: id });
  const message =
    response.deletedCount === 1
      ? "Deleted the member successfully."
      : "Not able to find member to delete.";
  res.status(200).json({ message });
});
