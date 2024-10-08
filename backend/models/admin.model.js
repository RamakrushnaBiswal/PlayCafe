
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: String,
  password: String,
  email: String,
  role: {
    type: String,
    default: "admin"
  },
  bio: String,
  profilePicture: String,
});
 
const Admin = mongoose.model("User", adminSchema);

module.exports = Admin;