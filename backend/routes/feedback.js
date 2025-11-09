import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// 🟢 Add new feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving feedback" });
  }
});

// 🔵 Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching feedback" });
  }
});

export default router;
