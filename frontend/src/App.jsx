// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import { Outlet } from 'react-router-dom';

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
    </div>
  );
}

export default App;
