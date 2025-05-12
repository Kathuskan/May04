const express = require('express');
const router = express.Router();
const { users } = require('../models'); // ✅ Import only once

// GET all users
router.get("/", async (req, res) => {
  const listOfUsers = await users.findAll();
  res.json(listOfUsers);
});


// ✅ Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// ✅ Register new user
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;
    const newUser = await users.create({
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not create user", error: err.message });
  }
});

module.exports = router;
