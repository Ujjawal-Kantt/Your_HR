import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            YourHr
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/soon" className="hover:text-blue-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/soon" className="hover:text-blue-400 transition-colors duration-300">
            About
          </Link>
          <Link to="/soon" className="hover:text-blue-400 transition-colors duration-300">
            Services
          </Link>
          <Link to="/soon" className="hover:text-blue-400 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-2xl focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
