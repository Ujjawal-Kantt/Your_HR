import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <FaRocket className="text-6xl text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-600 mb-6">We're working hard to get this feature ready for you. Stay tuned!</p>
        <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
