/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import pic from '../../assets/img/abt1.jpg';
import pic2 from '../../assets/img/abt1.png';
import pic3 from '../../assets/img/abt2.png';
import pic4 from '../../assets/img/abt3.png';
import pic5 from '../../assets/img/abt4.png';
import MainHOC from '../MainHOC';
import { message } from 'antd';

function Register() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [minDate, setMinDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guests, date, time });

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reservation/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guests, date, time }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleDateValidation = () => {
    if (date.length === 10 && date < minDate) {
      // Reset to today's date if the selected date is invalid
      setDate(minDate);
      message.warning('You cannot select a date before today.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  return (
    <div className="w-full mx-auto mt-10 lg:mt-0 md:mt-0 dark:bg-black dark:text-white">
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col md:flex-row">
        <div className="container px-4 md:px-6 text-center text-primary-foreground w-full md:w-2/5 md:mt-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-8xl text-gray-800 dark:text-white">
            RESERVE YOUR SPOT AT THE BOARD GAME CAFE
          </h1>
          <button className="inline-flex items-center justify-center mt-4 bg-[#D9D9D9] hover:bg-[#C9C9C9] rounded-full p-4 dark:text-black">
            Make a Reservation
          </button>
        </div>
        <div className="w-full md:w-3/5 mt-6 md:mt-0 p-4 md:p-0">
          <img
            src={pic}
            alt="Board Game Cafe"
            loading="lazy"
            className="w-full h-auto rounded-s-full"
          />
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 px-6 md:px-6 border-2 border-gray-200">
        <div className="w-full md:w-3/5 lg:w-2/5 mx-auto border-2 p-7 rounded-lg border-black bg-amber-100 dark:bg-amber-900">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              Reserve Your Spot
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Fill out the form below to secure your reservation at our board game cafe.
            </p>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="guests"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    onChange={(e) => setGuests(e.target.value)}
                    className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-black"
                  >
                    <option value="">Select number of guests</option>
                    {Array.from({ length: 6 }, (_, i) => (
                      <option key={i} value={i + 1}>{i + 1} Guest{ i === 0 ? '' : 's' }</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    min={minDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onBlur={handleDateValidation}
                    className="flex dark:text-black h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="time">
                  Time
                </label>
                <select
                  id="time"
                  onChange={(e) => setTime(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select time</option>
                  {['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map((timeOption) => (
                    <option key={timeOption} value={timeOption}>{timeOption}</option>
                  ))}
                </select>
              </div>
              <button
                className="inline-flex items-center justify-center p-4 bg-[#D9D9D9] hover:bg-[#C9C9C9]"
                type="submit"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
