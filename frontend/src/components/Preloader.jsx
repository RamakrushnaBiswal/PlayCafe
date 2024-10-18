import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  // Simulate loading completion and faster percentage increment
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setLoading(false), 600); // Keep loading state true for the exit animation duration
          return 100;
        }
        return prev + 1; // Increment percentage by 1 for a longer load time
      });
    }, 15); // Adjusted interval for a smoother, slower progression

    return () => clearInterval(loadingInterval);
  }, []);

  // Skill Animation Variants

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1] }}
            className="fixed top-0 left-0 w-full h-full bg-black z-[100] flex items-center justify-center overflow-hidden"
          >
            {/* Skills Section in the Middle */}

            {/* Loading Percentage (aligned above the bar, right side) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute bottom-16 right-12 text-white text-8xl sm:text-9xl font-bold"
            >
              {percentage}
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              exit={{ width: 0 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
              className="absolute bottom-10 left-0 h-1 bg-amber-100 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Preloader;
