import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/logo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Content() {
  return (
    <div className="bg-black pt-24 py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  const [isWide, setIsWide] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isWide && (
        <div className="flex justify-center">
          <img
            className="w-20 bg-white p-2 rounded-3xl h-20"
            alt="logo"
            src={Logo}
          />
        </div>
      )}

      {isWide && (
        <div className="flex justify-between items-end text-white">
          <h1 className="text-[9vw] leading-[0.8] mt-10">BoardGame Cafe</h1>
          <p>©2024 by Sip & Play</p>
        </div>
      )}
      {!isWide && (
        <>
          <div className="flex relative font-bold text-[12vw] top-10 flex-wrap justify-between items-end text-white">
            <div>
              <h1 className=" leading-[0.8]">BoardGame</h1>
            </div>
            <div className="flex justify-center h-fit w-full">
              <h1 className="leading-[0.8] mt-4">Cafe</h1>
            </div>
          </div>
          <div className="flex justify-center text-white">
            <p className="mt-8">©2024 by Sip & Play</p>
          </div>
        </>
      )}
    </>
  );
};

const Nav = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/event",
    },

    {
      name: "Reservation",
      link: "/register",
    },
    {
      name: "Boardgame",
      link: "/boardgame",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  const socialLink = [
    { name: "Facebook", link: "https://www.facebook.com/sipnplaynyc/" },
    { name: "Instagram", link: "https://www.instagram.com/sipnplaynyc/?hl=en" },
    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@sipnplaynycofficial?lang=en",
    },
  ];
  const emailAddress = "sipnplaynyc@gmail.com";

  return (
    <div className="flex shrink-0 gap-4 sm:gap-20">
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">About</h3>
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
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Socials</h3>
        {socialLink.map((item, index) => (
          <a
            target="_black"
            className="hover:text-white duration-300"
            key={index}
            href={item.link}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Contact Us</h3>
        <a
          href={`mailto:${emailAddress}`}
          className="block mb-2 hover:underline"
        >
          {emailAddress}
        </a>
        <p className="mb-2">718-971-1684</p>
      </div>
    </div>
  );
};
