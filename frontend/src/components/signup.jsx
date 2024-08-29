import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    pincode: '',
    password: '',
    confirm_password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [resume, setResume] = useState(null); // To handle resume upload

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/signup', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          address: data.address,
          city: data.city,
          country: data.country,
          state: data.state,
          pincode: data.pincode,
          password: data.password,
          resume: resume
        })
    });
    console.log(data);
    alert('Form submitted');
  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleFileChange = (e) => {
    setResume(e.target.files[0]); // Store the selected file
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-md mx-auto relative shadow-xl shadow-blue-800">
        <div>
          <h2 className="font-bold text-xl text-center text-blue-800">
            Your-Hr
          </h2>
          <p className="text-gray-500 text-center mb-4">Registration Form</p>

          <form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-4 px-4 md:p-6 mb-4">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
                <p>Already have an account?  <Link
                    to="/login"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Login here
                  </Link></p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="name" // Updated to match the state key
                      id="full_name"
                      onChange={onChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.name}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                      value={data.email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={data.address}
                      onChange={onChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={data.city}
                      onChange={onChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        value={data.country}
                        onChange={onChange}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                      <button
                        tabIndex="-1"
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabIndex="-1"
                        htmlFor="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        value={data.state}
                        placeholder="State"
                        onChange={onChange}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                      <button
                        tabIndex="-1"
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabIndex="-1"
                        htmlFor="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      value={data.pincode}
                      onChange={onChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="********"
                        value={data.password}
                        onChange={onChange}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12l2 3 5-5L10 12l7-7 3 3-5 5 5 5-3 3-3-3-5 5-5-5L1 12z"></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12l2 3 5-5L10 12l7-7 3 3-5 5 5 5-3 3-3-3-5 5-5-5L1 12z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="********"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12l2 3 5-5L10 12l7-7 3 3-5 5 5 5-3 3-3-3-5 5-5-5L1 12z"></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12l2 3 5-5L10 12l7-7 3 3-5 5 5 5-3 3-3-3-5 5-5-5L1 12z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Resume Upload Field */}
                  <div className="md:col-span-5">
                    <label htmlFor="resume" className="text-sm font-medium">
                      Upload Your Resume (PDF)
                    </label>
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      accept=".pdf"
                      className="h-10 border mt-1 rounded-lg px-2 w-full bg-gray-50 text-sm"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="billing_same"
                        id="billing_same"
                        className="form-checkbox"
                      />
                      <label htmlFor="billing_same" className="ml-2">
                        I agree that the details provided are correct.
                      </label>
                    </div>
                  </div>


                  <div className="md:col-span-5 text-right">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveForm;
