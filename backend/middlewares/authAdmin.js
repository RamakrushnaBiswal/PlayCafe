const jwt = require("jsonwebtoken");
const logger = require("../config/logger");

const authenticateAdmin = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"

  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.role);
    if (decoded.role !== "admin") {
      logger.error(
        `Unauthorized access to admin route: ${JSON.stringify(decoded.id)}`
      );
      return res.status(401).json({ error: "Unauthorized access" });
    }
    logger.info(`Admin authenticated: ${JSON.stringify(decoded.sub)}`);
    next();
  }
};

module.exports = authenticateAdmin;
