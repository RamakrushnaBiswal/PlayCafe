const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./config/logger");
const errorMiddleware = require("./middlewares/errrorMiddleware"); // Corrected typo
const passport = require("passport");
const { handleGoogleOAuth } = require("./controller/googleOAuth.controller");
const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://play-cafe.vercel.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB"); // Log successful connection
  })
  .catch((error) => {
    logger.error("Database connection failed:", error.message); // Use logger for connection error
    process.exit(1);
  });

// Enable CORS preflight for the create reservation route only
// Uncomment if needed
// app.options("/api/reservation/create", cors(corsOptions));

// Initialize passport middleware
app.use(passport.initialize());

// API routes
app.use("/api", require("./routes/index"));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  handleGoogleOAuth
);

// Global CORS preflight options
app.options("*", cors(corsOptions));

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(port, () => logger.info(`Server is running on port ${port}!`)); // Log server start

module.exports = app;
