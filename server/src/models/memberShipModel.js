import mongoose, { Schema } from "mongoose";

const memberShipSchema = new Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: [true, "MemberId is required"],
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: [true, "PackageId is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start Date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End Date is required"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
      required: [true, "Status is required"],
    },
  },
  { timestamps: true }
);

export const MemberShip = mongoose.model("MemberShip", memberShipSchema);
