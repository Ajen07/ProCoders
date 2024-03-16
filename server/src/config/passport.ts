import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { BadRequestError } from "../errors/index";
import User from "../models/user.model";

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email: string, password: string, done) => {
      try {
        const user = await User.findOne({ email: email }).select("+password");
        if (!user) {
          throw new BadRequestError("Invalid email Id");
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
          throw new BadRequestError("Incorrect Password");
        }

        return done(null, user, { message: "Authentication successful" });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  // Serialization logic
  
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
