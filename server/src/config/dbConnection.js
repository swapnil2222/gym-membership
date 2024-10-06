import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("Db connection successful", connect.connection.host);
  } catch (error) {
    console.error("Mongodb connection FAILED:", error);
    process.exit(1);
  }
};

export default connectToDb;
