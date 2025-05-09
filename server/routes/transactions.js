const express = require('express');
const router = express.Router();
const { Transaction } = require('../models'); // Adjust if your model is named differently

// Get all transactions for a user
router.get('/:userId', async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.params.userId },
    });
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
});

// Create a new transaction
router.post('/', async (req, res) => {
  const { title, amount, category, description, userId } = req.body;
  try {
    const newTransaction = await Transaction.create({
      title,
      amount,
      category,
      description,
      userId,
    });
    res.status(201).json(newTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add transaction' });
  }
});

module.exports = router;
