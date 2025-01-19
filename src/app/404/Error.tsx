import React from 'react';
import Link from 'next/link';

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:mt-8 md:mt-40 lg:mt-0">
      <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF9F0D]">404</h1>
      <h2 className="sm:text-xl md:text-1xl lg:text-1xl font-semibold text-black mt-4 text-center">
        Ooops! Looks like something went wrong
      </h2>
      <p className="text-sm md:text-sm lg:text-sm text-black mt-2 text-center">
        Page cannot be found! We&apos;ll have it figured out in no time.<br />
        Meanwhile, check out these fresh ideas:
      </p>
      <Link href="/" legacyBehavior>
        <a className="mt-6 px-4 py-2 md:px-6 md:py-3 md:mb-4 bg-[#FF9F0D] text-white font-semibold rounded lg:mb-0">
          Go to Home
        </a>
      </Link>
    </div>
  );
};

export default Error404;
