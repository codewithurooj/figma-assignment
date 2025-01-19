import React from 'react';
import Image from 'next/image';

interface ChefProps {
  imageSrc: string;
  name: string;
  position: string;
}

const Chef: React.FC<ChefProps> = ({ imageSrc, name, position }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <Image src={imageSrc} alt={name} width={300} height={350} className="rounded-lg shadow-lg" />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};

export default Chef;
