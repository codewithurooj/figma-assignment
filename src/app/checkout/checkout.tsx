"use client";
import React, { useState } from "react";
import Order from "./Order";

const Checkout: React.FC = () => {
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start justify-start py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 lg:w-2/2">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 pr-4">
            <h2 className="mt-6 text-left text-2xl font-extrabold text-[#333333]">
              Shipping Address
            </h2>
            <form className="mt-8 space-y-6">
              <div className="rounded-md space-y-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="relative">
                    <select
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="appearance-none rounded-none relative
                       block w-full px-2 py-2 border border-gray-300
                        text-gray-900 rounded-md text-xs"
                    >
                      <option value="" disabled hidden>
                        Choose City
                      </option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <span className="text-gray-500 text-lg">^</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                    Address 1
                  </label>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/3 pl-4 mt-14">
            <form className="mt-8 space-y-6">
              <div className="rounded-md space-y-4">
                <div>
                  <label htmlFor="first-name-2" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="first-name-2"
                    name="first-name-2"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email-2" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="email-2"
                    name="email-2"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="city-2" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="city-2"
                      name="city-2"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="appearance-none rounded-none relative block
                       w-full px-2 py-2 border border-gray-300
                        text-gray-900 rounded-md text-xs"
                    >
                      <option value="" disabled hidden>
                        Choose Country
                      </option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <span className="text-gray-500 text-lg">^</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="company-2" className="block text-sm font-medium text-gray-700">
                    Zip code
                  </label>
                  <input
                    id="company-2"
                    name="company-2"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="company-2" className="block text-sm font-medium text-gray-700">
                    Address 2
                  </label>
                  <input
                    id="company-2"
                    name="company-2"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-2 py-2 border border-gray-300 text-gray-900 rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-left text-1xl font-extrabold text-gray-900">
            Billing Address
          </h2>
          <div className="flex items-center mt-4">
            <input
              id="same-as-shipping"
              name="same-as-shipping"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="same-as-shipping" className="ml-2 block text-sm text-gray-900">
              Same as shipping address
            </label>
          </div>
          <div className="mt-4 flex flex-wrap space-x-4">
            <button
              className="flex items-center justify-center mt-4
              w-full md:w-1/4 px-2 py-2 border border-gray-300
               text-sm font-normal text-[#333333] "
            >
              <span className="mr-2">&lt;</span> Back to Cart
            </button>
            <button
              type="button"
              className="flex items-center justify-center mt-4
               w-full md:w-1/4 px-2 py-2 border border-gray-300
                text-sm font-normal text-white bg-[#FF9F0D] "
            >
              Procceed to shipping <span className="ml-2">&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
};

export default Checkout;
