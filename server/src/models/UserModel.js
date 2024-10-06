import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add the first name of user"],
    },
    lastName: {
      type: String,
      required: [true, "Please add the last name of user"],
    },
    role: {
      type: String,
      enum: ["GYM_OWNER", "MEMBER", "SYSTEM_USER"],
      default: "MEMBER",
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please provide the email Id"],
    },
    phone: {
      type: String,
      required: [true, "Please add the user phone"],
    },
    address: {
      type: String,
      required: [true, "Please add the user address"],
    },
    userName: {
      type: String,
      required: [true, "Please add the username"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = mongoose.model("User", userSchema);
