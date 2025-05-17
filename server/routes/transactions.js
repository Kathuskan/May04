const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');

// Get transactions for a user
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

// Add a new transaction
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

// Update a transaction
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, amount, category, description } = req.body;

  try {
    const [updated] = await Transaction.update(
      { title, amount, category, description },
      { where: { id } }
    );

    if (updated) {
      res.json({ message: "Transaction updated successfully" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update transaction" });
  }
});

// Delete a transaction
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Transaction.destroy({ where: { id } });

    if (deleted) {
      res.json({ message: "Transaction deleted successfully" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete transaction" });
  }
});

module.exports = router;
