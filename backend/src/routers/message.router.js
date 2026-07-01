import express from "express";

import {
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.get("/chats/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
