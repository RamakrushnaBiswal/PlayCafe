const express = require("express");

const router = express.Router();

router.use("/reservation", require("./reservationRouter"));
router.get("/", (req, res) => {
  res.send("Welcome to the restaurant API!");
});

module.exports = router;
