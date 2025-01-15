import React from "react";
import { CiLock } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg shadow-pink-200 p-8
       rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-black mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 p-2 rounded">
            <LuUserRound className="text-[#333333] mr-2 w-6 h-6" />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none text-[#333333]"
            />
          </div>
          <div className="flex items-center border border-gray-300 p-2 rounded">
            <MdOutlineEmail className="text-[#333333] mr-2 w-6 h-6" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-[#333333]"
            />
          </div>
          <div className="flex items-center border border-gray-300 p-2 rounded">
            <MdLockOutline className="text-[#333333] mr-2 w-6 h-6" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-[#333333]"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-[#FF9F0D] border-gray-300 rounded"
            />
            <label className="ml-2 text-[#333333]">Remember me?</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FF9F0D] text-white font-semibold rounded-md flex items-center justify-center"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-right">
          <a href="#" className="text-[#333333]">
            Forget password?
          </a>
        </div>
        <div className="relative my-6">
          <hr className="border-gray-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-2 text-[#333333]">OR</span>
          </div>
        </div>
        <button
          type="button"
          className="w-full py-2 px-4 border border-gray-300 text-[#333333] font-semibold rounded-md flex items-center justify-center"
        >
          <img src="/images/Google (2).png" alt="Google" className="w-5 h-5 mr-2" />
          Sign Up with Google
        </button>
        <button
          type="button"
          className="w-full py-2 px-4 border border-gray-300 text-[#333333] font-semibold rounded-md flex items-center justify-center mt-4"
        >
          <img src="/images/Apple.png" alt="Apple" className="w-5 h-5 mr-3" />
          Sign Up with Apple
        </button>
      </div>
    </div>
  );
};

export default SignUp;
