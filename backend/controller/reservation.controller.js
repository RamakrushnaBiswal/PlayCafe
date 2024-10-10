const { z } = require("zod");
const Reservation = require("../models/reservation.model");
const logger = require("../config/logger");
const { sendReservationConfirmation } = require("../config/nodemailer"); // Import your email function

// Define the Zod schema for reservation validation
const reservationSchema = z
  .object({
    guests: z.string(),
    date: z.string(),
    time: z.string(),
    email: z.string().email(), // Include email validation in the schema
  })
  .strict(); // Disallow unknown keys

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

    // Create the reservation in the database
    const reservation = await Reservation.create(validationResult.data);

    // Send a confirmation email
    try {
      const { email, date, guests, time } = validationResult.data;
      await sendReservationConfirmation(email, {
        reservationDate: date,
        guests,
        time,
      });
      logger.info(`Reservation confirmation email sent to ${email}`);
    } catch (emailError) {
      logger.error("Error sending reservation confirmation email:", {
        message: emailError.message,
      });
      // Email error should not block the main reservation process, so no need to return a failure response
    }

    // Send the success response
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
