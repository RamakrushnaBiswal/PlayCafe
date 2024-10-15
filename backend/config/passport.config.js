// passportConfig.js
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const passport = require("passport");
const config = require("./secret");
const Customer = require("../models/customer.model");

// Secret key to sign the JWT token
const secret = config.JWT_SECRET;
console.log(secret);
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    // jwt_payload contains the decoded token
    // You can use the payload data (such as user id) to check if the user exists
    const userId = jwt_payload.sub;
    Customer.findById(userId)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((error) => {
        return done(error, false);
      });
  })
);

module.exports = passport;
