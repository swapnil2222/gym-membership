import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId is required"],
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      default: ["Male"],
    },
    joiningDate: {
      type: Date,
      required: [true, "Joining date is required"],
    },
    profileURL: {
      type: String,
      required: false,
    },
    gymId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gym",
      required: [true, "GymId is required"],
    },
  },
  { timestamps: true }
);

export const Member = mongoose.model("Member", memberSchema);
