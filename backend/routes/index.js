const express = require("express");
const Reservation = require("../models/reservation.model");

const router = express.Router();

let feedbackRouter;
try {
  feedbackRouter = require("./feedbackRouter");
} catch (error) {
  console.error("Error loading feedbackRouter:", error);
  feedbackRouter = (req, res, next) => {
    res
      .status(500)
      .json({ error: "Feedback functionality is currently unavailable" });
  };
}
router.use("/feedback", feedbackRouter);
router.use("/reservation", require("./reservationRouter"));
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the restaurant API!",
    version: "1.0.0",
    endpoints: {
      Reservation: "/reservation",
    },
    documentation: "https://api-docs-url.com",
  });
});

module.exports = router;
