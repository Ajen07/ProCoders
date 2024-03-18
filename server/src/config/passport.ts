import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as LocalStrategy } from "passport-local";
import { BadRequestError } from "../errors/index";
import User from "../models/user.model";
import { Email } from "lib/types";

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
passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: process.env.GITHUB_CALLBACK_URL as string,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {

      try {
        const user = await User.findOne({ githubId: profile.id });

        if (user) {
          return done(null, user);
        }
        const emailResponse = await fetch(
          "https://api.github.com/user/emails",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "User-Agent": "ProCoders",
            },
          }
        );
        const emailData = await emailResponse.json();
        const primaryEmail: Email = emailData.find(
          (email: Email) => email.primary === true
        );

        const userAlreadyExists = await User.findOne({ email: primaryEmail.email });
        if (userAlreadyExists) {
          return done(null, user);
        }

        const newUser = await User.create({
          githubId: profile.id,
          name: profile.displayName ? profile.displayName : profile.username,
          email: primaryEmail.email,
        });

        return done(null, newUser);
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
