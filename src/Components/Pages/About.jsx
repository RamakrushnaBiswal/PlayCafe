import bgpic from "../../assets/img/abt1.jpg";
import { useState } from 'react'; // To manage hover state

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <div id="about" className="w-full mt-28 h-screen relative">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgpic})` }}></div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-10">
        <h1
          className={`text-9xl font-bold text-start w-full transition-all duration-500 ease-in-out ${hovered ? 'text-amber-600 scale-105' : 'text-black'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          ABOUT US
        </h1>

        {/* Text content with darker colors */}
        <div className="flex flex-col items-center w-full justify-center align-middle mt-10 px-36 relative z-10 space-y-4 text-center">
          <p className="text-2xl text-black">
            How it works..
            Our name says it all!
            Founder, <span className="font-semibold text-amber-700">Jonathan Li</span>, shares a passion for board games, boba, and 
            delicious food. He combined them all to create <span className="text-amber-700">Sip & Play</span>, Park Slope’s 
            first board game cafe. Come in with your friends and family to play any game from our library of <span className="font-bold text-amber-700">300+ games!</span>
          </p>

          {/* Interactive Highlight with darker text */}
          <p className="text-lg text-black mt-5">
            We hope you also enjoy our <span className="text-amber-700">coffee, espresso, boba</span>, 
            sandwiches, and snacks during your visit!
          </p>

          {/* Hours and Location with darker text and hover effects */}
          <div className="mt-5 text-black">
            <h3 className="text-3xl font-semibold">Hours and Location</h3>
            <p>
              New opening hours:
              <ul className="text-2xl space-y-2 mt-2">
                <li className="hover:text-amber-600">Sunday: 10am-11pm</li>
                <li className="hover:text-amber-600">Mon-Thurs: 11am-11pm</li>
                <li className="hover:text-amber-600">Fri: 11am-midnight</li>
                <li className="hover:text-amber-600">Sat: 10am-midnight</li>
              </ul>
              <span className="block mt-3">Our kitchen closes 2.5-3 hours before we close!</span>
            </p>
          </div>

          {/* Call-to-action button */}
          <a href="/contact" className="mt-10 inline-block bg-amber-600 text-white py-3 px-6 rounded-full hover:bg-amber-500 transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
