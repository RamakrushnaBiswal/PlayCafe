const secret = require("../config/secret");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || secret.JWT_SECRET;

const handleGoogleOAuth = async (req, res) => {
  const token = jwt.sign(
    {
      sub: req.user._id,
      email: req.user.email,
    },
    process.env.JWT_SECRET || jwtSecret,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("authToken", token, {
    expire: "1h",
    secure: true,
  });
  res.redirect(process.env.FRONTEND_URL || "http://localhost:3000");
};

module.exports = {
  handleGoogleOAuth,
};
