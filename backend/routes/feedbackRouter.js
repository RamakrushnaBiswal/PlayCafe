const express = require("express");
const { createFeedback } = require("../controller/feedback.controller");
const router = express.Router();
const apiInfo = require("../config/api.info");
const logger = require("../config/logger"); // Import your logger
const sessionMiddleware = require("../middlewares/sessionMiddleware");

router.post("/create", sessionMiddleware, createFeedback);

router.get("/", (req, res) => {
  try {
    res.json(apiInfo);
  } catch (error) {
    logger.error("Error fetching API info:", {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
