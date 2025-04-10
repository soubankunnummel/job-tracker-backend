import app from "./app";
import { CONFIG } from "./config";
import connectDB from "./config/db";

const startServer = async () => {
  try {
    process.nextTick(connectDB);
    app.listen(CONFIG.PORT, () => {
      console.log("Server started on port "+ CONFIG.PORT);
    });
  } catch (error) { 
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
