import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectionDb = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`DB Host:`, connectInstance?.connection?.host);
  } catch (err) {
    console.log("Error:", err);
    process.exit(1);
  }
};
export default connectionDb;
