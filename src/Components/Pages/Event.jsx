import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import img1 from '../../assets/img/event1.jpg';
import img2 from '../../assets/img/event2.jpg';
import img3 from '../../assets/img/event3.jpg';
import img4 from '../../assets/img/event4.jpg';
import img5 from '../../assets/img/event6.jpg';

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
"January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
export default function Event() {
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const currentDate = today.getDate();

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
useEffect(() => {
  new Splide('.splide', {
    type      : 'loop',
    perPage   : 1,
    perMove   : 1,
    autoScroll: {
      speed: 1,
    },
    noDrag    : true,
    arrows    : false,
    pagination: false,
    gap       : '2rem',
  }).mount({ AutoScroll });
}, []);
  return (
    <>
    <div
      id="event"
      className="w-full h-full bg-amber-100 dark:bg-dark-bg md:overflow-hidden "
    >
      <section className="w-full h-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center md:overflow-hidden ">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mt-6 md:mt-0 dark:text-[#faf6cb] tracking-tighter md:text-4xl/tight lg:text-7xl">
              Upcoming Events and Programs
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground  dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Explore our exciting lineup of board game events and educational
              programs.
            </p>
          </div>
          
        </div>
      </section>
      <div className="min-h-screen bg-amber-100 dark:bg-dark-bg p-4">
      <div className="container mx-auto flex flex-col  lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Calendar */}
        <div className="bg-white dark:bg-[#040f1b]  shadow-md rounded-lg p-6 w-full lg:w-1/3">
          <h2 className="text-xl dark:text-[#4FF0D4] font-bold mb-4">Event Calendar</h2>
          <div className="text-center mb-4">
            <span className="text-2xl dark:text-[#09c5d6]  text-font-semibold">{months[currentMonth]}</span> <span className="text-2xl dark:text-[#a5db2e]">{currentYear}</span>
          </div>
          <div className="grid grid-cols-7 gap-4 text-center dark:text-[#ff3434]">
            {daysOfWeek.map((day) => (
              <div key={day} className="font-bold">{day}</div>
            ))}
            {Array(firstDayOfMonth).fill(null).map((_, i) => (
              <div key={`empty-${i}`} className="p-2"></div>
            ))}
            {dates.map((day) => (
              <div
                key={day}
                className={`p-2 border rounded-md ${day === currentDate ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="bg-[#FEF3C7] text-gray-700 px-4 py-2 rounded-md mt-4">Register for Event</button>
          </div>
          <div className="text-center mt-4">
            <button className="bg-white border border-green-500 px-4 py-2 rounded-md mt-2 text-green-500 hover:bg-green-500 hover:text-white">Learn More</button>
          </div>
        </div>
        {/* Pictures */}
        <div className="bg-white dark:bg-[#dae15c] shadow-md rounded-lg p-6 w-full lg:w-2/3">
          <h2 className="text-xl dark:text-[#676761] font-bold mb-4">Event Pictures</h2>
          <div className="splide w-full h-full">
        <div className="splide__track w-full ">
          <ul className="splide__list">
            <li className="splide__slide "><img src={img1} alt="Event 1" className='w-full h-full' /></li>
            <li className="splide__slide"><img src={img2} alt="Event 2" className='w-full h-full'  /></li>
            <li className="splide__slide"><img src={img3} alt="Event 3" className='w-full h-full'  /></li>
            <li className="splide__slide"><img src={img4} alt="Event 4" className='w-full h-full'  /></li> 
            <li className="splide__slide"><img src={img5} alt="Event 6" className='w-full h-full'  /></li>
            {/* Add more images here */}
          </ul>
        </div>
      </div>
        </div>
      </div>
    </div>
      <section
        className="w-full py-12 md:py-24 lg:py-16 flex justify-center"
        id="event"
      >
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-1 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full  lg:m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src={img1}
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10">
              <h1 className="text-4xl  dark:text-gray-300 font-semibold">
                5-Minute MARVEL Cinematic Experience
              </h1>
              <h4 className="text-xl text-muted text-slate-700 dark:text-white italic mt-2 leading-8 ">
                5-Minute Marvel is a cooperative card game designed for
                fast-paced, high-energy play, perfect for Marvel fans and those
                who enjoy quick and dynamic gameplay.
              </h4>
              <div className="text-xl text-muted text-slate-700 dark:text-slate-300 italic mt-2 leading-8">
                <b>Date: </b> <i>May 10, 2023</i>
                <br />
                <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
                <br />
                <b>Age: </b> <i>All ages</i>
                <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] dark:bg-[#bc832d] dark:hover:bg-[#c8a153] p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src={img2}
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10">
              <h1 className="text-4xl dark:text-gray-300 font-semibold">
                A Game of Thrones: The Board Game
              </h1>
              <h4 className="text-xl text-muted text-slate-700 dark:text-white italic mt-2 leading-8 text-wrap ">
                Set in the world of Westeros, players represent the great houses
                vying for control of the Iron Throne. The game captures the
                political intrigue, warfare, and alliances from the books and TV
                series.
              </h4>
              <div className="text-xl text-muted text-slate-700 dark:text-slate-300 italic mt-2 leading-8">
                <b>Date: </b> <i>May 10, 2023</i>
                <br />
                <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
                <br />
                <b>Age: </b> <i>All ages</i>
                <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] dark:bg-[#bc832d] dark:hover:bg-[#c8a153]  p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src={img3}
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10">
              <h1 className="text-4xl dark:text-gray-300 font-semibold">
                Bang! Dice Expansion: Old Saloon
              </h1>
              <h4 className="text-xl text-muted text-slate-700 dark:text-white italic mt-2 leading-8  ">
                The game retains its Wild West theme, where players assume roles
                such as Sheriff, Outlaws, Renegades, and Deputies. The expansion
                adds a thematic layer of the board game &quot;Old Saloon&quot;
                with new dice, characters, and modules.
              </h4>
              <div className="text-xl text-muted text-slate-700 dark:text-slate-300 italic mt-2 leading-8">
                <b>Date: </b> <i>May 10, 2023</i>
                <br />
                <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
                <br />
                <b>Age: </b> <i>All ages</i>
                <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] dark:bg-[#bc832d] dark:hover:bg-[#c8a153]  p-4 rounded-xl text-sm font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src={img4}
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10 ">
              <h1 className="text-4xl dark:text-gray-300 font-semibold">Battle for the island</h1>
              <h4 className="text-xl text-muted text-slate-700 dark:text-white italic mt-2 leading-8 ">
                It is a thematic and strategic board game where players compete
                to control a mythical island rich with resources and secrets.
                The game features a modular board, hidden objectives, and more.
              </h4>
              <div className="text-xl text-muted text-slate-700 dark:text-slate-300 italic mt-2 leading-8">
                <b>Date: </b> <i>May 10, 2023</i>
                <br />
                <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
                <br />
                <b>Age: </b> <i>All ages</i>
                <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] dark:bg-[#bc832d] dark:hover:bg-[#c8a153]  p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src={img5}
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10 ">
              <h1 className="text-4xl dark:text-gray-300 font-semibold">
                Chameleons: A cooperative card game
              </h1>
              <h4 className="text-xl text-muted text-slate-700 dark:text-white italic mt-2 leading-8 ">
                Chameleons is a cooperative card game designed for fast-paced,A
                lighthearted game where players must identify a hidden Chameleon
                among them using deduction, quick thinking, and clever bluffing.
              </h4>
              <div className="text-xl text-muted text-slate-700 dark:text-slate-300 italic mt-2 leading-8">
                <b>Date: </b> <i>May 10, 2023</i>
                <br />
                <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
                <br />
                <b>Age: </b> <i>All ages</i>
                <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] dark:bg-[#bc832d] dark:hover:bg-[#c8a153] p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}