const express = require('express');
const router = express.Router();
const { users } = require('../models');
const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// GET all users
router.get("/", async (req, res) => {
  const listOfUsers = await users.findAll();
  res.json(listOfUsers);
});

// Login route
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

// Register new user with image upload
router.post("/", upload.single('profileImage'), async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;
    const profileImage = req.file ? req.file.filename : null;

    const newUser = await users.create({
      firstName,
      lastName,
      phone,
      email,
      password,
      profileImage,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not create user", error: err.message });
  }
});

module.exports = router;
