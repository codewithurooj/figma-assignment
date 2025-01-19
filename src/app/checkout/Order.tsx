import React, { useState } from "react";


const Checkout: React.FC = () => {
  const [city, setCity] = useState("");

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center 
            justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-[300px] border border-gray-300 p-4 ">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4">
              {/* Ensure the images are located in the /public/images/ directory */}
              <img src={`/images/Tikka.png`} alt="Chicken Tikka Kabab"
               className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="text-1xl font-semibold text-[#333333]">Chicken Tikka Kabab</h3>
                <p className="text-sm text-gray-600">150 gm net</p>
                <p className="text-sm  text-gray-600">505</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Sub-total</span>
            <span>130$</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Discount</span>
            <span>25%</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>54.76$</span>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="flex justify-between font-semibold text-1xl text-[#333333]">
          <span>Total</span>
          <span>432.65$</span>
        </div>
        <div className="mt-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF9F0D] focus:border-[#FF9F0D] sm:text-sm"
          />
        </div>
        <button className="mt-6 w-full py-2 px-4 bg-[#FF9F0D]
         text-white font-semibold rounded-md flex items-center justify-center">
          Place an Order <span className="ml-2">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
