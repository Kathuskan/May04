import React, { useState } from 'react';
import axios from 'axios';

export const Addtransactions = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState(1); // Default user ID (modify based on your needs)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !description || !userId) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/transactions', {
        title,
        amount: parseFloat(amount), // Ensure amount is a number
        category,
        description,
        userId,
      });

      console.log('Response:', response.data);
      alert('Transaction added successfully!');

      // Reset form
      setTitle('');
      setAmount('');
      setCategory('');
      setDescription('');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(`Failed to add transaction: ${error.response?.data?.error || 'Unknown error'}`);
    }
  };

  return (
    <main className="my-3 ml-64 mt-28 h-screen bg-[#3674B5] relative">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-[#5e84ac] text-white p-4">
          <h1 className="text-2xl font-bold">Add Transaction</h1>
        </header>
        <div className='p-5'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter transaction title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter description"
            />
          </div>
          <button
            type="submit"
            className="bg-[#178398] text-white px-4 py-2 mt-2 rounded-md shadow hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-light"
          >
            Add Transaction
          </button>
        </form>
        </div>
      </div>
    </main>
  );
};