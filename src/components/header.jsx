import React from 'react';
import logo from '/Users/kathuskanthavarajah/Developer/capstone/PocketManager/src/assets/PM logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='p-5 flex fixed w-full top-0 left-0 bg-[#2A4D6E] pb-10 z-50 ml-0 mt-0 shadow-lg shadow-emerald-50'>
      <Link to='/home' className='flex items-center'>
        <h1 className='text-white text-4xl font-bold'>
          Pocket Manager
        </h1>
      </Link>

      <Link to='/home'>
        <em className='block absolute text-white left-14 top-14'>
          your smart financial companion
        </em>
      </Link>

      <img
        className='absolute top-1 left-72'
        src={logo}
        alt="logo"
        style={{ width: "100px", height: '100px' }}
      />

      <nav className='flex right-24 top-8 items-center'>
        <Link to='/signup'>
          <h3 className='text-white text-2xl hover:cursor-pointer absolute right-32 top-8 hover:text-[#7886C7] rounded-md'>
            Register
          </h3>
        </Link>
        <Link to='/login'>
          <h3 className='text-white text-2xl hover:cursor-pointer absolute right-16 top-8 hover:text-[#7886C7] rounded-md'>
            Login
          </h3>
        </Link>
      </nav>
    </header>
  );
};