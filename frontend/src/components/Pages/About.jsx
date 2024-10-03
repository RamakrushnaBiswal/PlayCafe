import bgpic from "../../assets/img/abt1.jpg";

export default function About() {
  return (
    <div id="about" className="relative w-full h-screen md:mt-28">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgpic})` }}
      >
        {/* Black overlay with 60% opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 text-center md:flex-row md:px-10 lg:px-20 md:text-left">
          {/* Title */}
          <div className="flex items-center justify-center md:w-1/2">
            <h1 className="text-5xl font-bold text-center text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              ABOUT US
            </h1>
          </div>

          {/* Paragraph */}
          <div className="relative z-10 flex justify-center w-full mt-10 align-middle md:pl-32 md:mt-32">
            <p className="text-gray-200 text-l md:text-xl"> {/* Change text color for better contrast */}
              How it works..
              Our name says it all!
              Founder, Jonathan Li, shares a passion for board games, boba, and
              delicious food, so he combined them all to become Sip & Play, Park Slope’s
              first board game cafe. It is a straightforward concept, come in with your
              friends and family to play any board game from our library of <span className="text-amber-600">300+ games!</span>
              We hope when you visit, you also enjoy our coffee, espresso, boba,
              sandwiches, and snacks!
              <br />
              <br />
              Hours and Location
              New opening hours:<br />
              Sunday: 10am-11pm <br />
              Mon-Thurs: 11am-11pm <br />
              Fri: 11am-midnight <br />
              Sat: 10am-midnight <br />
              Our kitchen closes 2.5-3 hours before we close!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
