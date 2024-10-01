import heropic from "../../assets/landing/hero pic.jpg";
import coffecup from "../../assets/landing/coffecup.png";


export default function Landing() {
  return (
    <div>
      <section className="relative h-screen bg-cover bg-center overflow-hidden py-8">
        <div className="flex flex-col md:flex-row items-center ms-20 pt-20">
          {/* Text Content */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left z-10 pt-14">
            <h1 className="text-xl lg:text-9xl font-bold ">
              A unique café experience awaits you
            </h1>
          </div>
          <div className="absolute w-2/4 left-2/3 rotate-12 -bottom-20">
            <img src={heropic} alt="" className="w-2/4" />
          </div>
          <div className="absolute w-2/4 left-2/3 -rotate-12 -bottom-16">
            <img src={heropic} alt="" className="w-2/4" />
          </div>
        </div>
      </section>


      <section className="flex flex-row justify-center items-center py-8 h-screen">
        {/* <div className="w-3/5 p-28 mt-20">
          <h1 className="text-8xl font-bold text-black ">
            Our name says it all!
          </h1>
          <p className="text-black text-2xl">
            Founder, Jonathan Li, shares a passion for board games, boba, and
            delicious food, so he combined them all to become Sip & Play, Park
            Slope’s first board game cafe. It is a straightforward concept: come
            in with your friends and family to play any board game from our
            library of 300+ games! We hope when you visit, you also enjoy our
            coffee, espresso, boba, sandwiches, and snacks!
          </p>
          <ul className="text-xl mt-4">
            <li>New opening hours:</li>
            <li>Sunday: 10am-11pm</li>
            <li>Mon-Thurs: 11am-11pm</li>
            <li>Fri: 11am-midnight</li>
            <li>Sat: 10am-midnight</li>
          </ul>
          <button className="p-2 border-2 border-slate-500">Learn more↗️</button>
        </div> */}
        <div className="w-1/2  absolute right-40 m-auto">
          <img src={coffecup} alt="" className="w-96 rotate-12"/>
        </div>
        <div className="py-28 z-10">
          <h1 className="text-9xl font-bold text-black">
            PLAYCAFE
          </h1>
        </div>
      </section>
    </div>
  );
}
