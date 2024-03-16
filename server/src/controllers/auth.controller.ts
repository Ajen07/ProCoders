import { Request, Response } from "express";
import User from "../models/user.model";
import BadRequestError from "../errors/badRequest.error";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please fill all the fields");
  }
  const newUser = await User.create({ name, email, password });

  res.status(201).json({ msg: "Registration successfully", user: newUser });
};
const login = async (req: Request, res: Response) => {
  res.send("Login Route");
};
export { register, login };
