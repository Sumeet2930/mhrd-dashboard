import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import schemeRoutes from "./routes/schemes.js";
import connectMongoDB from "./config/mongo.js";   // ✅ new line

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ connect MongoDB
connectMongoDB();

// ✅ main route for schemes (MySQL)
app.use("/api/schemes", schemeRoutes);

// ✅ import feedback route (we’ll add soon)
import feedbackRoutes from "./routes/feedback.js";
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
