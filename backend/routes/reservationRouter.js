const express = require("express");
const { createReservation } = require("../controller/reservation.controller");
const router = express.Router();

router.post("/create", createReservation);
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the restaurant reservation API!",
    version: "1.0.0",
    endpoints: {
      createReservation: "/create [POST]",
    },
    documentation: "https://api-docs-url.com",
  });
});

module.exports = router;
