const { z } = require("zod");
const nodemailer = require("nodemailer");
const logger = require("../utils/logger");
require("dotenv").config();

const requiredEnvVars = ["EMAIL_USER", "EMAIL_PASS"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  );
}

// Define the Zod schema for contact form validation
const contactSchema = z.object({
  mail: z.string().email(),
  subject: z.string().min(5, "Subject must be at least 5 characters long."),
  message: z.string().min(5, "Message must be at least 5 characters long."),
});

const createContactUs = async (req, res) => {
  const validation = contactSchema.safeParse(req.body);

  if (!validation.success) {
    console.error("Error at validation");
    return res.status(400).json({
      status: "error",
      errors: validation.error.errors,
    });
  }

  const { mail, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Disable strict SSL verification
      },
    });

    const sanitizeInput = (str) => {
      return str.replace(/[<>]/g, "").trim();
    };

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: sanitizeInput(mail),
      to: process.env.EMAIL_USER,
      subject: sanitizeInput(subject),
      text: sanitizeInput(message),
    };

    // Use built-in promise interface
    await transporter.sendMail(mailOptions);
  } catch (err) {
    logger.error("Validation failed", {
      errors: validation.error.errors,
      requestId: req.id,
    });

    const statusCode = err.code === "EAUTH" ? 401 : 500;
    const errorMessage =
      process.env.NODE_ENV === "production"
        ? "There was an error sending your message. Please try again later."
        : err.message;

    res.status(statusCode).json({
      status: "error",
      message: errorMessage,
      requestId: req.id,
    });
  }
};

module.exports = { createContactUs };
