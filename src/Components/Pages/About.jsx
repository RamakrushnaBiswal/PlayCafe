export default function About() {
  return (
    <div id="about" className="w-full h-full">
      <div className="flex w-full mx-auto">
        <div className="w-full mx-auto">
          <h1 className="text-9xl font-bold text-gray-800 text-center">A</h1>
          <h1 className="text-9xl font-bold text-gray-800 text-center">B</h1>
          <h1 className="text-9xl font-bold text-gray-800 text-center">O</h1>
          <h1 className="text-9xl font-bold text-gray-800 text-center">U</h1>
          <h1 className="text-9xl font-bold text-gray-800 text-center">T</h1>
          <h4 className="text-6xl font-bold text-gray-800 text-center">US</h4>
        </div>
        <div>
          <img src="./src/assets/img/abt1.jpg" alt="dfs" />
        </div>
      </div>
      <div className="flex w-full justify-center align-middle mt-10 px-36">
        <p className="text-xl text-gray-800  w-full">
          How it works..
          Our name says it all!
          Founder, Jonathan Li, shares a passion for board games, boba, and 
          delicious food, so he combined them all to become Sip & Play, Park Slope’s 
          first board game cafe.  It is a straightforward concept, come in with your 
          friends and family to play any board game from our library of 300+ games!
           We hope when you visit, you also enjoy our coffee, espresso, boba, 
           sandwiches, and snacks!
          <br/> 
          <br/>
          Hours and Location
          New opening hours:
          Sunday: 10am-11pm
          Mon-Thurs: 11am-11pm
          Fri: 11am-midnight
          Sat: 10am-midnight
          Our kitchen closes 2.5-3 hours before we close!
        </p>
      </div>
    </div>
  );
}
