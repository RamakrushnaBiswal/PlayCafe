const express = require("express");
const router = express.Router();
const { createContactUs } = require("../controller/contact.controller"); 
const { validationResult } = require("express-validator");

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    status: "error",
    message: "An error occurred processing your request"
  });
});

router.post("/contactus", createContactUs);

module.exports = router;
