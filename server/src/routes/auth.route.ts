import express from "express";
import { register, login } from "../controllers/auth.controller";
import passport from "../config/passport";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(passport.authenticate('local'),login);

export default router;