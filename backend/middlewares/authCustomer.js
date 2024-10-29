const jwt = require("jsonwebtoken");
const logger = require("../config/logger");
const config = require("../config/secret");
const Customer = require("../models/customer.model");
 // Assuming the Customer model is located here

const authenticateCustomer = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET);

    // Retrieve user from database to check verification status
    const user = await Customer.findById(decoded.sub);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: "Account not verified" });
    }

    // If verified, attach user to request and proceed
    req.user = user;
    logger.info(`Customer authenticated: ${user.name}`);
    next();

  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    logger.error("Token verification failed:", err);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authenticateCustomer;
