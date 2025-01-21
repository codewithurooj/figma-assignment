import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-center items-center md:items-start">
        {/* Left Side Images */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/images/food-8.png"
            alt="Tall Image"
            className="w-[200px] h-[300px] object-cover ml-0 md:ml-10 mb-4 md:mb-0"
          />
          <div className="flex flex-col space-y-4 ml-0 md:ml-4">
            <img
              src="/images/food-10.png"
              alt="Small Image 1"
              className="w-[200px] h-[200px] object-cover"
            />
            <img
              src="/images/Product-1.png"
              alt="Small Image 2"
              className="w-[200px] h-[200px] object-cover"
            />
          </div>
        </div>
        {/* Right Side Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-8 mr-0 md:mr-8 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-[#FF9F0D] text-2xl md:text-3xl font-Miniver flex items-center justify-center md:justify-start">
            About Us <span className="w-8 h-0.5 bg-[#FF9F0D] ml-2 mt-2"></span>
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            Food is an important <br /> part of a balanced Diet
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded">
              Show More
            </button>
            <div className="flex items-center ml-0 md:ml-4 mt-4 md:mt-0">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <img src="/images/Play.png" alt="Icon" className="w-6 h-6" />
              </div>
              <span className="ml-2 text-gray-700">Watch Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
