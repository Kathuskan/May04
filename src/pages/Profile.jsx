import React from 'react';

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return (
            <main className='my-3 ml-64 mt-24 h-screen bg-[#FFF2F2] relative'>
                <div className="p-6 max-w-4xl mt-12 mx-auto bg-white shadow-md rounded-lg absolute w-615 left-60">
                    <h2 className="text-2xl font-bold text-red-600">User not found</h2>
                    <p className="text-gray-600">Please log in again.</p>
                </div>
            </main>
        );
    }

    return (
        <main className='my-3 ml-64 mt-24 h-screen bg-[#FFF2F2] relative'>
            <div className="p-6 max-w-4xl mt-12 mx-auto bg-white shadow-md rounded-lg absolute w-615 left-60">
                <div className="flex items-center gap-6 mb-8">
                    {/* Profile Picture Section */}
                    {user.profileImage && (
                        <img 
                            src={`http://localhost:3007/uploads/${user.profileImage}`}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#2D336B]"
                        />
                    )}
                    <div>
                        <h2 className="text-2xl font-bold text-[#2D336B]">
                            {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-[#2D336B]">Contact:</h3>
                        <p className="text-gray-700">{user.phone}</p>
                    </div>
                    
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-[#2D336B]">Member Since:</h3>
                        <p className="text-gray-700">
                            {new Date(user.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </div>

                {/* <button className="mt-6 bg-[#2D336B] hover:bg-[#7886C7] text-white px-4 py-2 rounded-md shadow transition-colors">
                    Edit Profile
                </button> */}
            </div>
        </main>
    );
};
