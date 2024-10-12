/* eslint-disable no-unused-vars */
// middlewares/errorMiddleware.js
const logger = require("../config/logger"); // Assuming you have a logger set up

function errorMiddleware(err, req, res, next) {
  // Log the error details using logger
  logger.error(err.message, {
    stack: req.body, // Include stack trace
    url: req.originalUrl, // Request URL
    method: req.method, // HTTP method
    body: req.body, // Request body
  });

  // Send the response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "An unexpected error occurred.",
  });
}

module.exports = errorMiddleware;
