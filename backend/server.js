import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Example protected route
import { protect, authorize } from "./middleware/authMiddleware.js";
app.get("/api/secret", protect, authorize("teacher"), (req, res) => {
  res.json({ message: `Hello ${req.user.role}, you accessed secret data!` });
});

// Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () =>
      console.log("✅ Server running on http://localhost:5000")
    );
  })
  .catch((err) => console.error(err));
