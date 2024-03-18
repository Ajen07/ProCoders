import { UnAuthenticatedError } from "../errors";
import { Request, Response, NextFunction } from "express";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    throw new UnAuthenticatedError("User is not authenticated");
  }
  next();
};

export default authenticate;
