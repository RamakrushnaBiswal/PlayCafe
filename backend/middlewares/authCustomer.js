const jwt = require("jsonwebtoken");
const logger = require("../config/logger");

const authenticateCustomer = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
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
