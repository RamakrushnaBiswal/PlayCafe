import pic from "../../assets/img/abt1.jpg";
import pic2 from "../../assets/img/abt1.png";
import pic3 from "../../assets/img/abt2.png";
import pic4 from "../../assets/img/abt3.png";
import pic5 from "../../assets/img/abt4.png";

import React from 'react';
export default function Register() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  };
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);
  return (
    <>
      <div className="w-full mx-auto mt-10 lg:mt-0 md:mt-0">
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col md:flex-row">
          <div className="container px-4 md:px-6 text-center text-primary-foreground w-full md:w-2/5 md:mt-10">
            <h1 className="text-3xl dark:text-[#f0e4e4] font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-8xl text-gray-800">
              RESERVE YOUR SPOT AT THE BOARD GAME CAFE
            </h1>
            {}
            <button className="inline-flex items-center justify-center mt-4 bg-[#D9D9D9] dark:bg-[#963838] hover:bg-[#C9C9C9] dark:hover:bg-[#824040] rounded-full p-4">
              Make a Reservation
            </button>
          </div>
          <div className="w-full md:w-3/5 mt-6 md:mt-0 p-4 md:p-0">
            <img
              src={pic}
              alt="Board Game Cafe"
              className="w-full h-auto  rounded-s-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-6 md:px-6 border-2 border-gray-200">
          <div className="w-full md:w-3/5 lg:w-2/5 mx-auto border-2 p-7 rounded-lg border-black bg-amber-100">
            <div className="space-y-6">
              <h2 className="text-3xl dark:text-black sm:text-4xl md:text-5xl font-bold tracking-tighter">
                Reserve Your Spot
              </h2>
              <p className="text-base dark:text-gray-700 sm:text-lg md:text-xl text-muted-foreground">
                Fill out the form below to secure your reservation at our board
                game cafe.
              </p>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-sm dark:text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="guests"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground dark:text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-sm dark:text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="flex h-10 w-full items-center rounded-md dark:text-black border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm dark:text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="time"
                  >
                    Time
                  </label>
                  <select
                    id="time"
                    className="flex h-10 dark:text-black w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select time</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                  </select>
                </div>
                <button
                  className="inline-flex items-center justify-center p-4 bg-[#D9D9D9] dark:bg-[#963838] dark:hover:bg-[#824040] hover:bg-[#C9C9C9]"
                  type="submit"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* <div className="flex justify-center mt-4">
          <button onClick={toggleTheme} >
          </button>
        </div> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-amber-100 bg-green-900 p-5 text-center">
                    Popular Board Games
                </h1>
        <div className="mt-8 w-full flex justify-center bg-white ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-10">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <img
                  src={pic2}
                  alt="Catan"
                  className="mb-4 w-64 h-64 object-cover"
                />
                <div className="font-medium">Catan</div>
                <div className="text-muted-foreground text-sm">4-6 players</div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <img
                  src={pic3}
                  alt="Ticket to Ride"
                  className="mb-4 w-64 h-64 object-cover"
                />
                <div className="font-medium">Ticket to Ride</div>
                <div className="text-muted-foreground text-sm">2-5 players</div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <img
                  src={pic4}
                  alt="Codenames"
                  className="mb-4 w-64 h-64 object-cover"
                />
                <div className="font-medium">Codenames</div>
                <div className="text-muted-foreground text-sm">4-8 players</div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <img
                  src={pic4}
                  alt="Codenames"
                  className="mb-4 w-64 h-64 object-cover"
                />
                <div className="font-medium">Codenames</div>
                <div className="text-muted-foreground text-sm">4-8 players</div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <img
                  src={pic4}
                  alt="Codenames"
                  className="mb-4 w-64 h-64 object-cover"
                />
                <div className="font-medium">Codenames</div>
                <div className="text-muted-foreground text-sm">4-8 players</div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <img
                  src={pic5}
                  alt="Pandemic"
                  className="mb-4 w-64 h-64 object-cover"
                />
                <div className="font-medium">Pandemic</div>
                <div className="text-muted-foreground text-sm">2-4 players</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
