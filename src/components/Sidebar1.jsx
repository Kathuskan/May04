import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaPiggyBank, FaAward, FaChartPie, FaPlus, FaStackOverflow, FaHome } from 'react-icons/fa';

export const Sidebar1 = () => {
    const linkStyle = 'py-2 block text-white hover:bg-[#A9B5DF] rounded px-2 text-xl pt-1';
    const styleIcon = 'inline size-6 mb-1 pr-1';

    return (
        <div className="p-4 w-62 bg-[#2A4D6E] top-24 fixed flex flex-col h-screen z-50">
            <Link to="/home" className={linkStyle}> <FaHome className={styleIcon} />Home</Link>
            <Link to='/dashboard' className={linkStyle}><FaChartPie className={styleIcon}/>Dashboard</Link>
            <Link to="/addtransactions" className={linkStyle}> <FaPlus className={styleIcon} />Add Transactions</Link>
            <Link to="/viewtransactions" className={linkStyle}> <FaStackOverflow className={styleIcon}/> View Transactions</Link>
            <Link to="/savings" className={linkStyle}> <FaPiggyBank className={styleIcon}/>Savings</Link>
            <Link to="/gamification" className={linkStyle}><FaAward className={styleIcon}/> Badges</Link>
            <Link to="/profile" className={linkStyle}><FaUser className={styleIcon} />Profile</Link>
        </div>
    );
};