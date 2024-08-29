import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
    
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-blue-600">YourHr</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover your dream job with ease. Find the best opportunities that match your skills and interests.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Join a community of professionals and take your career to new heights. Sign up today and start exploring!
            </p>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-illustration-download-in-svg-png-gif-file-formats--finding-recruitment-business-activity-pack-professionals-illustrations-4185620.png?f=webp"
              alt="Job Search Illustration"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
