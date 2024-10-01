import { useState, useEffect } from "react";
import Logo from "../../assets/Logo/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      className={`w-full fixed top-0 z-50 transition duration-300 ${
        isScrolled ? "bg-[#E0F0B1]" : "bg-transparent"
      } 
                   ${isScrolled ? "text-gray-800" : "text-black"} 
                   ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="mx-auto px-16">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <img
                className="w-14 h-14 bg-white rounded-full p-1 "
                alt="logo"
                src={Logo}
              />
            </div>
          </Link>
          <div className="hidden md:flex">
            <ul className="ml-4 flex space-x-4 font-semibold">
              <li>
                <a
                  href="/"
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/event"
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Reservation
                </a>
              </li>
              <li>
                <a
                  href="/boardgame"
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Boardgames
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`${buttonTextClass} focus:outline-none`}
            >
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
        <div
          className={`md:hidden ${
            isScrolled ? "bg-amber-100 shadow-lg" : "bg-[#E0F0B1] shadow-lg"
          }`}
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            <a
              href="/"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${
                isScrolled ? "text-gray-900" : "text-gray-800"
              } hover:bg-amber-300 hover:text-black`}
            >
              Home
            </a>
            <a
              href="/event"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${
                isScrolled ? "text-gray-900" : "text-gray-800"
              } hover:bg-amber-300 hover:text-black`}
            >
              Events
            </a>
            <a
              href="/menu"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${
                isScrolled ? "text-gray-900" : "text-gray-800"
              } hover:bg-amber-300 hover:text-black`}
            >
              Menu
            </a>
            <a
              href="/register"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${
                isScrolled ? "text-gray-900" : "text-gray-800"
              } hover:bg-amber-300 hover:text-black`}
            >
              Reservation
            </a>
            <a
              href="/boardgame"
              className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 ${
                isScrolled ? "text-gray-900" : "text-gray-800"
              } hover:bg-amber-300 hover:text-black`}
            >
              Boardgames
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
