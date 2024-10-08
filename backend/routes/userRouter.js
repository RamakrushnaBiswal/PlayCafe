const express = require("express");
const { createUser, loginUser } = require("../controller/user.controller");
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
    documentation: "https://api-docs-url.com",});
});

router.post("/register", createUser);
router.post("/login", loginUser);

module.exports = router;
