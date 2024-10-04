const express = require("express");
const Feedback = require("../models/feedback.model");
const createFeedback = require("../controller/feedback.controller");

const router = express.Router();

router.post("/create", createFeedback);

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the feedback API!",
    version: "1.0.0",
    endpoints: {
      createFeedback: "/create [POST]",
    },
    documentation: "https://api-docs-url.com",
  });
});

module.exports = router;
