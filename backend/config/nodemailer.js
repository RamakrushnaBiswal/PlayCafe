require("dotenv").config();
const nodemailer = require("nodemailer");

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send reservation confirmation via email
exports.sendReservationConfirmation = async (email, reservationDetails) => {
  const { reservationDate, guests, time } = reservationDetails;

  // Construct the email content
  const emailText = `
    Dear Customer,
    
    We are pleased to confirm your reservation. Here are the details of your reservation:

    Reservation Date: ${reservationDate}
    Number of Guests: ${guests}
    Reservation Time: ${time}
    
    Thank you for choosing our service. We look forward to hosting you.

    Best regards,
    PlayCafe
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reservation Confirmation",
      text: emailText,
    });
    console.log("Reservation confirmation sent successfully via email");
  } catch (error) {
    console.error("Error sending reservation confirmation email:", error);
    throw new Error("Failed to send reservation confirmation email");
  }
};