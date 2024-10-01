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
    <div className="px-16 bg-amber-100 py-16 flex items-center justify-between w-screen">
      <motion.div
        ref={ref}
        initial="hidden"
        variants={animationVariants}
        animate={inView ? "visible" : "hidden"}
        className="flex flex-row w-full gap-32 items-center justify-between"
      >
        <div className="lg:mb-0 relative w-1/2">
          <h2 className="text-3xl  font-extrabold text-[#004D43] sm:text-4xl">
            We Value Your Feedback
          </h2>
          <p className="text-lg text-gray-700 pb-3">
            Your thoughts help us improve. Share your experience and suggestions
            with us!
          </p>
          <div className="flex md:h-[50vh] md:w-[70vh] item-center justify-center">
            <img
              src={chess}
              alt="Chess"
              className="md:p-10 p-5 object-contain bg-[#004D43] rounded-full shadow-2xl"
            />
          </div>
        </div>

        <div className="lg:mt-0 w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#004D43]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#004D43]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
              />
            </div>
            <div>
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-[#004D43]"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#004D43] hover:bg-[#003d35] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D43]"
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
  );
};

export default FeedbackForm;
