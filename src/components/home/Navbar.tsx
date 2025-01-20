"use client";
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import SearchBar from './SearchBar';
import { PiHandbag } from 'react-icons/pi';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <div className='bg-black'>
    <nav className="bg-transparent p-4 ">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <li className="relative">
              <Link href="/" className="text-white flex items-center">
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-white flex items-center">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white flex items-center">
                Blog
              </Link>
            </li>
            <li className="relative">
              <button onClick={togglePagesDropdown} className="text-white flex items-center focus:outline-none">
                Pages <BsChevronDown className="ml-1" />
              </button>
              {isPagesDropdownOpen && (
                <ul className="absolute left-0 mt-2 space-y-2 p-2 bg-white text-black shadow-lg">
                  <li>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="block px-4 py-2 hover:bg-gray-200">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="block px-4 py-2 hover:bg-gray-200">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/404" className="block px-4 py-2 hover:bg-gray-200">
                      404 Error
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" className="block px-4 py-2 hover:bg-gray-200">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="/checkout" className="block px-4 py-2 hover:bg-gray-200">
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="block px-4 py-2 hover:bg-gray-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="block px-4 py-2 hover:bg-gray-200">
                      Shop
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" className="text-white flex items-center">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-white flex items-center">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white flex items-center">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex items-center space-x-2 mt-4 sm:mt-0">
          <SearchBar />
          <PiHandbag className="text-white" />
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
