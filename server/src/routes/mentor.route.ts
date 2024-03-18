import express from "express";
import {
  getAllMentors,
  getMentorsofaMentee,
  getSingleMentor,
  registerMentor,
} from "../controllers/mentor.controller";
import authenticate from "../middleware/authenticate";

const router = express.Router();

router.route("/").get(getAllMentors);
router.route("/mentee/mentors").get(authenticate, getMentorsofaMentee);
router.route("/registerMentor").post(authenticate, registerMentor);
router.route("/:mentorId").get(getSingleMentor);

export default router;
