import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
    res.send("Register Route");
};
const login = async (req: Request, res: Response) => {
    res.send("Login Route");
}