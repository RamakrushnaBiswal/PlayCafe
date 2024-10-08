const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  role: {
    type: String,
    default: "user"
  },
  bio: String,
  profilePicture: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
