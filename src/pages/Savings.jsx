import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Savings = () => {
    const [savings, setSavings] = useState([]);
    const [goal, setGoal] = useState('');
    const [target, setTarget] = useState('');
    const [saved, setSaved] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch savings from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/savings')
            .then(res => {
                setSavings(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching savings');
                setLoading(false);
                console.error('Error fetching savings:', err);
            });
    }, []);

    // Handle adding a savings goal
    const handleAddGoal = () => {
        if (!goal || !target || !saved) {
            setError('All fields are required!');
            return;
        }
        if (isNaN(target) || isNaN(saved)) {
            setError('Target and Saved Amount must be numbers!');
            return;
        }

        setError('');
        axios.post('http://localhost:5000/savings', { goal_name: goal, target_amount: target, saved_amount: saved })
            .then(() => {
                setSavings([...savings, { goal_name: goal, target_amount: target, saved_amount: saved }]);
                setGoal('');
                setTarget('');
                setSaved('');
            })
            .catch(err => {
                setError('Error adding goal');
                console.error('Error adding goal:', err);
            });
    };

    // Handle deleting a goal
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/savings/${id}`)
            .then(() => setSavings(savings.filter(item => item.id !== id)))
            .catch(err => console.error('Error deleting goal:', err));
    };

    if (loading) return <div className="text-center py-6">Loading...</div>;

    return (
        <main className='my-3 ml-64 mt-28 h-screen bg-[#3674B5] relative'>
            <div className='min-h-screen bg-gray-100'>
                <header className="bg-[#5e84ac] text-white p-4">
                    <h1 className="text-2xl font-bold">Savings</h1>
                </header>

                {/* Add Savings Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                    <h3 className="text-lg font-bold mb-4 text-[#2D336B]">Add Savings Goal</h3>
                    <input
                        type="text"
                        placeholder="Goal Name"
                        className="border p-3 mb-4 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A9B5DF]"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Target Amount"
                        className="border p-3 mb-4 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A9B5DF]"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Saved Amount"
                        className="border p-3 mb-4 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A9B5DF]"
                        value={saved}
                        onChange={(e) => setSaved(e.target.value)}
                    />
                    <button
                        onClick={handleAddGoal}
                        className="bg-[#A9B5DF] text-white px-6 py-2 rounded-md hover:bg-[#7897D1] transition duration-300"
                    >
                        Add Goal
                    </button>
                </div>

                {/* Savings Table */}
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-[#2D336B] text-white">
                                <th className="px-6 py-3 text-left">Goal Name</th>
                                <th className="px-6 py-3 text-left">Target Amount</th>
                                <th className="px-6 py-3 text-left">Saved Amount</th>
                                <th className="px-6 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {savings.map((goal, index) => (
                                <tr key={index} className="border-b hover:bg-[#F1F1F1] transition duration-200">
                                    <td className="px-6 py-4">{goal.goal_name}</td>
                                    <td className="px-6 py-4">{goal.target_amount}</td>
                                    <td className="px-6 py-4">{goal.saved_amount}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(goal.id)}
                                            className="bg-[#F36F6F] text-white px-4 py-2 rounded-md hover:bg-[#D75858] transition duration-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};