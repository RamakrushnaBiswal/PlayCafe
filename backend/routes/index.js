const express = require("express");
const logger = require("../config/logger"); // Import Winston logger
require("dotenv").config();

const router = express.Router();

// Utility function to safely load modules and handle errors
const safeRequire = (modulePath, fallbackMessage) => {
  try {
    return require(modulePath);
  } catch (error) {
    const errorDetails = {
      module: modulePath.split("/").pop(),
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    };
    logger.error("Module loading error:", errorDetails);

    // Return a pre-defined handler to avoid creating closures
    return safeRequire.errorHandler(fallbackMessage);
  }
};

// Pre-defined error handler to avoid creating closures
safeRequire.errorHandler = (message) => (req, res) => {
  res.status(503).json({
    status: "error",
    message:
      process.env.NODE_ENV === "production"
        ? message
        : `Service unavailable: ${message}`,
  });
};

// Safely load routers with error handling
const feedbackRouter = safeRequire(
  "./feedbackRouter",
  "Feedback functionality is currently unavailable"
);
const contactUsRouter = safeRequire(
  "./contactUsRouter",
  "Contact Us functionality is currently unavailable"
);
const eventRouter = safeRequire(
  "./eventRouter",
  "Event functionality is currently unavailable"
);

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

// Authentication routes
router.use(
  "/admin",
  safeRequire("./adminRouter", "Admin functionality is currently unavailable")
);
router.use(
  "/user",
  safeRequire("./customerRouter", "User functionality is currently unavailable")
);
router.use(
  "/forgot",
  safeRequire(
    "./forgotRouter",
    "Forgot password functionality is currently unavailable"
  )
);

// Core feature routes
router.use(
  "/reservation",
  safeRequire(
    "./reservationRouter",
    "Reservation functionality is currently unavailable"
  )
);
router.use("/event", eventRouter);

// Feedback and communication routes
router.use("/feedback", feedbackRouter);
router.use("/contact", contactUsRouter);
router.use(
  "/newsletter",
  safeRequire(
    "./newsletterRoute",
    "Newsletter functionality is currently unavailable"
  )
);

module.exports = router;
