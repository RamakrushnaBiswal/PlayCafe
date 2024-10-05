const { z } = require("zod");
const Reservation = require("../models/reservation.model");
const logger = require("../config/logger"); // Import your logger

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
      logger.error("Validation error:", {
        errors: validationResult.error.errors,
        body: req.body,
      });
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
    logger.error("Error creating reservation:", {
      message: error.message,
      stack: error.stack,
      body: req.body,
    });

    res.status(500).json({
      success: false,
      message: "An error occurred while creating the reservation",
    });
  }
}

module.exports = {
  createReservation,
};
