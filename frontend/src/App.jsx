// src/App.js
import './App.css';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  // Show the "Back to Top" button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setShowButton(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 p-4 bg-black text-white rounded-full flex justify-center items-center shadow-lg cursor-pointer animate-bounce"
        >
          {/* SVG Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"  // Adjust size as needed
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
