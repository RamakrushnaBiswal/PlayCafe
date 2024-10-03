const { z } = require("zod");
const Reservation = require("../models/reservation.model");

// Define the Zod schema for reservation validation
const reservationSchema = z.object({
  Guests: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid Guests format",
  }),
  Date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  Time: z.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/, {
    message: "Invalid time format",
  }),
});

async function createReservation(req, res) {
  try {
    // Validate the request body against the schema
    const validationResult = reservationSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({ message: validationResult.error.errors });
    }

    // Create the reservation if validation passes
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createReservation,
};
