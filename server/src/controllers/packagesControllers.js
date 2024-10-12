import expressAsyncHandler from "express-async-handler";
import { Package } from "../models/packageModel.js";

export const getPackages = expressAsyncHandler(async (req, res) => {
  const packages = await Package.find();
  res.status(200).json({ data: packages });
});

export const createPackage = expressAsyncHandler(async (req, res) => {
  const newPackage = new Package(req.body);
  const result = await newPackage.save();
  res
    .status(201)
    .json({ data: result, message: "Package created successfully." });
});

export const getPackageById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const findPackage = await Package.findById(id);
  res.status(200).json({ data: findPackage });
});

export const updatePackageById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await Package.updateOne({ _id: id }, req.body);
  const message =
    result.matchedCount === 1
      ? "Package updated successfully"
      : "No matching id found to update the package";
  res.status(200).json({ message });
});

export const deletePackageById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await Package.deleteOne({ _id: id });
  const message =
    result.deletedCount === 1
      ? "Package deleted successfully"
      : "No package found by given Id to delete";
  res.status(200).json({ message });
});
