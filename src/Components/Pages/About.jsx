import bgpic from "./src/assets/img/abt1.jpg"

export default function About() {
  return (
    <div id="about" className="w-full mt-28 h-screen relative">
      <div className="absolute inset-0  bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bgpic})` }}></div>
      <div className="relative z-10 flex items-center justify-center h-full ms-10">
        <h1 className="text-9xl font-bold text-start w-full">ABOUT US</h1>
       <div className="flex w-full justify-center align-middle mt-10 px-36 relative z-10">
        <p className="text-xl text-gray-800 text-pretty w-full">
          How it works..
          Our name says it all!
          Founder, Jonathan Li, shares a passion for board games, boba, and 
          delicious food, so he combined them all to become Sip & Play, Park Slope’s 
          first board game cafe.  It is a straightforward concept, come in with your 
          friends and family to play any board game from our library of <span className="text-amber-600">300+ games!</span>
           We hope when you visit, you also enjoy our coffee, espresso, boba, 
           sandwiches, and snacks!
          <br/> 
          <br/>
          Hours and Location
          New opening hours:<br/>
          Sunday: 10am-11pm <br/>
          Mon-Thurs: 11am-11pm <br/>
          Fri: 11am-midnight <br/>
          Sat: 10am-midnight <br/>
          Our kitchen closes 2.5-3 hours before we close!
        </p>
      </div>
      </div>
    </div>
  );
}
