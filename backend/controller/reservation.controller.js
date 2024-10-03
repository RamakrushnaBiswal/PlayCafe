const { z } = require("zod");
const Reservation = require("../models/reservation.model");

// Define the Zod schema for reservation validation
const reservationSchema = z.object({
  guests: z.string(),
  date: z.string(),
  time: z.string(),
});

async function createReservation(req, res) {
  try {
    const validationResult = reservationSchema.safeParse(req.body);

    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.errors);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationResult.error.errors,
      });
    }

    const reservation = await Reservation.create(validationResult.data);

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the reservation",
    });
  }
}

module.exports = {
  createReservation,
};
