import React, { useState, useEffect } from 'react';
import photo from '../../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate(); // Correctly initialize useNavigate
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      // Handle successful login (e.g., store token, redirect)
      Cookies.set('authToken', result.token, {
        expire: '1h',
        secure: true,
      });
      message.success('Login successful');
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center pt-10 dark:bg-black">
      <img src={photo} alt="login" loading="lazy" className=" w-3/4 absolute" />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="form z-10 p-16 bg-lightblue dark:bg-amber-900 flex flex-col items-start justify-center gap-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_black] bg-[#f1e9dc]"
      >
        <div className="title text-[#323232] dark:text-white font-black text-7xl mb-6 ">
          Welcome,
          <br />
          <span className="block text-[#666] dark:text-white font-semibold text-2xl ">
            Log in to continue
          </span>
        </div>

        <input
          className="input w-full h-10 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[15px] font-semibold text-[#323232] p-2.5 focus:outline-none focus:border-[#2d8cf0] placeholder-[#666] placeholder-opacity-80"
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => handleChange(e)}
        />
        <div className="relative w-full">
          <input
            className="input w-full h-10 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[15px] font-semibold text-[#323232] p-2.5 focus:outline-none focus:border-[#2d8cf0] placeholder-[#666] placeholder-opacity-80"
            name="password"
            placeholder="Password"
            type={hidden ? 'password' : 'text'}
            onChange={(e) => handleChange(e)}
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4"
            onClick={(e) => {
              e.preventDefault();
              setHidden(!hidden);
            }}
          >
            {hidden ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="transform hover:text-red-500 dark:hover:text-yellow-300 transition">
          <Link to={'/email-verify'}>Forgot Password?</Link>
        </div>

        <h3 className="flex items-center justify-between w-full">
          Dont have an account?
          <span className="block text-[#666] dark:text-white font-semibold text-xl transform hover:scale-110 hover:-translate-y-1 hover:text-green-500 dark:hover:text-green-200 transition">
            <Link to={'/signup'}>Register Here</Link>
          </span>
        </h3>
        <a
          href={`${API_URL}/api/user/auth/google`}
          className="text-[#666] dark:text-white font-semibold text-xl transform hover:scale-110 hover:-translate-y-1 hover:text-green-500 transition w-full"
        >
          <button
            type="button"
            className="button-confirm dark:text-white px-4 w-full h-10 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[17px] font-semibold text-[#323232] cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
          >
            Sign in with Google
          </button>
        </a>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="submit"
          className="button-confirm dark:text-white px-4 w-30 h-10 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] text-[17px] font-semibold text-[#323232] cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
        >
          {isLoading ? 'Loading...' : 'Let’s Log you in →'}
        </button>
      </form>
    </div>
  );
};

export default Login;
