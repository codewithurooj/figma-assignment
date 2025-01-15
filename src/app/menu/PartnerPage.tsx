import React from 'react';
import Image from 'next/image';
import SupportPage from '@/components/home/SupportPage';

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black">
      <main className="flex flex-col items-center w-full">
        <h2 className="text-xl text-gray-500 mt-8">Partners & Clients</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-black mt-2 text-center">We Work with the Best People</h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
          <div className="w-1/2 sm:w-1/3 md:w-1/12 lg:w-1/12 p-2 flex justify-center">
            <Image src="/images/Resturant.png" alt="Partner 1" width={160} height={160} className="w-full h-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/12 lg:w-1/12 p-2 flex justify-center">
            <Image src="/images/Fork.png" alt="Partner 2" width={160} height={160} className="w-full h-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/12 lg:w-1/12 p-2 flex justify-center">
            <Image src="/images/Bakery.png" alt="Partner 3" width={160} height={160} className="w-full h-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/12 lg:w-1/12 p-2 flex justify-center">
            <Image src="/images/Wolf-Coffee.png" alt="Partner 4" width={160} height={160} className="w-full h-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/12 lg:w-1/12 p-2 flex justify-center">
            <Image src="/images/Bistro.png" alt="Partner 5" width={160} height={160} className="w-full h-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/12 lg:w-1/12 p-2 flex justify-center">
            <Image src="/images/Ice.png" alt="Partner 6" width={160} height={160} className="w-full h-auto" />
          </div>
        </div>
        <div className='bg-black mt-20'>
        <SupportPage/></div>
      </main>
    </div>
  );
};

export default PartnersPage;
