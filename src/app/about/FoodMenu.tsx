import React from 'react';
import Menu from './Menu';


const FoodMenu: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-white bg-no-repeat"
      style={{ backgroundImage: "url('/images/plant-background.png')", backgroundSize: '10%' }}>
      <h1 className="text-4xl font-bold text-[#333333]">Our Food Menu</h1>
      <p className="text-[#4F4F4F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className="text-[#4F4F4F] text-sm">Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.</p>
      <nav className="flex mt-8 space-x-4">
        <a href="#" className="text-[#FF9F0D] relative">
          Breakfast
          <span className="absolute left-0 right-0 bottom-[-16px] h-1 bg-[#FF9F0D]">

          </span>
        </a>
        <a href="#" className="text-[#4F4F4F]">Lunch</a>
        <a href="#" className="text-[#4F4F4F]">Dinner</a>
        <a href="#" className="text-[#4F4F4F]">Dessert</a>
        <a href="#" className="text-[#4F4F4F]">Drink</a>
        <a href="#" className="text-[#4F4F4F]">Snack</a>
        
      </nav>
      <div className="w-full h-px bg-[#E0E0E0] mt-4 relative">
        <Menu />
        </div>
       
    </div>
  );
};

export default FoodMenu;
