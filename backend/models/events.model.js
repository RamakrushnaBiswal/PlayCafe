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
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  ageRange: {
    type: String,
    required: true,
    enum: ["0-12", "13-17", "18+", "All Ages"],
  },
  image: {
    type: String,
    default: "https://imgur.com/4fSKUI4.jpg",
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(
          v,
        );
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  bookedCustomers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer' // Reference to the Customer model
  }]
});

// Create the Event model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
