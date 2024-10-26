/* eslint-disable no-useless-escape */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: { type: String, required: true },
    password: String,
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    verificationCode: {
      type: String,
      default: ""
    },
    role: {
      type: String,
      default: "customer",
    },
    bio: String,
    profilePicture: String,
  },
  { timestamps: true },
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
