const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  guests: {
    type: Number,
    required: true,
    min: [1, "At least one guest is required"],
    max: [20, "Maximum 20 guests allowed"],
  },
  date: {
    type: Date,
    required: true,
    min: [new Date(), "Date must be in the future"],
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: (props) => `${props.value} is not a valid time format!`,
    },
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
