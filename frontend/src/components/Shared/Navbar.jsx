import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { message } from "antd";

const Navbar = () => {
  const { login, logout, isAuthenticated } = useKindeAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const wasAuthenticated = useRef(null);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Menu", path: "/menu" },
    { name: "Reservation", path: "/reservation" },
    { name: "Boardgames", path: "/boardgame" },
  ];

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

  useEffect(() => {
    if (wasAuthenticated.current === null) {
      wasAuthenticated.current = isAuthenticated;
      return;
    }
    if (wasAuthenticated.current && !isAuthenticated) {
      message.success("Logout successful!");
    }
    if (!wasAuthenticated.current && isAuthenticated) {
      message.success("Login successful!");
    }
    wasAuthenticated.current = isAuthenticated;
  }, [isAuthenticated]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === "/";

  let buttonTextClass;
  if (isScrolled) {
    buttonTextClass = "text-gray-900";
  } else if (isHomePage) {
    buttonTextClass = "text-white";
  } else {
    buttonTextClass = "text-black";
  }


  const hoverTextColorClass = isScrolled ? "hover:text-gray-900" : "hover:text-gray-800";
  const baseTextColorClass = isScrolled ? "text-gray-800" : "text-gray-900";
  const mobileMenuBaseTextColorClass = isScrolled ? "text-gray-900" : "text-gray-800";

  // Handle login
  const handleLogin = async () => {
    try {
      await login();

    } catch (error) {
      message.error("Login failed. Please try again.");
    }
  };


  const handleLogout = async () => {
    try {
      await logout();

    } catch (error) {
      message.error("Logout failed. Please try again.");
    }
  };

  return (
    <nav

      className={`w-full fixed top-0 z-50 transition duration-300 ${isScrolled ? "bg-[#E0F0B1]" : "bg-transparent"}
                  ${isScrolled ? "text-gray-800" : "text-black"} ${isScrolled ? "shadow-lg" : ""}`}

    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <img className="w-14 h-14 bg-white rounded-full p-0" alt="logo" src={Logo} />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">


            <ul className="ml-4 flex space-x-7 Poppins font-bold text-lg ">
              <li className="transform hover:scale-110 hover:-translate-y-1 transition hover:text-orange-500  duration-300">
                <Link
                  to={"/"}
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="transform hover:scale-110 hover:-translate-y-1 transition hover:text-orange-500  duration-300">
                <Link
                  to={"/events"}
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Events
                </Link>
              </li>
              <li className="transform hover:scale-110 hover:-translate-y-1 transition hover:text-orange-500  duration-300">
                <Link
                  to={"/menu"}
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}

            <ul className="ml-4 flex space-x-4 font-semibold">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`${baseTextColorClass} ${hoverTextColorClass}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className={`${baseTextColorClass} ${hoverTextColorClass}`}
                  type="button"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className={`${baseTextColorClass} ${hoverTextColorClass}`}
                  type="button"

                >
                  Menu
                </Link>
              </li>
              <li className="transform hover:scale-110 hover:-translate-y-1 transition hover:text-orange-500  duration-300">
                <Link
                  to={"/reservation"}
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Reservation
                </Link>
              </li>
              <li className="transform hover:scale-110 hover:-translate-y-1 transition hover:text-orange-500  duration-300">
                <Link
                  to="/boardgame"
                  className={`hover:${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Boardgames
                </Link>
              </li>

            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className={`${buttonTextClass} focus:outline-none`}>
              {isMenuOpen ?
                <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                : <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
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


            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 
                            ${mobileMenuBaseTextColorClass} hover:bg-amber-300 hover:text-black`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 
                            ${mobileMenuBaseTextColorClass} hover:bg-amber-300 hover:text-black`}
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 
                              ${mobileMenuBaseTextColorClass} hover:bg-amber-300 hover:text-black`}
              >
                Log In
              </button>
            )}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
