const express = require("express");

const router = express.Router();

router.use("/reservation", require("./reservation.router"));

module.exports = router;
