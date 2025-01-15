import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.</p>
          <div className="flex items-center justify-center mt-4">
            <div className="bg-[#FF9F0D] p-4 flex items-center">
              <Image src="/images/Clock.png" alt="Icon" width={24} height={24} />
            </div>
            <div className="ml-4 text-sm">
              <p className="font-normal">Opening Hours</p>
              <p>Mon - Sat (8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-4 text-left ml-0 md:ml-14">
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">News</a></li>
            <li><a href="#" className="text-white">Partners</a></li>
            <li><a href="#" className="text-white">Team</a></li>
            <li><a href="#" className="text-white">Menu</a></li>
            <li><a href="#" className="text-white">Contacts</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Help?</h3>
          <ul className="space-y-4 text-left ml-0 md:ml-14">
            <li><a href="#" className="text-white">FAQ</a></li>
            <li><a href="#" className="text-white">Terms & Conditions</a></li>
            <li><a href="#" className="text-white">Reporting</a></li>
            <li><a href="#" className="text-white">Documentation</a></li>
            <li><a href="#" className="text-white">Support Policy</a></li>
            <li><a href="#" className="text-white">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Recent Post</h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center mt-4">
              <Image src="/images/post-1.png" alt="Recent Post 1" width={50} height={50} />
              <div className="ml-4">
                <p className="text-sm">20 Feb - 2022</p>
                <p className="text-sm">Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Image src="/images/post-2.png" alt="Recent Post 2" width={50} height={50} />
              <div className="ml-4">
                <p className="text-sm">20 Feb - 2022</p>
                <p className="text-sm">Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Image src="/images/post-3.png" alt="Recent Post 3" width={50} height={50} />
              <div className="ml-4">
                <p className="text-sm">20 Feb - 2022</p>
                <p className="text-sm">Keep Your Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-700 py-4 px-8 flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-gray-400 mb-4 md:mb-0">Copyright &copy; 2022 by Ayeman. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <div className="bg-white p-2 rounded h-[30px]">
            <FaFacebookF style={{ color: '#1E1E1E' }} />
          </div>
          <div className="bg-white p-2 rounded h-[30px]">
            <FaTwitter style={{ color: '#1E1E1E' }} />
          </div>
          <div className="bg-white p-2 rounded h-[30px]">
            <CiInstagram style={{ color: '#1E1E1E' }} />
          </div>
          <div className="bg-white p-2 rounded h-[30px]">
            <FaYoutube style={{ color: '#FF9F0D' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
