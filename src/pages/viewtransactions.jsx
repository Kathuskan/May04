import React from 'react';

export const Viewtransactions = () => {
    const transactions = [
        { id: 1, title: 'Groceries', amount: 50, category: 'Expense' },
        { id: 2, title: 'Salary', amount: 500, category: 'Income' },
    ];

    const handleDelete = (id) => {
        alert(`Transaction ${id} deleted!`);
    };

    const handleUpdate = (id) => {
        alert(`Transaction ${id} updated!`);
    };

    const generateReport = () => {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            ['Title,Amount,Category']
                .concat(
                    transactions.map((t) => `${t.title},${t.amount},${t.category}`)
                )
                .join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'transactions_report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className='my-3 ml-64 mt-28 h-screen  relative'>
            <div className="min-h-screen bg-gray-10">
                <header className="bg-[#5e84ac] text-white p-4 ">
                    <h1 className="text-2xl font-bold">View Transactions</h1>
                </header>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="">
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-t">
                                <td className="px-4 py-2">{transaction.title}</td>
                                <td className="px-4 py-2">${transaction.amount}</td>
                                <td className="px-4 py-2">{transaction.category}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleUpdate(transaction.id)}
                                        className="bg-[#A1E3F9] text-white px-3 py-1 rounded-md mr-2 hover:bg-[#D1F8EF]"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(transaction.id)}
                                        className="bg-[#A1E3F9] text-white px-3 py-1 rounded-md mr-2 hover:bg-[#D1F8EF]"
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
                    className="bg-[#3674B5] hover:text-[#3674B5] hover:bg-white text-white mt-4 px-4 py-2 rounded-md shadow"
                >
                    Generate Report
                </button>
            </div>
        </main>
    );
};