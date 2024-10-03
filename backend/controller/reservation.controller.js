const { z } = require("zod");
const Reservation = require("../models/reservation.model");

// Define the Zod schema for reservation validation
const reservationSchema = z.object({
  Guests: z.string(),
  Date: z.string(),
  Time: z.string(),
});

async function createReservation(req, res) {
  try {
    // Validate the request body against the schema
    const validationResult = reservationSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({ message: validationResult.error.errors });
    }

    // Create the reservation if validation passes
    const reservation = await Reservation.create({
      Guests: validationResult.data.Guests,
      Date: validationResult.data.Date,
      Time: validationResult.data.Time,
    });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createReservation,
};
