const express = require("express");
const {
  verifyEmail,
  verifyOTP,
  resetPassword,
} = require("../controller/forgotPassword.controller");

const router = express.Router();
require("dotenv").config();

router.post("/verify-email", verifyEmail);
router.post("/verify-otp", verifyOTP);
router.post("/resetpassword", resetPassword);

module.exports = router;
