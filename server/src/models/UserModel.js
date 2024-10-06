const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
    adddress: {
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

export const User = mongoose.model("User", userSchema);
