import mongoose from "mongoose";

const gymSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter gym name"],
    },
    city: {
      type: String,
      required: [true, "Please enter gym city"],
    },
    address: {
      type: String,
      required: [true, "Please enter gym address"],
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Gym = mongoose.model("Gym", gymSchema);
