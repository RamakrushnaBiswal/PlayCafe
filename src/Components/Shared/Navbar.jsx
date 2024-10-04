import { useState, useEffect } from "react";
import Logo from "../../assets/Logo/logo.png";
import lightLogo from '../../assets/Logo/moon.webp';
import darkLogo from '../../assets/Logo/sunny.webp';
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/themeContext"; 
const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === "/";
  const buttonTextClass = isScrolled
    ? "text-gray-900"
    : isHomePage
      ? "text-white"
      : "text-black";

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition duration-300 
        ${isScrolled ? (isDarkMode ? "bg-[#4b4a4a]" : "bg-[#E0F0B1]") : "bg-transparent"} 
        ${isScrolled ? "text-[#0e0d0d]" : (isDarkMode ? "text-white" : "text-black") } 
        ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <img
                className="w-14 h-14 bg-white rounded-full p-1"
                alt="logo"
                src={Logo}
              />
            </div>
          </Link>
          <div className="hidden md:flex">
            <ul className="ml-4 flex space-x-4 font-semibold">
              <li>
                <Link
                  to={"/"}
                  className={`hover:${isScrolled ? "text-[#e19a9a]" : (isDarkMode ? "text-white" : "text-black")}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/events"}
                  className={`hover:${isScrolled ? "text-gray-900" : (isDarkMode ? "text-white" : "text-black")}`}
                >
                  Events 
                </Link>
              </li>
              <li>
                <Link
                  to={"/menu"}
                  className={`hover:${isScrolled ? "text-gray-900" : (isDarkMode ? "text-white" : "text-black")}`}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to={"/reservation"}
                  className={`hover:${isScrolled ? "text-gray-900" : (isDarkMode ? "text-white" : "text-black")}`}
                >
                  Reservation
                </Link>
              </li>
              <li>
                <Link
                  to="/boardgame"
                  className={`hover:${isScrolled ? "text-gray-900" : (isDarkMode ? "text-white" : "text-black")}`}
                >
                  Boardgames
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="focus:outline-none">
              <img
                src={isDarkMode ? darkLogo : lightLogo}
                alt="Toggle-theme"
                className="w-8 h-8 transition-all duration-300"
              />
            </button>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className={`focus:outline-none ${isScrolled ? 'text-gray-800' : (isDarkMode ? 'text-white' : 'text-black')}`}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? (isDarkMode ? "bg-gray-800" : "bg-[#FDF3C7]") : (isDarkMode ? "bg-[#070707]" : "bg-[#E0F0B1]")}`}>
          <div className="px-4 pt-4 pb-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${isScrolled ? (isDarkMode ? "text-white" : "text-gray-900") : (isDarkMode ? "text-white" : "text-black") } hover:bg-amber-300`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${isScrolled ? (isDarkMode ? "text-white" : "text-gray-900") : (isDarkMode ? "text-white" : "text-black") } hover:bg-amber-300`}
            >
              Events
            </Link>
            <Link
              to="/menu"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${isScrolled ? (isDarkMode ? "text-white" : "text-gray-900") : (isDarkMode ? "text-white" : "text-black") } hover:bg-amber-300`}
            >
              Menu
            </Link>
            <Link
              to="/reservation"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${isScrolled ? (isDarkMode ? "text-white" : "text-gray-900") : (isDarkMode ? "text-white" : "text-black") } hover:bg-amber-300`}
            >
              Reservation
            </Link>
            <Link
              to="/boardgame"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${isScrolled ? (isDarkMode ? "text-white" : "text-gray-900") : (isDarkMode ? "text-white" : "text-black") } hover:bg-amber-300`}
            >
              Boardgames
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
