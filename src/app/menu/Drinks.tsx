import React from 'react';
import Image from 'next/image';

const MainMenu: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black">
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center w-full max-w-4xl p-8">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mt-10 md:mt-20">
            <div className="flex flex-col items-start mb-4">
              <Image src="/images/Coffee.png" alt="Coffee Icon" width={24} height={24} />
              <h2 className="text-[#333333] font-bold text-2xl md:text-4xl mt-2">Drinks
                </h2>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold">Caffe machiatto</h3>
              <span className="text-[#FF9F0D] font-bold">32$</span>
            </div>
            <p className="mb-2 text-sm text-[#4F4F4F]">Toasted French bread topped with romano</p>
            <p className="mb-2 text-[#4F4F4F]">560 CAL</p>
            <div className="border-t border-dotted border-gray-500 my-4"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold">Aperol Spritz Capacianno
            </h3>
              <span className="text-[#FF9F0D] font-bold">43$</span>
            </div>
            <p className="mb-2 text-sm text-[#4F4F4F]">Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className="mb-2 text-[#4F4F4F]">700 CAL</p>
            <div className="border-t border-dotted border-gray-500 my-4"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold">
              Caffee Latte Campuri</h3>
              <span className="text-[#FF9F0D] font-bold">14$</span>
            </div>
            <p className="mb-2 text-sm text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
            <p className="mb-2 text-[#4F4F4F]">1000 CAL</p>
            <div className="border-t border-dotted border-gray-500 my-4"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold">
              Tormentoso Bush Tea Pintoage</h3>
              <span className="text-[#FF9F0D] font-bold">35$</span>
            </div>
            <p className="mb-2 text-sm text-[#4F4F4F]">Spreadable cream cheese, crumbled blue cheese</p>
            <p className="mb-2 text-[#4F4F4F]">560 CAL</p>
            <div className="border-t border-dotted border-gray-500 my-4"></div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-20">
            <Image src="/images/drinks.png" alt="Menu Image" 
            width={400} height={400} className="w-full h-auto md:ml-8" />
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default MainMenu;
