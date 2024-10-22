const { z } = require("zod");
const nodemailer = require("nodemailer");
require("dotenv").config();

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
      errors: "contactSchema is not validate",
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
      // Uncomment this if needed
      // tls: {
      //   rejectUnauthorized: false, // Disable strict SSL verification
      // },
    });

    const mailOptions = {
      // from: mail, 
      from: process.env.EMAIL_USER,
+     replyTo: mail,
      to: process.env.EMAIL_USER, 
      subject: subject,
      text: message, 
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, mailOptions) => {
      if (error) {
        return console.error("Error occurred: " + error.message);
      }

    });

    res.status(200).json({
      status: "success",
      message: "Your contact request has been successfully received.",
    });
  } catch (err) {
    console.error(`Error at transport: ${err}`);
    res.status(500).json({
      status: "error",
      message:
        "There was an error sending your message. Please try again later.",
    });
  }
};

module.exports = { createContactUs };
