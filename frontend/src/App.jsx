// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';  // For the arrow icon

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

      {/* "Back to Top" button, visible when scrolled to the bottom */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 bg-black text-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
          style={{ animation: "bounce 1s infinite" }}
        >
          <FaArrowUp size={30} />
        </button>
      )}

      {/* Keyframes for bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
