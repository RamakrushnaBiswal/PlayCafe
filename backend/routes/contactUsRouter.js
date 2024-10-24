const express = require("express");
const router = express.Router();
const { createContactUs } = require("../controller/contact.controller"); 

router.post("/contactus", createContactUs); 

module.exports = router;
