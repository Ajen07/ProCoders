import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "Route doesnot exist" });
};


export default notFound;