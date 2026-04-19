// import dotenv from "dotenv";
// dotenv.config();

import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
