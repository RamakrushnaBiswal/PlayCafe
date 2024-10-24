const express = require("express");
const logger = require("../config/logger"); // Import Winston logger
require("dotenv").config();

const router = express.Router();

// Utility function to safely load modules and handle errors
const safeRequire = (modulePath, fallbackMessage) => {
  try {
    return require(modulePath);
  } catch (error) {
    logger.error(`Error loading ${modulePath}:`, error);
    return (req, res) => {
      res.status(500).json({ error: fallbackMessage });
    };
  }
};

// Safely load routers with error handling
const feedbackRouter = safeRequire("./feedbackRouter", "Feedback functionality is currently unavailable");
const contactUsRouter = safeRequire("./contactUsRouter", "Contact Us functionality is currently unavailable");
const eventRouter = safeRequire("./eventRouter", "Event functionality is currently unavailable");

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the restaurant API!",
    version: "1.0.0",
    endpoints: {
      Reservation: "/reservation",
      Feedback: "/feedback",
    },
    documentation: "https://api-docs-url.com",
  });
});

router.use("/event", eventRouter);
router.use("/admin", safeRequire("./adminRouter", "Admin functionality is currently unavailable"));
router.use("/feedback", feedbackRouter);
router.use("/user", safeRequire("./customerRouter", "User functionality is currently unavailable"));
router.use("/reservation", safeRequire("./reservationRouter", "Reservation functionality is currently unavailable"));
router.use("/newsletter", safeRequire("./newsletterRoute", "Newsletter functionality is currently unavailable"));
router.use("/forgot", safeRequire("./forgotRouter", "Forgot password functionality is currently unavailable"));
router.use("/contact", contactUsRouter);  

module.exports = router;
