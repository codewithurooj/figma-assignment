import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className='bg-black'>
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-greatvibes text-[#FF9F0D] mb-4">About Us</h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody Products
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="list-none text-white mb-8">
          <li className="flex items-center mb-2">
            <span className="text-white mr-2">✔</span> Dummy line 1
          </li>
          <li className="flex items-center mb-2">
            <span className="text-white mr-2">✔</span> Dummy line 2
          </li>
          <li className="flex items-center mb-2">
            <span className="text-white mr-2">✔</span> Dummy line 3
          </li>
        </ul>
        <button className="bg-[#FF9F0D] text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
          Read More
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="grid grid-cols-1 gap-4">
          <Image src="/images/food-1.png" alt="Food Image 1" width={500} height={500} className="rounded-lg shadow-lg w-full h-auto" />
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/food-2.png" alt="Food Image 2" width={300} height={300} className="rounded-lg shadow-lg w-full h-auto" />
            <Image src="/images/food-3.png" alt="Food Image 3" width={300} height={300} className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
