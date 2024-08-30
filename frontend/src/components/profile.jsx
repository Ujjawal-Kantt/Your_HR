import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
      const fetchUserData = async () => {
        try {
          const response = await fetch('https://your-hr-1.onrender.com/api/auth/user/details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setUser(data.user);
          console.log(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    } else {
      setIsAuthenticated(false);
      navigate("/");
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <p className="text-gray-600">Loading...</p>
        </div>
      </>
    );
  }

  const { name, email, address, city, country, state, pincode, resume } = user;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-500 p-6 text-white text-center">
            <h1 className="text-2xl font-bold">Welcome, {name}!</h1>
            <p className="text-lg mt-2">Here are your details</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Details */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>State:</strong> {state}</p>
                <p><strong>Pincode:</strong> {pincode}</p>
              </div>

              {/* Resume Display */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Resume</h2>
                {resume ? (
                  <a
                    href={`data:application/pdf;base64,${resume}`} // Use base64 data URL for resume PDF
                    download="resume.pdf" // Suggest a filename for download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View or Download your resume
                  </a>
                ) : (
                  <p>No resume uploaded</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
