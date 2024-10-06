import mongoose from "mongoose";

const paymentScehma = mongoose.Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: [true, "Member Id is required"],
    },
    memberShipId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MemberShip",
      required: [true, "Membership Id is required"],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    paymentDate: {
      type: Date,
      required: [true, "Date is required"],
    },
    status: {
      type: String,
      enum: ["COMPLETED", "PENDING", "FAILED"],
      default: "PENDING",
      required: [true, "status is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentScehma);
