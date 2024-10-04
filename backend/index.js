const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();
const mongoose = require("mongoose");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://play-cafe.vercel.app"],
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    console.error(error.stack);
    process.exit(1);
  });

app.use("/api", require("./routes/index"));

app.listen(port, () => console.log(`Server is running on port ${port}!`));

module.exports = app;
