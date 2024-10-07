// models/Event.js

const mongoose = require("mongoose");

// Define the Event schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  ageRange: {
    type: String,
    required: true,
    enum: ["0-12", "13-17", "18+", "All Ages"],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});
// Create the Event model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
