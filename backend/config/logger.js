// config/logger.js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // Set the default logging level
  format: winston.format.combine(
    winston.format.timestamp(), // Include a timestamp
    winston.format.colorize(), // Colorize the output
    winston.format.printf(({ timestamp, level, message, stack, errors }) => {
      return `${timestamp} [${level}] ${message}${
        stack ? `\nStack: ${stack}` : ""
      }${errors ? `\nErrors: ${JSON.stringify(errors)}` : ""}`; // Custom format
    }),
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: "error.log", level: "error" }), // Log errors to a file
  ],
});

module.exports = logger;
