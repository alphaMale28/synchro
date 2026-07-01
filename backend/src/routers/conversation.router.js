import express from "express";
import { getContacts } from "../controllers/conversation.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.get("/contacts", getContacts);

export default router;
