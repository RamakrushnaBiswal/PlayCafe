import React, { useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Offers = ({ isVisible, onClose }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // useEffect to add/remove class to body for disabling scroll when modal is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null; // Modal is only visible when isVisible is true

  // Function to handle redirect and modal close
  const handleTakeMeThere = () => {
    onClose(); // Close the modal first
    navigate('/menu'); // Then navigate to /menu
  };

  return (
    <div className='fixed inset-0 bg-white bg-opacity-25 backdrop-blur-lg flex justify-center items-center z-30'>
      <div className='w-[600px] flex p-4 rounded-lg shadow-lg bg-white relative z-20'>
        
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-black text-xl"
          onClick={() => onClose()} // onClick event to trigger onClose
        >
          <RxCross1 color='black' />
        </button>

        {/* Modal Content in two sections */}
        <div className="flex flex-row w-full">
          {/* Left Section: Image */}
          <div className="w-1/2">
            <img 
              src="https://www.leocoffee.co.in/cdn/shop/files/F0470AC5-D46D-4112-834D-7C5C1F9EF9CF.jpg?v=1673668314" 
              alt="Offer" 
              className="rounded-lg object-cover h-full w-full"
            />
          </div>

          {/* Right Section: Text and Buttons */}
          <div className="w-1/2 flex flex-col justify-center px-4">
            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-black">
              So what are you waiting for? <br />
              Grab the Offer now!
            </h2>

            {/* Buttons */}
            <div className="flex justify-between mt-4 gap-2 ">
              {/* No thanks button (left) */}
              <button 
                className="bg-[#f5deb3] text-black py-2 px-4 rounded-lg hover:bg-[#eed19b] transition"
                onClick={() => onClose()} // Close modal on No thanks
              >
                No thanks
              </button>

              {/* Yes, Take Me There button (right) */}
              <button 
                className="bg-[#d2b48c] text-black py-2 px-4 rounded-lg hover:bg-[#c8a682] transition"
                onClick={handleTakeMeThere} // Handle both close and navigation
              >
                Take Me There
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop blur layer */}
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0'></div>
    </div>
  );
};

export default Offers;
