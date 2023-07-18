import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongoose is already connected");
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "share_prompt",
    };
    await mongoose.connect(process.env.MONGODB_URI || "", options);
    isConnected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
