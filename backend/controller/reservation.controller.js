const Reservation = require("../models/reservation.model");

async function createReservation(req, res) {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createReservation,
};
