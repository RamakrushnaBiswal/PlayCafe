const logger = require("../config/logger");
const Event = require("../models/events.model");

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { title, description, date, time, age, image } = req.body;

    // Input validation
    if (!title || !description || !date || !time) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      age,
      image,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    logger.error("Error creating event:", error);
    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Invalid input data", details: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (events.length === 0) {
      return res.status(204).send(); // No Content
    }

    res.status(200).json(events);
  } catch (error) {
    console.error("Error retrieving events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createEvent, getEvents };
