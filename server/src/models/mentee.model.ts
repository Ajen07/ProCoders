import mongoose from "mongoose";
import Mentor from "./mentor.model";

const menteeSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mentors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
  ],
});

export default mongoose.model("Mentee", menteeSchema);
