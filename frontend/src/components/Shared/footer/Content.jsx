import { useEffect, useState } from 'react';
import Logo from '../../../assets/Logo/playcafe.png';
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';
import Google from './Google';

export default function Content() {
  return (
    <div className="bg-amber-100 dark:bg-gray-900 pt-16 py-8 px-4 sm:px-6 lg:px-12 h-full w-full flex flex-col justify-between md:pt-24">
      <Nav />
      <Section2 />
      <NewsletterForm />
    </div>
  );
}

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletterRouter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs w-full text-center z-50">
      <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Subscribe to our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
        <div className="flex items-center border rounded-md bg-gray-100 dark:bg-gray-700 w-full">
          <span className="p-2 text-gray-600 dark:text-gray-300">📧</span>
          <input
            type="email"
            className="p-2 rounded-r-none w-full border-l border-gray-300 dark:border-gray-600 focus:outline-none bg-transparent text-black dark:text-white"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="p-2 bg-green-500 text-white rounded-md w-full mt-2">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-green-500">{message}</p>}
    </div>
  );
};

const Section2 = () => {
  const [isWide, setIsWide] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isWide === null) return null;

  return (
    <div className="flex flex-col items-center text-center my-6">
      <img src={Logo} alt="Logo" className="w-20 h-20 sm:w-24 sm:h-24 bg-transparent p-0 rounded-3xl" loading="lazy" />
      <h1 className={`${isWide ? 'text-5xl' : 'text-3xl'} font-bold leading-tight text-black dark:text-white mt-4`}>
        BoardGame Cafe
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">©2024 by Sip & Play</p>
    </div>
  );
};

const Nav = () => {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Events', link: '/events' },
    { name: 'Reservation', link: '/reservation' },
    { name: 'Boardgame', link: '/boardgame' },
    { name: 'About', link: '/about' },
  ];

  const socialLink = [
    { name: 'Facebook', link: 'https://www.facebook.com/sipnplaynyc/', icon: <FaFacebook /> },
    { name: 'Instagram', link: 'https://www.instagram.com/sipnplaynyc/?hl=en', icon: <FaInstagram /> },
    { name: 'Tiktok', link: 'https://www.tiktok.com/@sipnplaynycofficial?lang=en', icon: <FaTiktok /> },
    { name: 'GitHub', link: 'https://github.com/RamakrushnaBiswal/PlayCafe', icon: <FaGithub /> },
  ];

  const emailAddress = 'sipnplaynyc@gmail.com';

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-8 md:gap-12 p-4 sm:p-6">
      <div className="flex flex-col gap-3">
        <h3 className="uppercase font-semibold text-black dark:text-white">About</h3>
        {navLinks.map((item, index) => (
          <a key={index} href={item.link} className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm sm:text-base">
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="uppercase font-semibold text-black dark:text-white">Socials</h3>
        {socialLink.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm sm:text-base">
            {item.icon} {item.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="uppercase font-semibold text-black dark:text-white">Contact Us</h3>
        <a href={`mailto:${emailAddress}`} className="hover:underline text-gray-800 dark:text-gray-300 text-sm sm:text-base">
          {emailAddress}
        </a>
        <a href="tel:+17189711684" className="hover:underline text-gray-800 dark:text-gray-300 text-sm sm:text-base">
          718-971-1684
        </a>
        <Google />
      </div>
    </div>
  );
};
