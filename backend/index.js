const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./config/logger");
const newsletterRoute = require('./routes/newsletterRoute');
const errorMiddleware = require("./middlewares/errrorMiddleware"); // Corrected typo
const passport = require("passport");
const { handleGoogleOAuth } = require("./controller/googleOAuth.controller");
const app = express();
const port = process.env.PORT || 3000;
const session = require("express-session");
const MongoStore = require("connect-mongo");

const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloudinary");

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://play-cafe.vercel.app"],
  credentials: true,  
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use('/api', newsletterRoute);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: __dirname + "/tmp/",
	})
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB"); // Log successful connection
  })
  .catch((error) => {
    logger.error("Database connection failed:", error.message); // Use logger for connection error
    process.exit(1);
  });

// call to cloud setup
cloudinaryConnect();

// Enable CORS preflight for the create reservation route only
// Uncomment if needed
// app.options("/api/reservation/create", cors(corsOptions));

// Initialize passport middleware
app.use(passport.initialize());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

// API routes
app.use("/api", require("./routes/index"));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  handleGoogleOAuth
);

// Global CORS preflight options
app.options("*", cors(corsOptions));

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(port, () => logger.info(`Server is running on port ${port}!`)); // Log server start

module.exports = app;
