import { useEffect, useRef } from 'react';
import heropic from '../../assets/landing/hero pic.jpg';
import coffecup from '../../assets/landing/coffecup.png';
import SplitType from 'split-type';
import gsap from 'gsap';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Landing() {
  const textRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: 'chars, words' });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Set initial opacity to 0 for all characters
    gsap.set(splitText.chars, { opacity: 0 });

    tl.to(splitText.chars, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      ease: 'power1.inOut',
    }).to(splitText.chars, {
      opacity: 0,
      duration: 0.1,
      stagger: 0.1,
      ease: 'power1.inOut',
      delay: 1,
    });
  }, []);

  return (
    <div className='bg-black text-white relative overflow-hidden'>
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}></div>
      </div>

      {/* Glowing orbs for ambiance */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none z-0"></div>

      <section className="relative pb-24 min-h-screen bg-cover bg-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Left: Multi-line ultra-large headline */}
            <div className="flex-1 max-w-3xl md:max-w-4xl md:pr-8 lg:pr-16 xl:pr-24">
              <h1
                className="font-bold text-white leading-[0.9] drop-shadow-[0_0_25px_rgba(0,255,65,0.5)]" 
                style={{ fontFamily: 'Space Mono, monospace' }}
                ref={textRef}
              >
                <span className="block text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem]">A unique</span>
                <span className="block text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem]">café</span>
                <span className="block whitespace-nowrap text-[2.5rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8rem] xl:text-[9rem]">experience</span>
                <span className="block text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] opacity-80">await</span>
              </h1>
            </div>

            {/* Right: Rotated image stack aligned to the right */}
            <div className="flex-1 relative h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[600px] mt-10 md:mt-0">
              {/* First Image - Rotated Right */}
              <div className="absolute right-2 md:right-6 lg:right-10 top-6" style={{ transform: 'rotate(12deg) translateX(40px)' }}>
                <div className="relative w-56 sm:w-72 md:w-72 lg:w-[380px] xl:w-[420px]">
                  <div className="absolute inset-0 bg-green-400 blur-2xl opacity-40 rounded-xl"></div>
                  <img
                    src={heropic}
                    alt="Cafe ambiance"
                    loading="lazy"
                    className="w-full h-auto relative rounded-xl border-2 border-green-400 shadow-[0_0_30px_rgba(0,255,65,0.6)]"
                  />
                </div>
              </div>

              {/* Second Image - Rotated Left (Overlapping) */}
              <div className="absolute right-10 md:right-20 lg:right-28 bottom-0" style={{ transform: 'rotate(-12deg) translateX(60px)' }}>
                <div className="relative w-56 sm:w-72 md:w-72 lg:w-[380px] xl:w-[420px]">
                  <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-40 rounded-xl"></div>
                  <img
                    src={heropic}
                    alt="Cafe experience"
                    loading="lazy"
                    className="w-full h-auto relative rounded-xl border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.6)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row justify-center items-center py-20 md:py-32 px-4 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* PLAYCAFE Text */}
          <div className="flex-1 flex justify-center md:justify-start order-2 md:order-1">
            <h1 
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 leading-none"
              style={{ 
                fontFamily: 'Space Mono, monospace',
                textShadow: '0 0 40px rgba(0,255,65,0.5), 0 0 80px rgba(0,255,65,0.3)'
              }}
            >
              PLAYCAFE
            </h1>
          </div>

          {/* Coffee Cup Image */}
          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[450px]">
              <div className="absolute inset-0 bg-green-500 blur-3xl opacity-40"></div>
              <LazyLoadImage
                alt="Coffee cup"
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: '1s' },
                }}
                className="w-full h-auto rotate-12 relative drop-shadow-[0_0_35px_rgba(0,255,65,0.7)]"
                src={coffecup}
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'Space Mono', monospace;
        }
      `}</style>
    </div>
  );
}

export default trackWindowScroll(Landing);