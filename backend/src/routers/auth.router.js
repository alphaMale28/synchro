import express from "express";

import {
  checkEmail,
  login,
  logout,
  signUp,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.get("/check-email", checkEmail);

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

router.use(protectRoute);

router.put("/update-profile", updateProfile);

router.get("/check", (req, res) => res.status(200).json(req.user));

export default router;
