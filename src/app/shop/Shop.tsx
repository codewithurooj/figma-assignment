import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333] flex justify-center">
      <main className="container mx-auto py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex space-x-4">
              <div>
                <label htmlFor="sort" className="mr-2">Sort By:</label>
                <select id="sort" className="border border-gray-300 p-2">
                  <option value="newest">Newest</option>
                  <option value="price">Price</option>
                </select>
              </div>
              <div>
                <label htmlFor="show" className="mr-2">Show:</label>
                <select id="show" className="border border-gray-300 p-2">
                  <option value="default">Default</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-2 text-center">
              <img src="/images/product-1.png" alt="Product 1" className="w-full
               h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Fresh Lime</h3>
              <p className="text-gray-500">$38.00 <span className="line-through">$45.00</span></p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-2.png" alt="Product 2" 
              className="w-full h-48 object-cover mb-2 "  />
              <h3 className="text-lg font-bold">Country Burger</h3>
              <p className="text-gray-500">$45.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-3.png" alt="Product 3" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Cheese Butter</h3>
              <p className="text-gray-500">$10.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-4.png" alt="Product 4" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-gray-500">$28.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-5.png" alt="Product 5" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Drink</h3>
              <p className="text-gray-500">$15.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-6.png" alt="Product 6" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Sandwiches</h3>
              <p className="text-gray-500">$20.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-7.png" alt="Product 7" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Burger</h3>
              <p className="text-gray-500">$25.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-8.png" alt="Product 8" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Pizza</h3>
              <p className="text-gray-500">$30.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-9.png" alt="Product 9" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Chicken Chup</h3>
              <p className="text-gray-500">$35.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-4.png" alt="Product 10" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Spicy Vegan Potato Curry</h3>
              <p className="text-gray-500">$40.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-5.png" alt="Product 11" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Grilled Chicken Salad</h3>
              <p className="text-gray-500">$22.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-6.png" alt="Product 12" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">Fruit Salad</h3>
              <p className="text-gray-500">$18.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-7.png" alt="Product 13" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">New Product 1</h3>
              <p className="text-gray-500">$50.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-8.png" alt="Product 14" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">New Product 2</h3>
              <p className="text-gray-500">$55.00</p>
            </div>
            <div className="p-2 text-center">
              <img src="/images/product-9.png" alt="Product 15" className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-bold">New Product 3</h3>
              <p className="text-gray-500">$60.00</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="border border-gray-300 text-yellow-500 px-2 py-1 mx-1">{"<<"}</button>
            <button className="border border-gray-300 text-yellow-500 px-2 py-1 mx-1 w-[40px] h-[40px]">1</button>
            <button className="border border-gray-300 bg-yellow-500 text-white px-2 py-1 mx-1 w-[40px] h-[40px]">2</button>
            <button className="border border-gray-300 text-yellow-500 px-2 py-1 mx-1 w-[40px] h-[40px]">3</button>
            <button className="border border-gray-300 text-yellow-500 px-2 py-1 mx-1">{">>"}</button>
          </div>
        </div>

        <div className="w-full md:w-1/2  lg:w-1/3 pl-6 pr-10 ">
          <div className="border p-2 mb-8 mt-4">
            <div className="relative">
              <input type="text" className="border-none p-2 w-full bg-pink-100" placeholder="Search Product..." />
              <div className="absolute right-0 top-0 mt-2 mr-2 bg-yellow-500 p-2 rounded">
                <CiSearch className="text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 mt-8 text-black
             md:text-sm lg:text-lg">Category</h2>
            <div className="flex flex-col space-y-2 text-black">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs '>Sandwiches</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Burger</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Chicken Chup</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Drink</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Pizza</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Thi</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Nonveg</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className='md:text-xs'>Uncategorized</span>
              </label>
            </div>
            <div className="mt-4">
              <img src="/images/Banner.png" alt="Extra Image" 
              className="w-full h-58 object-cover" />
            </div>
            <h2 className="text-lg font-bold mt-4">Filter by Price</h2>
            <div className="flex items-center mt-2">
              <div className="relative w-full h-2 bg-yellow-500">
                <div className="absolute left-0 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="absolute right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full mt-2 text-gray-500">
              <span>0$ to 800$</span>
              <span>Filter</span>
            </div>
            <h2 className="text-lg font-bold mt-4 text-black">Latest Product</h2>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex items-center">
                <img src="/images/pizza.png" alt="Product 1" className="w-16 h-16 object-cover" />
                <div className="ml-4">
                  <h3 className="text-sm text-gray-600">Pizza</h3>
                  <div className="flex">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                  </div>
                  <p className="text-gray-600 text-xs">$35.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/images/pizza.png" alt="Product 2" className="w-16 h-16 object-cover" />
                <div className="ml-4">
                  <h3 className="text-sm text-gray-600">Cupcake</h3>
                  <div className="flex">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                  </div>
                  <p className="text-gray-600 text-xs">$35.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/images/pizza.png" alt="Product 3" className="w-16 h-16 object-cover" />
                <div className="ml-4">
                  <h3 className="text-sm text-gray-600">Cookies</h3>
                  <div className="flex">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                  </div>
                  <p className="text-gray-600 text-xs">$35.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/images/pizza.png" alt="Product 4" 
                className="w-16 h-16 object-cover " />
                <div className="ml-4">
                  <h3 className="text-sm text-gray-600">Burger</h3>
                  <div className="flex">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                  </div>
                  <p className="text-gray-600 text-xs">$35.00</p>
                </div>
              </div>
            </div>
            <h2 className="text-lg font-bold mt-4 text-black">Product Tags</h2>
            <div className="flex flex-wrap mt-2">
              <div className="w-full flex justify-between">
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">Services</button>
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">OurMenu</button>
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">Pizza</button>
              </div>
              <div className="w-full flex justify-between">
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">Cupcake</button>
                <button className="bg-white text-yellow-500 border border-[#F2F2F2] px-2 py-1 m-1 underline">Burger</button>
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">Cook</button>
              </div>
              <div className="w-full flex justify-between">
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">Our Shop</button>
                <button className="bg-white text-gray-600 border border-[#F2F2F2] px-2 py-1 m-1">Tandori Chicken</button>
              </div>
            </div>
          </div>
        </div>

        
              </main>
            </div>
          );
        }
        
        export default Shop;
        

