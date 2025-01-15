
import React from 'react';
import Footer from './Footer';

const SupportPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              <span className='text-[#FF9F0D]'>St</span>ill You Need Our Support?
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mt-2">Don't wait, make a smart and logical quote here. It's pretty easy.</p>
          </div>
          <div className="flex flex-col items-center md:items-end ">
            <div className="flex items-center w-full sm:w-auto ">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 py-1 w-full sm:w-[200px] h-[40px] bg-[#FF9F0D]
                 text-white placeholder-white 
                 focus:outline-none rounded-l-md  "
              />
              <button className="bg-white text-[#FF9F0D] px-2 py-2
               rounded-r-md w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t-2 border-orange-500"></div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
