// Add this at the top of eventRouter.js to check if it's being loaded correctly
console.log("eventRouter loaded");

const express = require("express");
const logger = require("../config/logger");
const {
  createEvent,
  getEvents,
  deleteEvent,
  bookEvent,
  getBookedEvents,
} = require("../controller/event.controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      message: "Welcome to the event API!",
      version: "1.0.0",
      endpoints: {
        CreateEvent: "/event/create",
        GetEvents: "/event/all",
        bookEvents : "/event/book-event",
        GetBookedEvents : "/event/get-booked-events/:customerId",    
      },
      documentation: "https://api-docs-url.com",
    });
  } catch (error) {
    logger.error("Error in /event route:", error); // Log the error
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/create", createEvent);
router.get("/all", getEvents);
router.delete("/delete/:id", deleteEvent);
router.post("/book-events", bookEvent);
router.get("/get-booked-events/:customerId", getBookedEvents);

module.exports = router;
