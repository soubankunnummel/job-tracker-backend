
import mongoose from "mongoose";
import { CONFIG } from "./index";

const connectDB = async () => { 
  try {
    await mongoose.connect(CONFIG.MONGODB_URI); 
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB; 
