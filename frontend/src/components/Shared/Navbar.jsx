import { useState, useEffect } from "react";
import Logo from "../../assets/Logo/playcafe.png";
import { Link, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navbar = () => {
  const { login, logout, isAuthenticated } = useKindeAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
                  onClick={logout}
                  className={`${baseTextColorClass} ${hoverTextColorClass}`}
                  type="button"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={login}
                  className={`${baseTextColorClass} ${hoverTextColorClass}`}
                  type="button"
                >
                  Log In
                </button>
              )}
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
        <div className={`md:hidden ${isScrolled ? "bg-amber-100 shadow-lg" : "bg-[#E0F0B1] shadow-lg"}`}>
          <div className="px-4 pt-4 pb-4 space-y-2">
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
                onClick={logout}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 
                            ${mobileMenuBaseTextColorClass} hover:bg-amber-300 hover:text-black`}
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={login}
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
