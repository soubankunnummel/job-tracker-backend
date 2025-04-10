import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI =
  process.env.MONGODB_URI || ''
const PORT = process.env.PORT || 8080;

 export const CONFIG = {
  MONGODB_URI,
  PORT
};
