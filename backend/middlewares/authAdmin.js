const jwt = require("jsonwebtoken");
const logger = require("../config/logger");

const authenticateAdmin = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      if (decoded.role !== "admin") {
        return res.sendStatus(403); // Forbidden
      }

      req.user = decoded;
      logger.info(`Admin authenticated: ${JSON.stringify(decoded.email)}`);
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = authenticateAdmin;
