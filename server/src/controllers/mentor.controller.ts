import { BadRequestError, NotFoundError } from "../errors/index";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Mentor from "../models/mentor.model";
import { IUser } from "lib/types";

const getAllMentors = async (req: Request, res: Response) => {
  const mentors = await Mentor.find({});
  res.status(StatusCodes.OK).json({ mentors });
};

const getMentorsofaMentee = async (req: Request, res: Response) => {
  const _id = (req?.user as any)?._id ?? null;
  const mentors = await Mentor.find({ mentees: _id }).populate("mentors");
  res.status(StatusCodes.OK).json({ mentors });
};

const getSingleMentor = async (req: Request, res: Response) => {
  const { mentorId } = req.params;
  const mentor = await Mentor.findOne({ profileId: mentorId });
  if (!mentor) {
    throw new NotFoundError(`no mentor with id:${mentorId}`);
  }
  res.status(StatusCodes.OK).json({ mentor });
};

const registerMentor = async (req: Request, res: Response) => {
  const { skills, experiences } = req.body;

  if (!skills || !experiences) {
    throw new BadRequestError("Please fill all the fields");
  }
  const mentorId = (req?.user as IUser)?._id;
  await Mentor.create({
    profileId: mentorId,
    skills,
    experiences,
  });
  res.status(StatusCodes.CREATED).json({ msg: "Registration successfull" });
};

export { getAllMentors, getSingleMentor, getMentorsofaMentee, registerMentor };
