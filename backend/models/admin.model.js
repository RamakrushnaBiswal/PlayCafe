const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    password: String,
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      default: "admin",
    },
    bio: String,
    profilePicture: String,
  },
  { timestamps: true },
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
