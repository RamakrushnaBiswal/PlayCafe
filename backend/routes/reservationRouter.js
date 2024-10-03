const express = require("express");
const { createReservation } = require("../controller/reservation.controller");
const router = express.Router();

router.post("/create", createReservation);
router.get("/", (req, res) => {
  res.send("Welcome to the restaurant resservation API!");
});

module.exports = router;
