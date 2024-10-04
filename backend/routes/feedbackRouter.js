const express = require("express");
const Feedback = require("../models/feedback.model");
const createFeedback = require("../controller/feedback.controller");

const router = express.Router();

router.post("/create", createFeedback);

const apiInfo = require("../config/api.info");

router.get("/", (req, res) => {
  try {
    res.json(apiInfo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
