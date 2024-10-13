const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("./config/logger");
const errorMiddleware = require("./middlewares/errrorMiddleware");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "https://play-cafe.vercel.app"],
  }),
);

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
// app.options("/api/reservation/create", cors(corsOptions));

// API routes
app.use("/api", require("./routes/index"));

app.options("*", cors(corsOptions));

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use(errorMiddleware);

// Start server
app.listen(port, () => logger.info(`Server is running on port ${port}!`)); // Log server start

module.exports = app;
