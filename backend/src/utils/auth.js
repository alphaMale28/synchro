import jwt from "jsonwebtoken";

import { ENV } from "../lib/env.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, ENV.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  const age = 1000 * 60 * 60 * 24 * 7;

  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "Strict",
    secure: ENV.NODE_ENV === "production",
    maxAge: age,
  });

  return token;
};
