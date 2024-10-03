const express = require("express");
const { createReservation } = require("../controller/reservation.controller");
const router = express.Router();

router.post("./create", createReservation);

module.exports = router;
