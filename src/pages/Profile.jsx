import React from 'react';

export const Profile = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        joined: '2025-01-01',
    };

    return (
        <main className='my-3 ml-64 mt-24 h-screen bg-[#FFF2F2] relative'>
            <div className="p-6 max-w-4xl mt-12 mx-auto bg-white shadow-md rounded-lg absolute w-615 left-60">
                <h2 className="text-2xl font-bold text-[#2D336B] mb-4">Profile</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#2D336B]">Name:</h3>
                    <p className="text-gray-700">{user.name}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#2D336B]">Email:</h3>
                    <p className="text-gray-700">{user.email}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#2D336B]">Joined:</h3>
                    <p className="text-gray-700">{user.joined}</p>
                </div>
                <button className="bg-[#2D336B] hover:text-[#2D336B] hover:bg-white text-white px-4 py-2 rounded-md shadow">
                    Edit Profile
                </button>
            </div>
        </main>
    );
};