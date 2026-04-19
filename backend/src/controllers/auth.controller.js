import bcrypt from "bcrypt";

import User from "../lib/models/User.js";
import { isValidEmail, isValidPassword } from "../utils/validators.js";
import { generateToken } from "../utils/auth.js";

export const checkEmail = async (req, res) => {
  const { email } = req.query;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format!" });
  }

  const user = await User.findOne({ email });

  return res.status(200).json({ exist: !!user });
};

export const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format!" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ exist: !!user });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be 8-16 characters, include uppercase, lowercase, number, and special character!",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    if (!newUser) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    await newUser.save();
    generateToken(newUser._id, res);

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });

    //todo: send a welcome email to user
  } catch (error) {
    console.log("Error in signup controller", error);
    return res.status(500).json({ message: "Failed to create an account!" });
  }
};

export const login = (req, res) => {
  res.send("Login endpoint");
};

export const logout = (req, res) => {
  res.send("Logout endpoint");
};
