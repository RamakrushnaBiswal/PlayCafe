import React from 'react';
import heropic from "../../assets/landing/hero pic.jpg";
import coffecup from "../../assets/landing/coffecup.png";

export default function Landing() {
  return (
    <div className="dark:bg-dark-bg dark:text-dark-text">
      <section className="relative pb-24 h-screen-dvh w-screen bg-cover bg-center overflow-hidden">
        <div className="flex-col md:flex pt-20 z-1">
          {/* Text Content */}
          <div className="w-screen p-4 md:w-1/2 mb-6 md:mb-0 text-center md:text-left z-10 pt-14">
            <h1 className="text-6xl md:text-9xl font-bold dark:text-dark-text">
              A unique café experience awaits you
            </h1>
          </div>
          <div>
            <div className="flex justify-center pt-64 z-0">
              <div className="absolute flex justify-center md:w-2/4 md:left-2/4 rotate-12 -bottom-20">
                <img src={heropic} alt="" className="w-2/4" />
              </div>
              <div className="absolute flex justify-center md:w-2/4 md:left-2/4 -rotate-12 -bottom-16">
                <img src={heropic} alt="" className="w-2/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-row justify-center items-center p-32">
        <div className="w-1/2 absolute p-4 md:right-40 m-auto">
          <img src={coffecup} alt="" className="w-96 rotate-12" />
        </div>
        <div className="py-28 z-10">
          <h1 className="text-[4rem] md:text-[18rem] font-bold dark:text-dark-text">
            PLAYCAFE
          </h1>
        </div>
      </section>
    </div>
  );
}
