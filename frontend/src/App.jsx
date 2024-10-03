// src/App.js
import React from 'react';
import './App.css';
import Navbar from '../src/components/Shared/Navbar';
import Footer from "../src/components/Shared/Footer"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
