const express = require("express");
const router = express.Router();
const { createContactUs } = require("../controller/contact.controller"); // Correct controller path

router.post("/contactus", createContactUs); 

module.exports = router;
