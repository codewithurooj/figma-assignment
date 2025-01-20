// components/ChefsPage.tsx
import React from 'react';
import Chef from './Chef';
import Image from 'next/image';


const ChefsPage: React.FC = () => {
  const chefs = [
    { imageSrc: '/images/ChefCard-1.png', name: 'Chef 1', position: 'Head Chef' },
    { imageSrc: '/images/ChefCard-2.png', name: 'Chef 2', position: 'Sous Chef' },
    { imageSrc: '/images/ChefCard-3.png', name: 'Chef 3', position: 'Pastry Chef' },
    { imageSrc: '/images/ChefCard-4.png', name: 'Chef 4', position: 'Line Cook' },
  ];

  return (
    <div className='bg-black'>
    <div className="container mx-auto px-4 py-8 text-center ">
      <h1 className="text-4xl font-greatvibes text-[#FF9F0D] mb-4">Chefs</h1>
      <h2 className="text-3xl text-white mb-4">
        <span className="text-[#FF9F0D] ">Me</span>et Our Chef
      </h2>
      <div className="flex justify-center items-center mb-4">
        <Image src="/images/tree.png" alt="Tree" width={100} height={150} className="mr-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {chefs.map((chef, index) => (
            <Chef key={index} imageSrc={chef.imageSrc} name={chef.name} position={chef.position} />
          ))}
        </div>
      </div>
      <button className=" text-white px-6 py-2 rounded-full shadow-lg
       border border-[#FF9F0D]" >
      See More
    </button>
    
    </div>
    </div>
  );
};

export default ChefsPage;






