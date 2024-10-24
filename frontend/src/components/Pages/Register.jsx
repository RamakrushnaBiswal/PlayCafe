import React from 'react';

const ReservationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const guests = event.target.guests.value;
    const date = event.target.date.value;
    const time = event.target.time.value;

    if (!guests || !date || !time) {
      alert('Please fill out all fields');
      return;
    }

    console.log({ guests, date, time });

    fetch('https://your-backend-url/api/reservation/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guests, date, time }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Reservation Successful');
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="container">
      {/* Header Section */}
      <section className="header-section">
        <h1>Reserve Your Spot at the Board Game Cafe</h1>
        <button>Make a Reservation</button>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <img src="path-to-your-image.jpg" alt="Board Game Cafe" />
      </section>

      {/* Reservation Form */}
      <section className="form-container">
        <h2>Reserve Your Spot</h2>
        <p>Fill out the form below to secure your reservation at our board game cafe.</p>

        <form id="reservationForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="guests">Number of Guests</label>
            <select id="guests" name="guests">
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
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" min={today} />
          </div>

          <div>
            <label htmlFor="time">Time</label>
            <select id="time" name="time">
              <option value="">Select time</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>
          </div>

          <button type="submit">Reserve Now</button>
        </form>
      </section>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        h1,
        h2 {
          font-weight: bold;
        }
        .form-container {
          background-color: #fff;
          border: 2px solid #ccc;
          padding: 20px;
          border-radius: 10px;
          width: 100%;
          max-width: 600px;
        }
        label {
          font-size: 14px;
          font-weight: bold;
        }
        select,
        input[type='date'],
        button {
          display: block;
          width: 100%;
          margin-top: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        select:hover,
        input[type='date']:hover,
        button:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        button {
          background-color: #d9d9d9;
          cursor: pointer;
        }
        button:hover {
          background-color: #c9c9c9;
        }
        .image-section img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ReservationForm;
