// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Footer from "./Components/Shared/Footer"
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
