import React from 'react';
import Image from 'next/image';

const ProfessionalChefs: React.FC = () => {
  return (
    
    <div className="relative bg-cover bg-center sm:h-[200px] md:h-[300px] lg:h-[250px]"
     style={{ backgroundImage: "url('/images/background.png')" }}>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 justify-center">
          <div className="flex flex-col items-center">
            <Image src="/images/chef-1.png" alt="Chef 1" width={80} height={80} className="rounded-lg shadow-lg sm:w-24 sm:h-24 md:w-32 md:h-32" />
            <p className="text-white mt-2 text-center font-bold text-sm sm:text-base md:text-lg">Professional Chefs <br/> 
            420</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/chef-2.png" alt="Chef 2" width={80} height={80} className="rounded-lg shadow-lg sm:w-24 sm:h-24 md:w-32 md:h-32" />
            <p className="text-white mt-2 text-center font-bold text-sm sm:text-base md:text-lg">Items of Food <br/>
            320</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/chef-3.png" alt="Chef 3" width={80} height={80} className="rounded-lg shadow-lg sm:w-24 sm:h-24 md:w-32 md:h-32" />
            <p className="text-white mt-2 text-center font-bold text-sm sm:text-base md:text-lg">Years of Experience 
              <br/> 30+</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/chef-4.png" alt="Chef 4" width={80} height={80} className="rounded-lg shadow-lg sm:w-24 sm:h-24 md:w-32 md:h-32" />
            <p className="text-white mt-2 text-center font-bold text-sm sm:text-base md:text-lg">Happy Customers <br/>
             220</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProfessionalChefs;
