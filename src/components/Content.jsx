import React from 'react';
import context1 from './Context1.jpg';
import { Link } from 'react-router-dom';


export const Content = () => {
  return (
    <main className="ml-64 my-3 mt-28 relative mr-2">
      {/* First content block */}
      <div className="grid grid-flow-col grid-rows-4 gap-4 rounded-md p-10 pr-9 pb-20 relative shadow-lg bg-blue-200 max-h-96">
        <div className='row-3 mt-7'>
          <p className="max-w-xl text-xl text-gray-800">
            Pocket Manager is a user-friendly web application designed exclusively for university students to take control of their finances. With features like a manual transaction tracker, a savings calculator for setting and achieving financial goals, and timely notifications for bill payments or low balances, Pocket Manager helps students develop healthy money habits. The platform's simple interface and goal-oriented tools empower students to track their income and expenses effectively, fostering financial independence and discipline.
          </p>
        </div>
        <div className='row-3'>
          <img
            className="absolute right-10 top-4 mt-3 pb-7 rounded-md"
            src={context1}
            alt="context image"
            style={{ width: '550px', height: '350px' }}
          />
        </div>
      </div>

      {/* Call-to-action section */}
      <Link to='/signup' className="hover: ">
        <div className="text-center text-white text-xl p-10 bg-[#3674B5] m-5 rounded-md">
          Start your journey toward smarter money management today!
        </div>
      </Link>

      {/* first function block */}
      <div className='grid grid-flow-col grid-rows-4 gap-4 rounded-md p-10 pr-9 pb-23 relative shadow-lg bg-blue-200 max-h-96'>
        <div>
          <img
            className="absolute left-10 top-4 mt-3 pb-7 rounded-md"
            src={context1}
            alt="context image"
            style={{ width: '550px', height: '350px' }}
          />
        </div>
        <div>
          <p className='text-xl absolute right-30'>Add Transactions Easily</p>
          <br />
          <br />
          <p className='absolute right-30 text-right'>Manually log your income and expenses with a simple form. <br />Categorize your transactions and track them effortlessly.</p>
        </div>
      </div>

      {/* second function block */}
      <div className="grid grid-flow-col grid-rows-4 gap-4 rounded-md p-10 pr-9 pb-20 mt-3 relative shadow-lg bg-blue-200 max-h-96">
        <div className='mt-20'>
          <p className='text-xl absolute left-30'>Add Transactions Easily</p>
          <br />
          <br />
          <p className='absolute left-30 text-left'>Manually log your income and expenses with a simple form. <br />Categorize your transactions and track them effortlessly.</p>
        </div>
        <div className='row-3'>
          <img
            className="absolute right-10 top-4 mt-3 pb-7 rounded-md"
            src={context1}
            alt="context image"
            style={{ width: '550px', height: '350px' }}
          />
        </div>
      </div>

      {/* third function block */}
      <div className='grid grid-flow-col grid-rows-4 gap-4 mt-3 rounded-md p-10 pr-9 pb-23 relative shadow-lg bg-blue-200 max-h-96'>
        <div>
          <img
            className="absolute left-10 top-4 mt-3 pb-7 rounded-md"
            src={context1}
            alt="context image"
            style={{ width: '550px', height: '350px' }}
          />
        </div>
        <div>
          <p className='text-xl absolute right-30'>Add Transactions Easily</p>
          <br />
          <br />
          <p className='absolute right-30 text-right'>Manually log your income and expenses with a simple form. <br />Categorize your transactions and track them effortlessly.</p>
        </div>
      </div>


    </main>
  );
};
