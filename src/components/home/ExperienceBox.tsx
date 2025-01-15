import React from "react";

const ExperienceBox: React.FC = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="bg-white w-full sm:w-[250px] h-[80px] flex items-center rounded-lg shadow-lg relative mt-8">
        <div className="bg-[#FF9F0D] w-[10px] h-full absolute left-0 top-0 rounded-l-lg"></div>
        <div className="flex items-center ml-4">
          <span className="text-[#FF9F0D] text-2xl sm:text-4xl font-bold">30+</span>
          <div className="ml-4">
            <div className="text-black text-base sm:text-xl">Years of</div>
            <div className="text-black text-base sm:text-xl font-bold">Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;
