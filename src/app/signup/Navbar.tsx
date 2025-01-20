"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignUp from './SignUp';
import SupportPage from '@/components/home/SupportPage';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white">
      <header className="w-full flex justify-between items-center py-4 px-8 bg-black">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-white">Food</span>
            <span className="text-yellow-500">tuck</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <span className="text-yellow-500">Home</span>
          <span className="text-white">Menu</span>
          <span className="text-white">Blog</span>
          <span className="text-white">Pages</span>
          <span className="text-white">About</span>
          <span className="text-white">Shop</span>
        </nav>
        <div className="hidden md:flex space-x-4">
          <CiSearch className='text-white' />
          <LuUserRound className='text-white' />
          <HiOutlineShoppingBag className='text-white' />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 bg-black w-full py-4">
          <span className="text-yellow-500">Home</span>
          <span className="text-white">Menu</span>
          <span className="text-white">Blog</span>
          <span className="text-white">Pages</span>
          <span className="text-white">About</span>
          <span className="text-white">Shop</span>
        </nav>
      )}
      <main className="flex flex-col items-center w-full bg-white">
        <div className="relative w-full h-64">
          <Image src="/images/menu-hero.png" alt="Shop Image" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Sign up Page</h2>
            <div className="flex space-x-2 mt-2">
              <span className="text-white">Home</span>
              <span className="text-white">&gt;</span>
              <span className="text-yellow-500">Sign Up</span>
            </div>
          </div>
        </div>
        <div className='mt-12'>
        <SignUp/>
        </div>
        <div className='mt-12'>
            <SupportPage/>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
