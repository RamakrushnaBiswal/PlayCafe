import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const MainHOC = (WrappedComponent) => {
  return (props) => (
    <AnimatePresence mode="wait">
      <motion.div
        key="animated-component"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainHOC;
