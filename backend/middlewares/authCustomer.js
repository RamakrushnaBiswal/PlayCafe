const jwt = require("jsonwebtoken");
const logger = require("../config/logger");
const config = require("../config/secret");

const authenticateCustomer = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"

  if (token) {
    jwt.verify(token, config.JWT_SECRET, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token expired" });
        }
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = user;
      logger.info(`Customer authenticated: ${JSON.stringify(user.username)}`);
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = authenticateCustomer;
