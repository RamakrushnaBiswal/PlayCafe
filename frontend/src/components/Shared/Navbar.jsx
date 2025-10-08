import { useState, useEffect } from 'react';
import Logo from '../../assets/Logo/playcafe.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Google from './footer/Google';
import ThemeToggle from '../../components/ThemeToggle';

const Navbar = () => {
  const [isloggedIn, setisloggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(Cookies.get('authToken'));
  const location = useLocation();
  const navigate = useNavigate(); // Correctly initialize useNavigate
  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/events' },
    { name: 'MENU', path: '/menu' },
    { name: 'RESERVATION', path: '/reservation' },
    { name: 'BOARDGAMES', path: '/boardgame' },
    { name: 'MEMBERSHIP', path: '/membership' }, // Add Membership here
    { name: 'PROFILE', path: '/dashboard' }, // Add Membership here
    { name: 'CONTRIBUTORS', path: '/contributors' },
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

  const handleLogout = async () => {
    // setisloggedIn(false); // Set isLoggedIn to false on confirmation
    //managing log in , logout using jwt tokens
    const response = await fetch(`${API_URL}/api/user/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    Cookies.remove('authToken');
    Cookies.remove("authenticatedUser");
    setToken(null);
    setIsModalOpen(false); // Close the modal
    setIsMenuOpen(false); // after getting logged out close the menu if it is open
    navigate('/login'); //navigate to login after get logged out
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
      className={`w-full fixed top-0 z-50 transition duration-300 ${isScrolled
        ? 'bg-black/80 backdrop-blur-md shadow-lg text-white'
        : 'bg-transparent text-white'
        }`}
    >

      <div className="mx-auto px-6">
        <div className="flex justify-between items-center lg:h-16">

          <Link to="/">
            <div className="flex-shrink-0">
              <img
                className="w-14 h-14 rounded-full p-0 mt-1"
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
                    className="relative group"
                  >
                    <span className="group-hover:text-emerald-400 transition-colors duration-200">{item.name}</span>
                    <span className="block h-[2px] scale-x-0 group-hover:scale-x-100 origin-left bg-emerald-400 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div className="hidden md:flex font-semibold Poppins text-lg space-x-4 ">
            <ThemeToggle />
            {token ? (
              <button
                className={`px-4 py-1 rounded-md border-2 border-emerald-400 text-white hover:text-black bg-transparent hover:bg-emerald-400/90 shadow-[0_0_18px_rgba(16,185,129,0.6)] transition`}
                type="button"
                onClick={() => setIsModalOpen(true)} // Trigger modal on logout button click
              >
                LOGOUT
              </button>
            ) : (
              <button
                className={`px-4 py-1 rounded-md border-2 border-emerald-400 text-white hover:text-black bg-transparent hover:bg-emerald-400/90 shadow-[0_0_18px_rgba(16,185,129,0.6)] transition`}
                type="button"
                onClick={() => navigate('/login')}
              >
                LOGIN
              </button>

            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden space-x-6">
            <button
              onClick={toggleMenu}
              className={`${buttonTextClass} focus:outline-none`}
            >

              {isMenuOpen ? (
                <svg
                  className="h-6 w-6 stroke-black dark:stroke-white"
                  fill="none"
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
                  className="h-6 w-6 stroke-black dark:stroke-white"
                  fill="none"
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
          className={`md:hidden bg-black/90 backdrop-blur-md shadow-lg text-white`}
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                onClick={() => setIsMenuOpen((prev) => !prev)}
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-md text-base font-semibold transition duration-300 hover:text-emerald-400`}
              >
                {item.name}
              </Link>
            ))}
            {token ? (
              <button
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 hover:text-emerald-400`}
                onClick={() => setIsModalOpen(true)} // Trigger modal on logout button click
              >
                Log Out
              </button>
            ) : (
              <button
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-300 hover:text-emerald-400`}
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="w-full max-w-md p-6 rounded-lg border-2 border-emerald-400 bg-black text-white shadow-[0_0_35px_rgba(16,185,129,0.4)]">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Confirm Logout
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 border border-gray-600 hover:border-white text-white rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded"
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
