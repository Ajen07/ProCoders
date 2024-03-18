import express from "express";
import { register, login } from "../controllers/auth.controller";
import passport from "../config/passport";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(passport.authenticate("local"), login);
router
  .route("/github")
  .get(passport.authenticate("github", { scope: ["user:email"] }));
router
  .route("/github/callback")
  .get(
    passport.authenticate("github", { failureRedirect: "/" }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );
export default router;
