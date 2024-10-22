/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import chess from '../../assets/img/chess.gif';
import { FaStar } from 'react-icons/fa6';

const ContactUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Use an environment variable for backend URL
  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hover, setHover] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation for security
    if (!mail || !subject || !message) {
      setError('All fields are required, including the rating.');
      return;
    }

    // Clear any previous errors
    setError(null);

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/contact/contactus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail, subject, message }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setMail('');
        setSubject('');
        setMessage('');
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setError('An error occurred while sending Mail...');
      console.error('Mail sending failed : ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-amber-100 h-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div className="mt-8 mb-8 lg:mb-0 relative">
            <h2 className="text-5xl font-black text-[#004D43]">
              Feel Free To Mail Us..
            </h2>
            <p className="mt-5 text-lg text-gray-700 pb-3">
              Have questions or need assistance ? Reach out to us, and we'll be
              happy to help !!
            </p>
            <div className="flex md:h-[40vh] md:w-[60vh] ml-20 mt-20 items-center justify-center mt-12">
              <img
                src={chess}
                alt="Chess"
                loading="lazy"
                className="md:p-10 p-5 object-contain bg-[#004D43] rounded-full shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-[#004D43] rounded-xl p-3 pt-4 mt-40 h-fit">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="mail"
                  value={mail}
                  placeholder="Email ID"
                  onChange={(e) => setMail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43] resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#09342e] hover:bg-[#072d28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D43]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Mail'}
                </button>
              </div>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10, display: 'none', height: 0 }}
                animate={{ opacity: 1, y: 0, display: 'block', height: 'auto' }}
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded"
              >
                Thank you, We will reply you soon...
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
              >
                {error}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
