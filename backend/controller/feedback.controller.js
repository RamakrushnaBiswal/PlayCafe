const { z } = require("zod");
const { Feedback } = require("../models/feedback.model");

// Define the Zod schema for feedback validation
const feedbackSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  feedback: z.string().min(10),
});

async function createFeedback(req, res) {
  try {
    const validationResult = feedbackSchema.safeParse(req.body);

    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.errors);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationResult.error.errors,
      });
    }

    const feedback = await Feedback.create(validationResult.data);

    res.status(201).json({
      success: true,
      message: "Feedback created successfully",
      data: feedback,
    });
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the feedback",
    });
  }
}

module.exports = {
  createFeedback,
};

//dummy api call for feedback
// {
//     "name": "John Doe",
//     "email": "john@1212.com",
//     "feedback": "This is a dummy feedback"
// }
