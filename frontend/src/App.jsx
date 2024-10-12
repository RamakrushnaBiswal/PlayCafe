// src/App.js
import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from '../src/components/Shared/Navbar';
import Footer from '../src/components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import BackToTopButton from './components/Shared/BackToTopButton';
import Preloader from './components/Preloader';
import Offers from './components/Shared/Offers'
function App() {
  const [showModal, setShowModal] = useState(true); 
  return (
    <>
      <Preloader />
      <Offers isVisible={showModal} onClose={() => setShowModal(false)} />
      <BackToTopButton />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;