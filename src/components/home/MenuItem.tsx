// components/MenuItem.tsx
import React from 'react';
import Image from 'next/image';

interface MenuItemProps {
  imageSrc: string;
  name: string;
  price: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, name, price, description }) => {
  return (
    
    <div className="flex mb-4 ">
      <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-lg shadow-lg mr-4" />
      <div>
        <h3 className="text-xl font-bold text-white-800">{name}</h3>

        <p className=" text-sm font-normal">{description}</p>
        <p className="text-yellow-500 text-lg">{price}</p>
      </div>
    </div>
    
  );
};

export default MenuItem;
