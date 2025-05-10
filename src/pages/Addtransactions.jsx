import React, { useState } from 'react';
import axios from 'axios';

export const Addtransactions = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !description) {
      alert('Please fill in all fields.');
      return;
    }
    
    if (!userId) {
      alert('User ID not found. Please log in again.');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:3007/api/transactions', {
        title,
        amount: parseFloat(amount),
        category,
        description,
        userId,
      });

      console.log('Response:', response.data);
      alert('Transaction added successfully!');

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
    <main className="my-3 ml-64 mt-28 min-h-screen bg-[#3674B5]">
      <div className="min-h-full bg-gray-100">
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
                className="w-full p-2 border border-gray-300 rounded-md"
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
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter amount"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
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
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter description"
              />
            </div>
            <button
              type="submit"
              className="bg-[#178398] text-white px-4 py-2 mt-2 rounded-md hover:bg-[#116e80]"
            >
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
