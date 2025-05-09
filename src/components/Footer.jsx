import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear(); // Corrected the Date constructor

  return (
    <>
      <footer id="contact" className=" text-center bg-[#3674B5] text-white p-4">
        <p className='ml-36'>Contact Us: <a href="mailto:Kathus2003@gmail.com" className="underline">Kathus2003@gmail.com</a></p>
        <p className='ml-36'>&copy; 2025 Pocket Manager. All Rights Reserved.</p>
      </footer>
    </>
  );
};