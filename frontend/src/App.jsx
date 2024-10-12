// src/App.js
import './App.css';
import Navbar from '../src/components/Shared/Navbar';
import Footer from '../src/components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import BackToTopButton from './components/Shared/BackToTopButton';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      {/* <Preloader /> */}
      <BackToTopButton />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
