import mongoose, { Schema } from "mongoose";

const packageSchema = new Schema(
  {
    gymId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gym",
      required: [true, "Please enter the gym Id"],
    },
    name: {
      type: String,
      required: [true, "Please enter the package name"],
    },
    duration: {
      type: Number,
      required: [true, "Please enter the package duration"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the package price"],
    },
    type: {
      type: String,
      required: [true, "Please enter the package type"],
    },
    description: {
      type: String,
      required: [true, "Please enter the package description"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
      required: [true, "Please enter the package status"],
    },
  },
  { timestamps: true }
);

export const Package = mongoose.model("Package", packageSchema);
