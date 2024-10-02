import React, { useState } from "react";
import Logo from "../../assets/Logo/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentPath = location.pathname;

  const isActiveLink = (path) => currentPath === path;

  return (
    <nav className="bg-blur fixed w-full top-0 z-50"> {/* Applied glassmorphism */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <img className="w-14 h-14 bg-white rounded-full p-1" alt="logo" src={Logo} />
            </div>
          </Link>
          <div className="hidden md:flex">
            <ul className="ml-4 flex space-x-4 font-semibold">
              {["/", "/event", "/menu", "/register", "/boardgame"].map((path, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className={`nav-link ${isActiveLink(path) ? "active-link" : ""}`}
                  >
                    {/* Add icons here if desired */}
                    {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
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
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {["/", "/event", "/menu", "/register", "/boardgame"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`block mobile-link ${isActiveLink(path) ? "active-link" : ""}`}
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
