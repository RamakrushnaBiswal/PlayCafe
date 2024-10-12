import { useState, useEffect } from 'react';
import Logo from '../../assets/Logo/playcafe.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const Navbar = () => {
  const [isloggedIn, setisloggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token,setToken] = useState(Cookies.get('authToken'));
  const location = useLocation();
  const navigate = useNavigate(); // Correctly initialize useNavigate

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/events' },
    { name: 'MENU', path: '/menu' },
    { name: 'RESERVATION', path: '/reservation' },
    { name: 'BOARDGAMES', path: '/boardgame' },
  ];
  useEffect(() => {
    setToken(Cookies.get('authToken'));
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // setisloggedIn(false); // Set isLoggedIn to false on confirmation
    //managing log in , logout using jwt tokens 
    Cookies.remove("authToken");
    setToken(null);
    setIsModalOpen(false); // Close the modal
    setIsMenuOpen(false) // after getting logged out close the menu if it is open
    navigate("/login");//navigate to login after get logged out
  };

  const isHomePage = location.pathname === '/';
  let buttonTextClass;
  if (isScrolled) {
    buttonTextClass = 'text-gray-900';
  } else if (isHomePage) {
    buttonTextClass = 'text-white';
  } else {
    buttonTextClass = 'text-black';
  }

  const hoverTextColorClass = isScrolled
    ? 'hover:text-gray-900'
    : 'hover:text-gray-800';
  const baseTextColorClass = isScrolled ? 'text-gray-800' : 'text-gray-900';
  const mobileMenuBaseTextColorClass = isScrolled
    ? 'text-gray-900'
    : 'text-gray-800';

  return (
    <nav
      className={`w-full fixed top-0 z-20 transition duration-300 ${
        isScrolled ? 'bg-[#E0F0B1]' : 'bg-transparent'
      } ${isScrolled ? 'text-gray-800' : 'text-black'} ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <img
                className="w-14 h-14 bg-white rounded-full p-0"
                alt="logo"
                src={Logo}
                loading="lazy"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="ml-4 flex space-x-8 Poppins font-medium text-lg">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="transform hover:scale-110 hover:-translate-y-1 transition hover:font-semibold"
                >
                  <Link
                    to={item.path}
                    className={`${baseTextColorClass} ${hoverTextColorClass}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex font-semibold Poppins text-lg">
            {token ? (
              <button
                className={`${baseTextColorClass} ${hoverTextColorClass} px-4 py-1 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] font-semibold text-[#323232]`}
                type="button"
                onClick={() => setIsModalOpen(true)} // Trigger modal on logout button click
              >
                LOGOUT
              </button>
            ) : (
              <button
                className={`${baseTextColorClass} ${hoverTextColorClass} px-4 py-1 rounded-md border-2 border-black bg-beige shadow-[4px_4px_0px_0px_black] font-semibold text-[#323232]`}
                type="button"
                onClick={() => navigate('/login')}
              >
                LOGIN
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`${buttonTextClass} focus:outline-none`}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="black"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${
            isScrolled ? 'bg-amber-100 shadow-lg' : 'bg-[#E0F0B1] shadow-lg'
          }`}
        >
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
            {token ? (
              <button
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 
                          ${mobileMenuBaseTextColorClass} hover:bg-amber-300 hover:text-black`}
                onClick={() => setIsModalOpen(true)} // Trigger modal on logout button click
              >
                Log Out
              </button>
            ) : (
              <button
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 
                            ${mobileMenuBaseTextColorClass} hover:bg-amber-300 hover:text-black`}
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="w-full max-w-md p-6 rounded-lg border-2 border-black bg-amber-100">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Confirm Logout
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-[#D9D9D9] hover:bg-[#C9C9C9] text-black rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-900 hover:bg-green-800 text-amber-100 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
