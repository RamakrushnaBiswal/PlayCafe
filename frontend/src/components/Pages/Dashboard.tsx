import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function Profile() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

  // Fetch reservation data from API
  useEffect(() => {
    const fetchReservations = async () => {
      const authToken = Cookies.get('authToken'); // Retrieve the authToken from cookies

      if (!authToken) {
        alert("Please sign in to view your reservations.");
        navigate('/login');
        return;
      }

      // Decode the token to get the user ID
      let userId;
      try {
        const decodedToken = jwtDecode(authToken);
        userId = decodedToken.sub; // Use `sub` based on the backend token payload
        console.log("Decoded userId:", userId); // Debugging line
      } catch (decodeError) {
        console.error("Error decoding token:", decodeError);
        alert("Invalid token. Please log in again.");
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}/api/reservation/get/${userId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`, // Pass the token in headers
            },
            credentials: 'include',
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch reservations');
        }

        const data = await response.json();
        setReservations(data.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    fetchReservations();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black p-4 mt-10 ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Your Reservations</h1>

        {error && (
          <p className="text-red-500 text-center" aria-live="assertive">
            {error}
          </p>
        )}

        {loading ? (
          <p className="text-gray-500 text-center">Loading your reservations...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reservations.length > 0 ? (
              reservations.map((reservation, index) => (
                <ReservationCard key={index} reservation={reservation} />
              ))
            ) : (
              <p className="text-gray-500 text-center">No reservations found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Separate ReservationCard component for better readability
const ReservationCard = ({ reservation }) => (
  <div className="bg-white dark:bg-amber-800 rounded-lg shadow-md p-4">
    <h2 className="text-xl font-semibold mb-2">Reservation Details</h2>
    <p className="text-md mb-1"><strong>Guests:</strong> {reservation.guests}</p>
    <p className="text-md mb-1"><strong>Date:</strong> {new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(reservation.date))}</p>
    <p className="text-md mb-1"><strong>Time:</strong> {reservation.time}</p>
    <p className="text-md mb-1"><strong>Email:</strong> {reservation.email}</p>
  </div>
);

export default Profile;
