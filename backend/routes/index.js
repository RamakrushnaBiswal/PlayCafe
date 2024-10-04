const express = require("express");
const Reservation = require("../models/reservation.model");

const router = express.Router();

router.use("/feedback", require("./feedbackRouter"));
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
