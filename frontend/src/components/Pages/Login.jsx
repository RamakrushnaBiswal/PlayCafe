import React, { useState, useEffect } from 'react';
import photo from '../../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd'; // Ant Design message component
import Cookies from 'js-cookie';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
const Login = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [hidden, setHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Configuring the message to show at a certain top distance
  message.config({
    top: 80, // Distance from the top of the viewport
    duration: 2, // Auto close time in seconds
    maxCount: 3, // Max number of messages
  });

  // Function to handle changes in the form inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Function to handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }

      // Successful login message with a light green line below
      message.success({
        content: 'Login successful',
        className: 'success-message', // Add custom class for styling
        style: {
          fontSize: '22px',
          right: '50px', // Position it on the right side
          position: 'fixed', // Fix it to the viewport
          paddingTop: '10px', // Add padding to move the text down
          paddingBottom: '10px', // Padding for balance
        },
      });
      // Set token in cookies
      Cookies.set('authToken', result.token, { expire: '1h', secure: true });
      navigate('/'); // Navigate to homepage after successful login
    } catch (err) {
      // Show error message if login fails with a red line below
      message.error({
        content: 'Something went wrong while logging in.',
        className: 'error-message', // Add custom class for styling
        style: {
          fontSize: '18px',
          right: '50px', // Position it on the right side
          position: 'fixed', // Fix it to the viewport
          paddingTop: '10px', // Add padding to move the text down
          paddingBottom: '10px', // Padding for balance
        },
      });
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen h-screen dark:bg-black flex items-center justify-center lg:pt-10 px-4">
      {/* Background Image */}
      <img
        src={photo}
        alt="login"
        loading="lazy"
        className="absolute w-3/4 lg:w-auto lg:opacity-100 opacity-10 object-cover"
      />
      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="z-10 p-8 lg:p-16 bg-[#f1e9dc] dark:bg-amber-800 dark:text-white flex flex-col gap-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_black] w-full max-w-md lg:max-w-xl"
      >
        <div className="text-[#323232] dark:text-white font-black text-4xl lg:text-7xl mb-2">
          Welcome,
          <span className="block text-[#666] dark:text-gray-400 font-semibold text-lg lg:text-2xl mt-1">
            Log in to continue
          </span>
        </div>

        <input
          className="w-full h-12 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[15px] font-semibold text-[#323232] p-2.5 focus:outline-none focus:border-[#2d8cf0] placeholder-[#666]"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />

        <div className="relative w-full">
          <input
            className="w-full h-12 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[15px] font-semibold text-[#323232] p-2.5 focus:outline-none focus:border-[#2d8cf0] placeholder-[#666]"
            name="password"
            placeholder="Password"
            type={hidden ? 'password' : 'text'}
            onChange={handleChange}
          />
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4"
            onClick={(e) => {
              e.preventDefault();
              setHidden(!hidden);
            }}
          >
            {hidden ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <Link
          to="/email-verify"
          className="text-sm lg:text-base text-gray-500 dark:text-gray-200 hover:text-red-500 transition"
        >
          Forgot Password?
        </Link>

        <h3 className="flex justify-between items-center w-full text-sm lg:text-base">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-green-500 font-semibold hover:scale-110 transition"
          >
            Register Here
          </Link>
        </h3>

        <a
          href={`${API_URL}/api/user/auth/google`}
          className="w-full"
        >
          <button
            type="button"
            className="w-full h-12 rounded-md border-2 dark:text-white border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[17px] font-semibold text-[#323232] transition active:translate-x-[3px] active:translate-y-[3px]"
          >
            Sign in with Google
          </button>
        </a>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          type="submit"
          className="w-full h-12 rounded-md dark:text-white border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[17px] font-semibold text-[#323232] transition active:translate-x-[3px] active:translate-y-[3px]"
        >
          {isLoading ? 'Loading...' : 'Let’s Log you in →'}
        </button>
      </form>
    </div>
  );
};

export default Login;
