import bgpic from "../../assets/img/abt1.jpg";

export default function About() {
  return (
    <div id="about" className="w-full md:mt-28 h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgpic})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Black overlay with 40% opacity */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full p-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center p-4 text-white">ABOUT US</h1>
          <div className="flex w-full justify-center items-start mt-8 md:mt-10 md:px-8 lg:px-36 relative z-10">
            <p className="text-base sm:text-lg md:text-xl text-gray-200 w-full leading-relaxed text-justify p-4">
              How it works...<br />
              Our name says it all! Founder, Jonathan Li, shares a passion for board games, boba, and
              delicious food, so he combined them all to become Sip & Play, Park Slope’s
              first board game cafe. It is a straightforward concept: come in with your
              friends and family to play any board game from our library of <span className="text-amber-600">300+ games!</span>
              We hope when you visit, you also enjoy our coffee, espresso, boba,
              sandwiches, and snacks!
              <br /><br />
              <strong>Hours and Location:</strong><br />
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
