import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized no taked provided" });

    const decoded = jwt.verify(token, ENV.JWT_SECRET_KEY);

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(403).json({ message: "User not found" });
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute:", error``);
  }
};
