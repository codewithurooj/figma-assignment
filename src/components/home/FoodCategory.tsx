import React from "react";
import Image from "next/image";

const FoodCategory: React.FC = () => {
  return (
    <div className="bg-black">
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-greatvibes text-[#FF9F0D] mb-4">
        Food Category
      </h1>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
       lg:grid-cols-4 gap-4">
        <Image
          src="/images/food-4.png"
          alt="Food Image 1"
          width={150}
          height={150}
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <Image
          src="/images/food-5.png"
          alt="Food Image 2"
          width={150}
          height={150}
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <Image
          src="/images/food-6.png"
          alt="Food Image 3"
          width={150}
          height={200}
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <Image
          src="/images/food-7.png"
          alt="Food Image 4"
          width={150}
          height={200}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
    </div>
  );
};

export default FoodCategory;
