import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
const customErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const defaultError = {
    errorCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    errorMessage: err.message || "Something went wrong ,Please try again later",
  };
  if (err.code && err.code === 11000) {
    defaultError.errorCode = StatusCodes.CONFLICT;
    defaultError.errorMessage = `${Object.keys(
      err.keyValue
    )} field has to be unique`;
  }
  
  return res.status(defaultError.errorCode).json({ msg: defaultError.errorMessage });
};
export default customErrorHandler;
