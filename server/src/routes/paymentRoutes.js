import express from "express";
import {
  createPayment,
  deletePaymentById,
  getPaymentById,
  getPayments,
  updatePaymentById,
} from "../controllers/paymentsControllers.js";

const router = express.Router();

router.route("/").get(getPayments).post(createPayment);
router
  .route("/:id")
  .get(getPaymentById)
  .put(updatePaymentById)
  .delete(deletePaymentById);

export default router;
