// models/Event.js

const mongoose = require("mongoose");

// Define the Event schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create the Event model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
