/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt");
const { z } = require("zod");
const Customer = require("../models/customer.model");
const jwt = require("jsonwebtoken");

// Define the schema
const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

async function createCustomer(req, res) {
  // Validate the request body
  const validation = customerSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  const existingCustomer = await Customer.findOne({ email: req.body.email });
  if (existingCustomer) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const customer = new Customer({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await customer.save();
    res.status(201).json({ message: "Customer created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function loginCustomer(req, res) {
  const customerLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  // Validate the request body
  const validation = customerLoginSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  try {
    const customer = await Customer.findOne({ email: req.body.email });
    if (!customer) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      customer.password
    );
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const payload = {
      sub: customer._id, // User ID
      name: customer.name, // Optional
      role: "customer", // Optional
      email: customer.email, // Optional
    };
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Expires in 1 hour
    );
    res.json({
      message: "Login successful",
      token,
      role: "customer",
      user: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function resetPassword(req, res) {
  const customerResetPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  // Validate the request body
  const validation = customerResetPasswordSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  try {
    const customer = await Customer.findOne({ email: req.body.email });
    if (!customer) {
      return res.status(401).json({ error: "Invalid email" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    customer.password = hashedPassword;
    await customer.save();
    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createCustomer,
  loginCustomer,
  resetPassword,
};
