import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    const conn = await mongoose.connect(url);

    console.log(`DB Connected to: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default connectDB;
