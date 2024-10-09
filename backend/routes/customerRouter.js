const express = require("express");
const {
  loginCustomer,
  createCustomer,
  resetPassword,
} = require("../controller/customer.controller");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the User API!",
    version: "1.0.0",
    endpoints: {
      login: "/login",
      register: "/register",
    },
    documentation: "https://api-docs-url.com",
  });
});

router.post("/register", createCustomer);
router.post("/login", loginCustomer);
router.post("/reset-password", resetPassword);

module.exports = router;
