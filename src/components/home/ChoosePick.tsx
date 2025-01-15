import React from 'react';
import Navbar from './Header';

const ChooseAndPickPage: React.FC = () => {
  return (
    <div className='bg-black'>
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-3xl font-greatvibes text-[#FF9F0D] mb-4">Choose & Pick</h1>
      <h2 className="text-3xl sm:text-3xl lg:text-3xl text-white font-bold mb-4">
        <span className="text-[#FF9F0D]">Fr</span>om Our Menu
      </h2>
      <Navbar />
    </div>
    </div>
  );
};

export default ChooseAndPickPage;
