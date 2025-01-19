import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <div className='bg-black'>
    <section className="py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        <div className="hidden md:flex flex-col items-center md:items-start md:w-1/6">
          <div className="border-l-2 border-white h-24 mb-2"></div>
          <div className="flex flex-col items-center space-y-2">
            <FaFacebook className="text-white" aria-label="Facebook" />
            <FaTwitter className="text-yellow-400" aria-label="Twitter" />
            <FaPinterest className="text-white" aria-label="Pinterest" />
          </div>
          <div className="border-l-2 border-white h-24 mt-2"></div>
        </div>
        <div className="md:w-1/2 text-left mt-4 md:mt-0 flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-greatvibes text-[#FF9F0D] mb-1">It&apos;s Quick & Amazing!</h1>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-1">
            <span className="text-[#FF9F0D]">Th</span>e Art of speed 
            <br />food Quality
          </h3>
          <p className="text-white text-base sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
          <button className="bg-[#FF9F0D] text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300 shadow-lg mt-4">
            See Menu
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image src="/images/Image.png" alt="Delicious Food" width={900} height={900} className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
