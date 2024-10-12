const express = require("express");
const {
  subscribeToNewsletter,
} = require("../controller/newsletter.controller"); // Import the controller
const router = express.Router();
require("dotenv").config();

router.post("/subscribe", subscribeToNewsletter);

module.exports = router;
