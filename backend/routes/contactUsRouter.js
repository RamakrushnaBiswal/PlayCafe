const express = require("express");
const router = express.Router();
const { createContactUs } = require("../controller/contact.controller");
const rateLimit = require("express-rate-limit");
const { body } = require("express-validator");

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const errorType = err.type || "InternalServerError";
  res.status(500).json({
    status: "error",
    message: err.message || "An error occurred processing your request",
    type: errorType,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per window
  message: {
    status: "error",
    message: "Too many requests, please try again later",
  },
});

router.post(
  "/",
  contactFormLimiter,
  [
    body("email").isEmail().normalizeEmail(),
    body("name").trim().isLength({ min: 2 }).escape(),
    body("message").trim().isLength({ min: 10, max: 1000 }).escape(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "error", errors: errors.array() });
    }
    await createContactUs(req, res, next);
  }
);

module.exports = router;
