import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaGift } from 'react-icons/fa';

const ImageModal = () => {
    const [modal, setModal] = useState(true);
    const [countdown, setCountdown] = useState(300); // 5 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCount => prevCount > 0 ? prevCount - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const toggleModal = () => {
        setModal(!modal);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <AnimatePresence>
            {modal && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
                >
                    <motion.div 
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        className="modal-content bg-[#f5f5dc] rounded-lg shadow-2xl w-full max-w-[600px] overflow-hidden"
                    >
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                                alt="Delicious Coffee" 
                                className="w-full h-48 object-cover" 
                            />
                            <button
                                className="absolute top-2 right-2 text-white hover:text-[#f5f5dc] transition-colors duration-300 bg-[#4a3728] rounded-full p-1"
                                onClick={toggleModal}
                            >
                                <AiOutlineClose size={24} />
                            </button>
                        </div>
                        <div className="p-6 bg-[#d9c49a]">
                            <h2 className="text-2xl font-bold text-[#4a3728] mb-2">Exclusive Coffee Lover's Offer!</h2>
                            <p className="text-lg text-[#2c1f1a] mb-4">Indulge in premium brews & save big!</p>
                            <ul className="list-none space-y-2 text-[#4a3728] mb-4">
                                <li className="flex items-center"><FaCoffee className="mr-2" /> 50% off your first month's subscription</li>
                                <li className="flex items-center"><FaGift className="mr-2" /> Free artisan coffee mug with sign-up</li>
                                <li className="flex items-center"><FaCoffee className="mr-2" /> Access to exclusive limited edition blends</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-lg font-semibold text-[#4a3728]">Hurry! Offer ends in:</p>
                                <div className="text-2xl font-bold text-[#8b4513]">{formatTime(countdown)}</div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <button 
                                    className="flex-1 bg-[#f5f5dc] text-[#4a3728] px-4 py-2 rounded-full shadow-md hover:bg-[#e6e6c4] transition-colors duration-300 font-semibold"
                                    onClick={toggleModal}
                                >
                                    No Thanks
                                </button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 bg-[#8b4513] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#693610] transition-colors duration-300 font-semibold"
                                    onClick={() => {
                                        // Handle subscription logic here
                                        console.log("User subscribed!");
                                        toggleModal();
                                    }}
                                >
                                    Take Me There!
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;