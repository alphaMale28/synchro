// import dotenv from "dotenv";
// dotenv.config();

import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  ARCJET_KEY: process.env.ARCJET_KEY,
  ARCJET_ENV: process.env.ARCJET_ENV,
};
