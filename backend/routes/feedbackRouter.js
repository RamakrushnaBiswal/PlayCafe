const express = require("express");
const { createFeedback } = require("../controller/feedback.controller");
const router = express.Router();
const apiInfo = require("../config/api.info");

router.post("/create", createFeedback);

router.get("/", (req, res) => {
  try {
    res.json(apiInfo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
