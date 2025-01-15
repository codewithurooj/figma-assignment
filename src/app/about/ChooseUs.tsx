import React from "react";

const ChooseUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333] flex justify-center items-center">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h1>
        <p className="text-sm md:text-base mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-sm md:text-base mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="/images/choose.png" alt="Why Choose Us" 
        className="w-full h-auto object-cover mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center mb-4 md:mb-0">
            <img src="/images/student.png" alt="Left Image" 
            className="w-[80px] h-[80px] object-cover mb-2 mx-auto" />
            <h2 className="text-2xl md:text-2xl font-bold">Best Chef</h2>
            <p className="text-sm md:text-xs mt-2">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
          </div>
          <div className="text-center mb-4 md:mb-0 mx-0 md:mx-4">
            <img src="/images/coffee (1).png" alt="Center Image" 
            className="w-[80px] h-[80px] object-cover mb-2 mx-auto" />
            <h2 className="text-2xl md:text-2xl font-bold">120 Item food</h2>
            <p className="text-sm md:text-xs mt-2">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Quispe</p>
          </div>
          <div className="text-center">
            <img src="/images/Person (1).png" alt="Right Image" 
            className="w-[80px] h-[80px] object-cover mb-2 mx-auto" />
            <h2 className="text-2xl md:text-2xl font-bold">Best Environment</h2>
            <p className="text-sm md:text-xs mt-2">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Quisque</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
