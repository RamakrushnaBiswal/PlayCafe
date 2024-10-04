const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: [255, "Email cannot be more than 255 characters"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    feedback: {
      type: String,
      required: true,
      trim: true,
      maxlength: [1000, "Feedback cannot be more than 1000 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

feedbackSchema.pre("save", function (next) {
  // Basic sanitization example - replace with a robust sanitization library in production
  const sanitize = (str) =>
    str.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[m])
    );

  this.name = sanitize(this.name);
  this.feedback = sanitize(this.feedback);
  next();
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = {
  Feedback,
};
