import mongoose, { Schema } from "mongoose";

const gymSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter gym name."],
    },
    city: {
      type: String,
      required: [true, "Please enter gym city."],
    },
    address: {
      type: String,
      required: [true, "Please enter gym address."],
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please enter ownerId."],
    },
  },
  { timestamps: true }
);

export const Gym = mongoose.model("Gym", gymSchema);
