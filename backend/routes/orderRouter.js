const express = require("express");
const { createOrder, getOrders, deleteOrder } = require("../controller/order.controller.js");

const router = express.Router();


router.post("/create/:id", createOrder);
router.get("/get/:id", getOrders);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
