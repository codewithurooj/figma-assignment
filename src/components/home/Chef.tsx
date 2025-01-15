// components/Chef.tsx
import React from 'react';
import Image from 'next/image';

interface ChefProps {
  imageSrc: string;
  name: string;
  position: string;
}

const Chef: React.FC<ChefProps> = ({ imageSrc, name, position }) => {
  return (
    <div className="flex flex-col items-center mb-4 ">
      <Image src={imageSrc} alt={name} width={300} height={350} className="rounded-lg shadow-lg" />
      
    </div>
  );
};

export default Chef;



  










