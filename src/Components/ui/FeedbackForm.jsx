import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import chess from "../../assets/img/chess.gif";

const FeedbackForm = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Feedback: ${feedback}`);
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setFeedback("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="dark:bg-dark-bg dark:text-dark-text">
    <div className="bg-amber-100 dark:bg-dark-bg h-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          className="lg:grid lg:grid-cols-2 lg:gap-8"
        >
          <div className="mb-8 lg:mb-0 relative">
            <h2 className="text-3xl  font-extrabold text-[#004D43] dark:text-[#4FF0D4] sm:text-4xl">
              We Value Your Feedback
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-[#929599] pb-3">
              Your thoughts help us improve. Share your experience and
              suggestions with us!
            </p>
            <div className="flex   md:h-[50vh] md:w-[70vh] item-center justify-center  ">
              <img
                src={chess}
                alt="Chess"
                className="md:p-10 p-5 object-contain bg-[#004D43] rounded-full shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-[#004D43] dark:text-[#4FF0D4]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43] dark:bg-[#fff] dark:text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-[#004D43] dark:text-[#4FF0D4]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43] dark:bg-[#fff] dark:text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-lg font-medium text-[#004D43] dark:text-[#4FF0D4]"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43] dark:bg-[#fff] dark:text-black"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#004D43] hover:bg-[#003d35] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D43] "
                >
                  Submit Feedback
                </button>
              </div>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded"
              >
                Thank you for your feedback!
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default FeedbackForm;
