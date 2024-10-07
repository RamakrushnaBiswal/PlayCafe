const express = require("express");
const logger = require("../config/logger");
const { createEvent, getEvents } = require("../controller/event.controller");

const router = express.Router();

router.post("/create", createEvent);
router.get("/", getEvents);

module.exports = router;
