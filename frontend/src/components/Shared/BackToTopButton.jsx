import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false); // To control button rendering

  // Show button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setShouldRender(true); // Start rendering the button
      setIsVisible(true); // Make it visible (for fade-in)
    } else {
      setIsVisible(false); // Hide button (fade-out)
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Remove the button from the DOM after fade-out animation ends
  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => setShouldRender(false), 500); // Match the animation duration
      return () => clearTimeout(timeout); // Clean up the timeout
    }
  }, [isVisible]);

  return (
    <>
      {shouldRender && (
        <button
          onClick={scrollToTop}
          className={`z-50 fixed bottom-20 right-5 bg-green-700 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isVisible ? 'animate-fadeInBounce' : 'animate-fadeOutBounce'
          }`}
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
