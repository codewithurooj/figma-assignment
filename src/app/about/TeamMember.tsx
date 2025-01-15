import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaPinterest } from 'react-icons/fa';
import { FaTwitter, FaYoutube } from 'react-icons/fa6';

const TeamMember: React.FC = () => {
  return (
    <div className="bg-white py-8 hidden md:hidden">
      <div
        className="relative bg-cover bg-center h-[300px] w-full mt-6"
        style={{ backgroundImage: "url('/images/about-background.png')" }}
      >
        <div className="absolute inset-0 bg-[#FF9F0D] opacity-85"></div>
        <div
          className="absolute inset-0 bg-cover w-[81px] h-[159px] bg-center opacity-80 ml-[450px] mt-6"
          style={{ backgroundImage: "url('/images/plant-background.png')" }}
        ></div>
        <div className="relative flex flex-col justify-center items-center h-[300px]">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mt-[300px]">Team Member</h1>
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-xs mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="flex justify-between w-full max-w-4xl mt-4">
            <div className="text-center relative">
              <img
                src="/images/Member-1.png"
                alt="Member 1"
                className="w-[200px] h-[200px] top-[-50%] mb-[100px]"
              />
              <div className="bg-white p-4 absolute bottom-0 left-0 right-0 mb-6 border-gray-300">
                <h2 className="text-xl font-bold text-[#333333]">Mark Henry</h2>
                <p className="text-sm text-[#333333]">Owner</p>
              </div>
            </div>
            <div className="text-center relative hidden md:block lg:hidden">
              <img
                src="/images/Member-2.png"
                alt="Member 2"
                className="w-[200px] h-[200px] top-[-50%] mb-[100px]"
              />
              <div className="absolute top-0 right-0 flex flex-col justify-start items-end space-y-2 mt-2 mr-2">
                <div className="w-[30px] h-[30px] bg-white flex justify-center items-center">
                  <FaFacebookF style={{ color: '#1E1E1E' }} />
                </div>
                <div className="w-[30px] h-[30px] bg-white flex justify-center items-center">
                  <FaTwitter style={{ color: '#1E1E1E' }} />
                </div>
                <div className="w-[30px] h-[30px] bg-yellow-500 flex justify-center items-center">
                  <FaYoutube style={{ color: '#FFFFFF' }} />
                </div>
                <div className="w-[30px] h-[30px] bg-white flex justify-center items-center">
                  <FaPinterest style={{ color: '#1E1E1E' }} />
                </div>
              </div>
              <div className="bg-white p-4 absolute bottom-0 left-0 right-0 mb-6 border-gray-300">
                <h2 className="text-xl font-bold text-[#333333]">Lucky Helen</h2>
                <p className="text-sm text-[#333333]">Chef</p>
              </div>
            </div>
            <div className="text-center relative">
              <img
                src="/images/Member-1.png"
                alt="Member 3"
                className="w-[200px] h-[200px] top-[-50%] mb-[100px]"
              />
              <div className="bg-white p-4 absolute bottom-0 left-0 right-0 mb-6 border-gray-300">
                <h2 className="text-xl font-bold text-[#333333]">Mon Henry</h2>
                <p className="text-sm text-[#333333]">Founder</p>
              </div>
            </div>
            <div className="text-center relative">
              <img
                src="/images/Member-1.png"
                alt="Member 4"
                className="w-[200px] h-[200px] top-[-50%] mb-[100px]"
              />
              <div className="bg-white p-4 absolute bottom-0 left-0 right-0 mb-6 border-gray-300">
                <h2 className="text-xl font-bold text-[#333333]">Tom Monrow</h2>
                <p className="text-sm text-[#333333]">Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
