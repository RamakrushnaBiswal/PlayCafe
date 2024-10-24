const { z } = require("zod");
const nodemailer = require("nodemailer");
const logger = require('../utils/logger');
require("dotenv").config();

// data require form .env file : EMAIL_USER, EMAIL_PASS

// Define the Zod schema for contact form validation
const contactSchema = z.object({
   mail: z.string().email("Please provide a valid email address").max(255, "Email must not exceed 255 characters"),
   subject: z.string().min(5, "Subject must be at least 5 characters long.").max(200, "Subject must not exceed 200 characters"),
   message: z.string().min(5, "Message must be at least 5 characters long.").max(5000, "Message must not exceed 5000 characters"),
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
         pool: true,
         maxConnections: 5,
         maxMessages: 100,
         rateDelta: 1000,
         rateLimit: 5,
         timeout: 5000,
    });

    const sanitizeInput = (str) => {
       return str.replace(/[<>]/g, '').trim();
    };

    const mailOptions = {
      // from: mail,
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: sanitizeInput(mail),
      to: process.env.EMAIL_USER,
      subject: sanitizeInput(subject),
      text: sanitizeInput(message),
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      status: "success",
      message: "Your contact request has been successfully received.",
    });
  } catch (err) {
  logger.error('Email sending failed', {
    error: err.message,
    requestId: req.id,
    userEmail: mail,
  });

  const statusCode = err.code === 'EAUTH' ? 401 : 500;
  const errorMessage = process.env.NODE_ENV === 'production'
    ? 'There was an error sending your message. Please try again later.'
    : err.message;

  res.status(statusCode).json({
     status: "error",
    message: errorMessage,
    requestId: req.id,
   });
  }
};

module.exports = { createContactUs };
