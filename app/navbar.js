import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0">
             <h1 className="text-black font-bold text-3xl">FOOD</h1>
            </div>

            {/* Menu items */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Menu</a>
                <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonial</a>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex gap-4 text-2xl"><FaShoppingBag/>
          <MdAccountCircle/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
