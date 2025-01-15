import React from "react";
import Image from "next/image";
import ExperienceBox from "./ExperienceBox";

const ChooseUs: React.FC = () => {
  return (
    <div className='bg-black'>
    <div className="container mx-auto px-4 py-8 flex flex-col items-center ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <div className="flex mb-4 flex-wrap justify-center md:justify-start">
            <Image
              src="/images/food-8.png"
              alt="Image 8"
              width={150}
              height={200}
              className="rounded-lg shadow-lg mr-4 mb-4 md:mb-0"
            />
            <Image
              src="/images/food-9.png"
              alt="Image 9"
              width={150}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src="/images/food-10.png"
              alt="Image 10"
              width={150}
              height={200}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <Image
              src="/images/food-11.png"
              alt="Image 11"
              width={100}
              height={100}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="flex flex-col gap-4">
              <Image
                src="/images/food-12.png"
                alt="Image 12"
                width={100}
                height={100}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <Image
                src="/images/food-13.png"
                alt="Image 13"
                width={100}
                height={100}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-greatvibes text-[#FF9F0D] mb-4">
            Why Choose Us
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
            <span className="text-[#FF9F0D]">Ex</span>tra Ordinary Taste
            <br />
            And Experienced
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            <div className="flex flex-col items-center">
              <div className="bg-[#FF9F0D] p-6 rounded-lg shadow-lg">
                <Image
                  src="/images/icon-1.png"
                  alt="Icon 1"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </div>
              <p className="text-white mt-2 text-center">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FF9F0D] p-6 rounded-lg shadow-lg">
                <Image
                  src="/images/icon-2.png"
                  alt="Icon 2"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </div>
              <p className="text-white mt-2 text-center">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FF9F0D] p-6 rounded-lg shadow-lg">
                <Image
                  src="/images/icon-3.png"
                  alt="Icon 3"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </div>
              <p className="text-white mt-2 text-center">Dinner</p>
            </div>
          </div>
          <ExperienceBox />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChooseUs;
