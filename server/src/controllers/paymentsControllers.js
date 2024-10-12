import expressAsyncHandler from "express-async-handler";
import { Payment } from "../models/paymentModel.js";

export const getPayments = expressAsyncHandler(async (req, res) => {
  const results = await Payment.find();
  res.status(200).json({ data: results });
});

export const createPayment = expressAsyncHandler(async (req, res) => {
  const payload = req.body;
  const newPayment = new Payment(payload);
  const result = await newPayment.save();
  res
    .status(201)
    .json({ message: "Payment recorded successfully", data: result });
});

export const getPaymentById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const payment = await Payment.findById(id);
  res.status(200).json({ data: payment });
});

export const updatePaymentById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const updateResult = await Payment.updateOne({ _id: id }, payload);
  const message =
    updateResult.matchedCount === 1
      ? "Payment Updated Successfully"
      : "Payment updaye failed due to non matcih id";
  res.status(200).json({ message });
});

export const deletePaymentById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await Payment.deleteOne({ _id: id });
  const message =
    result.deletedCount === 1
      ? "Payment deleted successfully"
      : "Unable to delete payment, invalid payment id";
  res.status(200).json({ message });
});
