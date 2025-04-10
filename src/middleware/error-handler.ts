import { Request, Response, NextFunction } from "express";
import AppError from "../utils/app-error";

const errorHandler = (
    err: Error | AppError, 
    req: Request, 
    res: Response | any, 
    next: NextFunction
  ) => {
      let statusCode = 500;
      let message = "Internal Server Error";
      
      // Check if err is an instance of AppError
      if (err instanceof AppError) {
          statusCode = err.statusCode;
          message = err.message;
      }
  
      console.error(`[ERROR]-: ${message}`);
  
      return res.status(statusCode).json({
          success: false,
          statusCode,
          message,
      });
  };

export default errorHandler; 
