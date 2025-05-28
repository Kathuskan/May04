import React from 'react';
import context1 from './Context1.jpg';
import { Link } from 'react-router-dom';
import context2 from './add.jpg';
import context3 from './dashboard.jpg';
import context4 from './11.jpg';

export const Content = () => {
  return (
    <main className="ml-64 my-3 mt-28 relative mr-2">
      {/* Intro Block */}
      <div className="flex bg-blue-200 rounded-md shadow-lg p-10 mb-10 relative">
        <div className="w-1/2 pr-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Pocket Manager</h2>
          <p className="text-gray-700 text-lg">
            Pocket Manager is your personal finance assistant designed for university students.
            Track your income and expenses, calculate your savings, and build smart money habits
            with our simple and effective dashboard.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src={context1}
            alt="Dashboard preview"
            className="rounded-md w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <Link to='/signup'>
        <div className="text-center text-white text-xl p-6 bg-[#3674B5] m-5 rounded-md hover:bg-blue-700 transition">
          Start your journey toward smarter money management today!
        </div>
      </Link>

      {/* Feature 1: Add Transactions */}
      <div className="flex bg-blue-200 rounded-md shadow-lg p-10 mb-10 relative">
        <div className="w-1/2">
          <img
            src={context4}
            alt="Add transaction"
            className="rounded-md w-full h-80 object-cover"
          />
        </div>
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Add Transactions Easily</h3>
          <p className="text-gray-700">
            Log your income or expenses with a simple form. Categorize each transaction to
            monitor your financial behavior more effectively.
          </p>
        </div>
      </div>

      {/* Feature 2: Dashboard Insights */}
      <div className="flex bg-blue-200 rounded-md shadow-lg p-10 mb-10 relative flex-row-reverse">
        <div className="w-1/2">
          <img
            src={context3}
            alt="Dashboard overview"
            className="rounded-md w-full h-80 object-cover"
          />
        </div>
        <div className="w-1/2 pr-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">View Dashboard Insights</h3>
          <p className="text-gray-700">
            Your dashboard summarizes your total income, expenses, and current savings.
            Stay updated with real-time financial overviews.
          </p>
        </div>
      </div>

      {/* Feature 3: Generate Reports */}
      <div className="flex bg-blue-200 rounded-md shadow-lg p-10 mb-10 relative">
        <div className="w-1/2">
          <img
            src={context2}
            alt="Generate report"
            className="rounded-md w-full h-80 object-cover"
          />
        </div>
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Generate Reports</h3>
          <p className="text-gray-700">
            Download your financial history as a CSV file. Use it to analyze your habits
            or share with your financial advisor.
          </p>
        </div>
      </div>
    </main>
  );
};
