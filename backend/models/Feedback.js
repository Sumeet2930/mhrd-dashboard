import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Feedback", feedbackSchema);
