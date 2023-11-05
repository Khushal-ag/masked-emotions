import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Database is connected");
    return;
  }
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017",
      {
        dbName: process.env.MONGODB_DB,
      }
    );
    isConnected = true;
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error");
    throw err;
  }
};
