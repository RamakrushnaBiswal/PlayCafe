import { useEffect, useState } from 'react';
import Logo from '../../../assets/Logo/playcafe.png';
import googleImage from '../../../assets/img/google.png';
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';
import Google from './Google';

export default function Content() {
  return (
    <div className="bg-amber-100 dark:bg-black pt-16 py-8 px-12 h-full w-full flex flex-col justify-between md:pt-24`">
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
    <div className="absolute top-12 right-60 p-2 rounded-md shadow-lg ">
      <h3 className="text-white text-lg mb-2">Subscribe to our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 md:gap-4">
      <div className="flex items-center border rounded-md bg-white">
          <span className="p-2 text-gray-600">
            📧
          </span>
        <input
          type="email"
          className="p-2 rounded-r-none border-l border-gray-300 focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <button type="submit" className="p-2 bg-green-500 text-white rounded-md ml-2">
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
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isWide === null) return null;

  return (
    <>
      {!isWide && (
        <div className="flex justify-center">
          <img
            className="w-24 bg-transparent p-0 rounded-3xl h-24"
            alt="logo"
            src={Logo}
            loading="lazy"
          />
        </div>
      )}
      <div

        className={`flex ${isWide ? 'justify-between items-end' : 'flex-col items-center'
          } text-white`}

      >
        <div>
          <h1
            className={`${isWide ? 'text-[7.5vw]' : 'text-[12vw]'} leading-[0.8]`}
          >
            BoardGame Cafe{!isWide && <br />}
          </h1>
          <p className={`flex ${isWide ? `text-[center] mt-3 ml-[620px]` : `text-base mt-1`}`}>
             ©2024 by Sip & Play
          </p>
        </div>
      </div>
    </>
  );
};

const Nav = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Reservation',
      link: '/reservation',
    },
    {
      name: 'Boardgame',
      link: '/boardgame',
    },
    {
      name: 'About',
      link: '/about',
    },
  ];
  const socialLink = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/sipnplaynyc/',
      icon: <FaFacebook />,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/sipnplaynyc/?hl=en',
      icon: <FaInstagram />,
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@sipnplaynycofficial?lang=en',
      icon: <FaTiktok />,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/RamakrushnaBiswal/PlayCafe',
      icon: <FaGithub />,
    },
  ];
  const emailAddress = 'sipnplaynyc@gmail.com';

  return (
    <div className="flex md:flex-row flex-col shrink-0 gap-4 sm:gap-20 ml-[30px]">
      <div className="flex justify-between md:gap-20">
        <div className="flex flex-col gap-2 text-black dark:text-white">
          <h3 className="mb-2 uppercase text-black dark:text-white cursor-pointer">About</h3>
          {navLinks.map((item, index) => (
            <a
              className="hover:text-white duration-300"
              key={index}
              href={item.link}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-black dark:text-white">
          <h3 className="mb-2 uppercase text-black dark:text-white ml-[30px] cursor-pointer">Socials</h3>
          {socialLink.map((item, index) => (
            <a
              target="_blank"
              className="hover:text-white duration-300 flex items-center gap-2"
              key={index}
              href={item.link}
              aria-label={`${item.name} - opens in a new tab`}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-black dark:text-white">
        <h3 className="mb-2 uppercase text-black dark:text-white ml-[30px] cursor-pointer">Contact Us</h3>
        <a
          href={`mailto:${emailAddress}`}
          className="block mb-2 hover:underline"
        >
          {emailAddress}
        </a>
        <a href="tel:+17189711684" className="mb-2 hover:underline">
          718-971-1684
        </a>

        {/* <div className="flex items-center justify-center mt-4">
          <img
            src={googleImage}
            alt="Google Translate"
            className="w-[2rem] h-[2rem] mr-[65px]"
          />
        </div> */}
        <Google />
      </div>
      <div className="flex flex-col md:ml-4 mt-4 md:mt-0"> {/* NewsletterForm flex container */}
          <NewsletterForm />
        </div>
    </div>
  );
};
