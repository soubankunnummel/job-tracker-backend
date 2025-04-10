import { Request, Response, NextFunction } from "express";

const tryCatch =
  (
    handler: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<any>
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      await handler(req, res, next);
    } catch (error) {
      console.log(`error catching..........................................................`,req.body);
      next(error);
    }
  };

export default tryCatch;
