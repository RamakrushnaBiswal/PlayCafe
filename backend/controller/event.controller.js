const Event = require("../models/events.model");

// Create a new event
const createEvent = async (req, res) => {
  try {
    const event = req.body;

    const newEvent = new Event({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      age: event.age,
      image: event.image,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createEvent, getEvents };
