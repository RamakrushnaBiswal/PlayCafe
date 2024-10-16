const jwt = require("jsonwebtoken");
const logger = require("../config/logger");

const authenticateAdmin = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded.role);
      if (decoded.role !== "admin") {
        return res.status(401).json({ error: "Forbidden" });
      }

      next();
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized access" });
    }
  } else {
    return res.status(401).json({ error: "No token was provided" });
  }
};

module.exports = authenticateAdmin;
