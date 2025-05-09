const express = require('express');
const router = express.Router();
const { users } = require('../models');

// GET all users
router.get("/", async (req, res) => {
  const listOfUsers = await users.findAll();
  res.json(listOfUsers);
});

// POST new user
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
