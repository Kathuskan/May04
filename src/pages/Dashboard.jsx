import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main className="my-3 ml-64 mt-28 h-screen bg-[#3674B5] relative">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-[#5e84ac] text-white p-4">
          <h1 className="text-2xl font-bold">Pocket Manager Dashboard</h1>
        </header>

        <div className="flex flex-col md:flex-row">
          <main className="flex-1 p-6">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">Income</h2>
                <p className="text-2xl font-bold text-primary1">50,000</p>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">Expenses</h2>
                <p className="text-2xl font-bold text-red-500">20,000</p>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700">Savings</h2>
                <p className="text-2xl font-bold text-green-500">30,000</p>
              </div>
            </section>

            <section className="bg-white p-4 shadow-md rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
              <ul>
                <li className="flex justify-between py-2 border-b">
                  <span>Grocery</span>
                  <span className="text-red-500">-3,000</span>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <span>Freelance Income</span>
                  <span className="text-green-500">+10,000</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Transport</span>
                  <span className="text-red-500">-500</span>
                </li>
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
                <Link to='' className="bg-red-500 text-white py-2 rounded shadow hover:bg-red-600 text-center">
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
