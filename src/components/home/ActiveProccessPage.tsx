import React from 'react';
import Image from 'next/image';

const ActiveProcessPage: React.FC = () => {
  return (
    <div className="relative w-full h-[350px] hidden sm:block">
      <Image 
        src="/images/active-process.png" 
        alt="Active Process"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-end p-8 bg-black bg-opacity-50">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-greatvibes text-[#FF9F0D] mr-4 sm:mr-40">
          Restaurant Active Process
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
          <span className="text-yellow-500">We</span> Document Every Food <br className="hidden sm:block" />Bean Process until it is saved
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-white mt-4 mr-4 sm:mr-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br className="hidden sm:block" /> Quos, quia necessitatibus.
        </p>
        <div className="flex items-center mt-4">
          <button className="text-white px-4 sm:px-6 py-2 rounded-full shadow-lg border border-[#FF9F0D]">
            Read More
          </button>
          <div className="relative ml-4">
            <Image 
              src="/images/circle-icon.png" 
              alt="Outer Image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <Image 
                src="/images/Play.png" 
                alt="Inner Image"
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
          </div>
          <span className="text-white ml-2 sm:ml-4">Play Video</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveProcessPage;
