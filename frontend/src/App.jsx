// src/App.js

import './App.css';
import Navbar from '../src/components/Shared/Navbar';
import Footer from "../src/components/Shared/Footer";
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

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
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URI}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_REDIRECT_URI}
    >
      <Navbar />
      <Outlet />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#E0F0B1] hover:bg-amber-300 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"        >
          ↑ 
        </button>
      )}
    </KindeProvider>
  );
}

export default App;
