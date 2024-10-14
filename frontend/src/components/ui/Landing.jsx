import heropic from '../../assets/landing/hero pic.jpg';
import coffecup from '../../assets/landing/coffecup.png';
import { useEffect, useRef } from 'react';
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
  });

  return (
    <div>
      <section className="relative pb-24 h-screen-dvh bg-cover bg-center overflow-hidden">
        <div className="flex-col md:flex pt-20 z-1">
          {/* Text Content */}
          <div className="p-4 md:w-1/2 mb-6 md:mb-0 text-center md:text-left z-10 pt-14">
            <h1 
              className="unique-text ml-4" 
              ref={textRef}
              style={{
                fontSize: '4rem', /* Adjusted size */
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#333', /* Dark base color */
                transition: 'transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; /* Slight zoom effect */
                e.currentTarget.style.color = '#4e2c0a'; /* Brown text color */
                e.currentTarget.style.textShadow = '0 0 5px rgba(78, 44, 10, 0.6), 0 0 10px rgba(78, 44, 10, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; /* Reset scale */
                e.currentTarget.style.color = '#333'; /* Reset text color */
                e.currentTarget.style.textShadow = 'none'; /* Remove glow */
              }}
            >
              A unique café experience awaits you
            </h1>
          </div>
          <div>
            <div className="flex justify-center pt-64 z-0">
              <div className="absolute flex justify-center md:w-2/4 md:left-2/4 rotate-12 -bottom-20 items-center">
                <img src={heropic} alt="" loading="lazy" className="w-2/4" />
              </div>

              <div className="absolute flex justify-center md:w-2/4 md:left-2/4 -rotate-12 -bottom-16">
                <img src={heropic} alt="" loading="lazy" className="w-2/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-row justify-center items-center p-32">
        <div className="w-1/2 absolute p-4 md:right-40 m-auto">
          <LazyLoadImage
            alt={'image.alt'}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: '1s' },
            }}
            className="w-96 rotate-12"
            src={coffecup}
          />
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

export default trackWindowScroll(Landing);
