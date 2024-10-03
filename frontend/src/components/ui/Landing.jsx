import React from "react";
import Typewriter from "typewriter-effect";

import heropic from "../../assets/landing/hero pic.jpg";
import coffecup from "../../assets/landing/coffecup.png";

export default function Landing() {
  return (
    <div>
      <section className="relative pb-24 h-screen-dvh w-screen bg-cover bg-center overflow-hidden">
        <div className="flex flex-col md:flex-row items-center pt-10 md:pt-20 z-1">
     
          <div className="w-full md:w-1/2 p-4 text-center md:text-left z-10">
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold leading-tight">
            <Typewriter
                options={{
                  strings: ["A unique café experience awaits you"],
                  autoStart: true,
                  loop: true,
                  delay: 75, 
                }}
              />
            </h1>
            
          </div>

          <div className="flex justify-center w-full mt-10 md:mt-0">
            <div className="absolute flex justify-center w-2/4 md:w-2/4 rotate-12 -bottom-20">
              <img src={heropic} alt="Hero" className="w-full max-w-[400px] mx-auto" />
            </div>
            <div className="absolute flex justify-center w-2/4 md:w-2/4 -rotate-12 -bottom-16">
              <img src={heropic} alt="Hero" className="w-full max-w-[400px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center py-16 md:py-32 px-4 md:px-32 relative">
        <div className="w-1/2 absolute p-4 md:right-40 m-auto">
          <img src={coffecup} alt="" className="w-96 rotate-12"/>
        </div>
        <div className="py-28 z-10">
          <h1 className="text-[4rem] md:text-[18rem] font-bold text-black">
            PLAYCAFE
          </h1>
        </div>
      </section>
    </div>
  );
}
