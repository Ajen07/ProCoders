import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [3, "Name must be at least 3 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      unique: true,
      trim: true,
      minlength: 3,
      select: false,
    },
    githubId: {
      type: String,
      trim: true,
      default: "",
    },
    role: {
      type: String,
      enum: ["mentee", "admin", "mentor"],
      default: "mentee",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (userPassword: string) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

userSchema.plugin(passportLocalMongoose);

export default mongoose.model("User", userSchema);
