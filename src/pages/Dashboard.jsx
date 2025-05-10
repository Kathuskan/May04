import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`http://localhost:3007/api/transactions/${userId}`);
        const data = res.data;
        setTransactions(data);

        let totalIncome = 0;
        let totalExpenses = 0;

        data.forEach((txn) => {
          const amt = parseFloat(txn.amount);
          if (txn.category === "income") {
            totalIncome += amt;
          } else {
            totalExpenses += amt;
          }
        });

        setIncome(totalIncome);
        setExpenses(totalExpenses);
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    if (userId) fetchTransactions();
  }, [userId]);

  const savings = income - expenses;

  return (
    <main className="my-3 ml-64 mt-28 min-h-screen bg-[#3674B5]">
      <div className="min-h-full bg-gray-100">
        <header className="bg-[#5e84ac] text-white p-4">
          <h1 className="text-2xl font-bold">Pocket Manager Dashboard</h1>
        </header>

        <div className="flex flex-col md:flex-row">
          <main className="flex-1 p-6">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">Income</h2>
                <p className="text-2xl font-bold text-primary1">{income.toLocaleString()}</p>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">Expenses</h2>
                <p className="text-2xl font-bold text-red-500">{expenses.toLocaleString()}</p>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">Savings</h2>
                <p className="text-2xl font-bold text-green-500">{savings.toLocaleString()}</p>
              </div>
            </section>

            <section className="bg-white p-4 shadow-md rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
              <ul>
                {transactions.slice(-5).reverse().map((txn) => (
                  <li key={txn.id} className="flex justify-between py-2 border-b">
                    <span>{txn.title}</span>
                    <span className={txn.category === "income" ? "text-green-500" : "text-red-500"}>
                      {txn.category === "income" ? "+" : "-"}{txn.amount}
                    </span>
                  </li>
                ))}
                {transactions.length === 0 && (
                  <li className="text-gray-500 py-2">No transactions found.</li>
                )}
              </ul>
            </section>

            <section className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link to='/addtransactions' className="bg-[#3674B5] text-white py-2 rounded shadow hover:bg-secondary2 text-center">
                  Add Transaction
                </Link>
                <Link to='/viewtransactions' className="bg-[#9abfe7] text-white py-2 rounded shadow hover:bg-secondary2 text-center">
                  Generate Report
                </Link>
                <Link to='/profile' className="bg-gray-700 text-white py-2 rounded shadow hover:bg-gray-800 text-center">
                  Profile
                </Link>
                <Link to='/' className="bg-red-500 text-white py-2 rounded shadow hover:bg-red-600 text-center">
                  Logout
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
};
