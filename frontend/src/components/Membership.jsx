/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiCheckMark } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const membershipData = [
  {
    title: "Foods + Games Membership",
    features: [
      "Access to both the food menu and gaming lounge",
      "Special discounts on selected food items",
      "Free gaming credits each month",
      "Exclusive access to members-only events"
    ],
    price: "$50/month",
  },
  {
    title: "Games Only Membership",
    features: [
      "Unlimited access to all games",
      "Free gaming credits every week",
      "Invitations to members-only gaming tournaments"
    ],
    price: "$30/month",
  },
  {
    title: "Customizable Add-ons",
    features: [
      "Free food on game days",
      "Extra gaming time",
      "Birthday party discounts",
        "Free gaming credits every week",
        "Invitations to members-only gaming tournaments",
        "Exclusive access to members-only events"
    ],
    price: "Varies",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Membership = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState({});

  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const handleNext = () => {
    // Here you can handle selectedFeatures if needed
    navigate('/signup');
  };

  return (
    <motion.div
      className="w-full h-auto bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-6">Membership Plans</h1>
        <p className="md:text-2xl text-xl font-mono text-gray-200 text-center max-w-3xl">
          Choose the plan that suits your needs and start enjoying exclusive perks!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {membershipData.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-xl shadow-xl rounded-3xl p-8 max-w-sm w-full transform transition duration-500 hover:scale-105 hover:bg-opacity-30"
            whileHover={{ scale: 1.05 }}
            variants={cardVariants}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">{plan.title}</h2>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-2 text-lg text-gray-200">
                  <GiCheckMark className="text-green-400 mr-2" /> {feature}
                </li>
              ))}
            </ul>
            <div className="text-2xl font-semibold text-white mb-6">{plan.price}</div>
            {plan.title === "Customizable Add-ons" ? (
              <button
                className="fixed bottom-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-8 rounded-full hover:from-pink-500 hover:to-orange-500 transition-all"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Customize Add-ons
              </button>
            ) : (
              <button
                className="fixed bottom-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-8 rounded-full hover:from-pink-500 hover:to-orange-500 transition-all"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal for Customizable Add-ons */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Select Your Add-ons</h2>
            <div className="flex flex-col mb-6">
              {membershipData[2].features.map((feature, idx) => (
                <label key={idx} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedFeatures[feature] || false}
                    onChange={() => handleFeatureChange(feature)}
                    className="mr-2"
                  />
                  {feature}
                </label>
              ))}
            </div>
            <button
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-full hover:from-pink-500 hover:to-orange-500 transition-all"
              onClick={handleNext}
            >
              Next
            </button>
            <button
              className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition-all"
              onClick={() => setIsModalOpen(false)} // Close modal
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Membership;
