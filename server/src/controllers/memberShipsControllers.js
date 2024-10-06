import expressAsyncHandler from "express-async-handler";
import { MemberShip } from "../models/index.js";

export const getMemberShips = expressAsyncHandler(async (req, res) => {
  const memberShips = await MemberShip.find();
  res.status(200).json({ data: memberShips });
});

export const createMemberShip = expressAsyncHandler(async (req, res) => {
  const newMemberShip = new MemberShip(req.body);
  const result = await newMemberShip.save();
  res
    .status(201)
    .json({ message: "Membership created successfully", data: result });
});

export const getMemberShipById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const memberShip = await MemberShip.findById(id);
  res.status(200).json({ data: memberShip });
});

export const updateMemberShipById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await MemberShip.updateOne({ _id: id }, payload);
  const message =
    result.matchedCount === 1
      ? "Updated successfully"
      : "Not able to update due to invalid membershipId";
  res.status(200).json({ data: result, message });
});

export const deleteMemberShipById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await MemberShip.deleteOne({ _id: id });
  const message =
    result.deletedCount === 1
      ? "Membership deleted successfully."
      : "Not able to update due to invalid membershipId";
  res.status(200).json({ message });
});
