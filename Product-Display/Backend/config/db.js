import mongoose from "mongoose";

async function connectToDB() {
  try {
    const connection = await mongoose.connect(process.env.MongoDB_string);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1); // exit with failure
  }
}

export default connectToDB;
