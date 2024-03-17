import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  jobProfile: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const mentorSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mentees: [String],
  experiences: [experienceSchema],
  skills: [String],
});

export default mongoose.model("Mentor", mentorSchema);
