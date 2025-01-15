import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <span className="text-[#FF9F0D] text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold">Food</span>
      <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold">truck</span>
    </div>
  );
};

export default Logo;
