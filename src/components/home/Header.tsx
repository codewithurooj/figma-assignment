import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 mt-4">
      <a href="#" className="text-[#FF9F0D] text-sm sm:text-base md:text-lg lg:text-xl">Breakfast</a>
      <a href="#" className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Lunch</a>
      <a href="#" className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Dinner</a>
      <a href="#" className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Dessert</a>
      <a href="#" className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Drink</a>
      <a href="#" className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Snack</a>
      <a href="#" className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Soups</a>
    </nav>
  );
};

export default Header;
