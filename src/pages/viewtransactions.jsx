import React, { useEffect, useState } from "react";
import axios from "axios";

export const Viewtransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  // Fetch user transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`http://localhost:3007/api/transactions/${userId}`);
        setTransactions(res.data);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    };

    if (userId) fetchTransactions();
  }, [userId]);

  // Delete a transaction
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3007/api/transactions/${id}`);
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
      alert("Failed to delete transaction.");
    }
  };

  // Placeholder update logic
  const handleUpdate = (id) => {
    alert(`Transaction ${id} would be updated. Implement update logic or modal.`);
  };

  // Generate CSV report
  const generateReport = () => {
    const csvContent = 'data:text/csv;charset=utf-8,'
      + ['Title,Amount,Category']
        .concat(transactions.map(t => `${t.title},${t.amount},${t.category}`))
        .join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'transactions_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="my-3 ml-64 mt-28 min-h-screen bg-[#3674B5]">
      <div className="min-h-full bg-gray-100">
        <header className="bg-[#5e84ac] text-white p-4">
          <h1 className="text-2xl font-bold">Your Transactions</h1>
        </header>

        <section className="p-6">
          {transactions.length === 0 ? (
            <div className="bg-white p-6 rounded shadow text-gray-500 text-center">
              No transactions available.
            </div>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Title</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Amount</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Category</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr key={t.id} className="border-b">
                      <td className="px-6 py-4">{t.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {t.category === "income" ? "+" : "-"}{parseFloat(t.amount).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 capitalize">{t.category}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleUpdate(t.id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={generateReport}
                className="mt-6 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
              >
                Generate Report
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};
