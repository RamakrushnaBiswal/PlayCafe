import React from 'react';
import './App.css';

import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import { ThemeProvider } from './context/themeContext.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
