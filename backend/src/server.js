import express from "express";

import { ENV } from "./lib/env.js";
import authRouters from "./routers/auth.router.js";
import messageRouters from "./routers/message.router.js";

const app = express();

const PORT = ENV.PORT || 8000;

app.use("/api/auth", authRouters);
app.use("/api/message", messageRouters);

app.listen(PORT, () => console.log("Server running in port:", PORT));
