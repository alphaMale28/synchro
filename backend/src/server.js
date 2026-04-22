import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import { ENV } from "./lib/env.js";
import authRouters from "./routers/auth.router.js";
import messageRouters from "./routers/message.router.js";
import { connectDB } from "./lib/db.js";

const app = express();
const __dirname = path.resolve();

const PORT = ENV.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouters);
app.use("/api/message", messageRouters);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (_, res) => {
    return res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server running in port:", PORT);
  connectDB();
});
