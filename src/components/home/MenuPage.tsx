import React from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';

const MenuPage: React.FC = () => {
  const menuItems = [
    { imageSrc: '/images/menu-2.png', name: 'Lettuce Leaf', price: '12.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-3.png', name: 'Mild Butter', price: '12.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-4.png', name: 'Fresh Bread', price: '12.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-5.png', name: 'Fresh Breakfast', price: '14.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-6.png', name: 'Glow Cheese', price: '12.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-7.png', name: 'Slice Beef', price: '12.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-8.png', name: 'Mushroom Pizza', price: '12.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
    { imageSrc: '/images/menu-9.png', name: 'Italian Pizza', price: '14.5$', description: 'Lacus nisi, et ac dapibus velit in consequat.' },
  ];

  return (
    <div className='bg-black'>
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <Image src="/images/menu-1.png" alt="Menu Image" width={300} height={400} className="rounded-lg shadow-lg w-full h-auto" />
      </div>
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {menuItems.map((item, index) => (
          <MenuItem key={index} imageSrc={item.imageSrc} name={item.name} price={item.price} description={item.description} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MenuPage;
