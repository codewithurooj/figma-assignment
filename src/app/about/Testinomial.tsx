import React from 'react';
import Image from 'next/image';
import { FaQuoteRight, FaStar, FaRegStar } from 'react-icons/fa';

const Testimonial: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center px-4 py-8">
      <div className="w-full text-left">
        <h1 className="font-greatvibes text-3xl mb-4 text-[#FF9F0D] mt-[200px] ml-0 md:ml-44">
          Testimonial
        </h1>
        <h2 className="text-2xl text-[#333333] mb-12 ml-0 md:ml-44 font-bold">
          What Our Clients are Saying
        </h2>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative" 
      style={{ height: '300px' }}>
        <div className="absolute inset-0 bg-cover bg-no-repeat" 
        style={{ backgroundImage: "url('/images/background-testimonial.png')", 
        backgroundPosition: 'right -50px', backgroundSize: 'contain' }}></div>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src="/images/testimonial-1.png" alt="Client Image" width={96} height={96} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex justify-center mt-16 relative z-10">
          <span className="text-[#FF9F0D] text-4xl"><FaQuoteRight /></span>
        </div>
        <p className="text-center text-xs text-[#333333] relative z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Urna, elit augue urna, vitae feugiat
          pretium donec id elementum. Ultrices mattis sed vitae mus risus.
        </p>
        <div className="flex justify-center mt-4 relative z-10">
          <FaStar className="text-[#FF9F0D] text-xl" />
          <FaStar className="text-[#FF9F0D] text-xl" />
          <FaStar className="text-[#FF9F0D] text-xl" />
          <FaRegStar className="text-[#FF9F0D] text-xl" />
        </div>
        <h3 className="text-center text-lg text-[#333333] mt-4 relative z-10 font-bold">
          Alamin Hasan
        </h3>
        <p className="text-center text-xs text-[#333333] relative z-10 ">
          Food Specialist
        </p>
        <div className="flex justify-center mt-4 relative z-10">
          <div className="w-2 h-2 bg-[#FF9F0D] rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
