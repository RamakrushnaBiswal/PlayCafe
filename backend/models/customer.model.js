const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const customerSchema = new Schema({
  name: String,
  password: String,
  email: String,
  role: {
    type: String,
    default: "customer"
  },
  bio: String,
  profilePicture: String,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
