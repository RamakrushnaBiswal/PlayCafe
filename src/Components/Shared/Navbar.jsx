import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo/logo.png"; // Import your logo
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll effect
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentPath = location.pathname;

  const isActiveLink = (path) => currentPath === path;

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-[#e3f1b9] shadow-lg" : "bg-gradient-to-r from-[#fdf0bc] to-[#f7e8a2] bg-opacity-80"
      } backdrop-blur-lg rounded-b-lg`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo with glowing effect */}
          <Link to="/">
            <div className="flex-shrink-0">
              <img
                className="w-14 h-14 bg-white rounded-full p-1 transition-transform duration-500 ease-in-out hover:scale-110 shadow-[0_0_15px_rgba(255,215,0,0.7)] hover:shadow-[0_0_25px_rgba(255,215,0,1)]"
                alt="logo"
                src={Logo}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex">
            <ul className="ml-4 flex space-x-8 font-semibold text-lg">
              {["/", "/event", "/menu", "/register", "/boardgame"].map(
                (path, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className={`px-5 py-2 rounded-full transition-all duration-500 ease-in-out ${
                        isScrolled
                          ? isActiveLink(path)
                            ? "bg-[#e3f1b9] text-black shadow-lg" // Active link when scrolled
                            : "bg-transparent text-gray-800 hover:bg-[#e3f1b9] hover:text-black hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105"
                          : isActiveLink(path)
                          ? "bg-[#f7e8a2] text-black shadow-xl" // Default active color when not scrolled
                          : "text-gray-700 hover:bg-[#f7e8a2] hover:text-black hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105"
                      }`}
                    >
                      {path === "/"
                        ? "Home"
                        : path.replace("/", "").charAt(0).toUpperCase() +
                          path.slice(2)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none transition-transform duration-500 ease-in-out hover:scale-125"
            >
              <svg
                className="h-8 w-8 text-black" // Ensures the SVG remains black
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-lg">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {["/", "/event", "/menu", "/register", "/boardgame"].map(
              (path, index) => (
                <Link
                  key={index}
                  to={path}
                  className={`block px-4 py-3 rounded-full text-lg font-medium transition-all duration-500 ease-in-out ${
                    isScrolled
                      ? isActiveLink(path)
                        ? "bg-[#e3f1b9] text-black shadow-lg" // Active link when scrolled
                        : "text-gray-800 hover:bg-[#e3f1b9] hover:text-black hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105" // Hover with shadow and scale
                      : isActiveLink(path)
                      ? "bg-[#f7e8a2] text-black shadow-xl" // Default active link
                      : "text-gray-700 hover:bg-[#f7e8a2] hover:text-black hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-105" // Default hover state with shadow and scale
                  }`}
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
