import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },

    favoriteUsers: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],

    blockedUsers: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
