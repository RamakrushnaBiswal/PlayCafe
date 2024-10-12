import React from 'react';
import Content from './Content';

const Footer = () => {
  return (
    // Footer element that serves as the main container
    // The 'relative' positioning ensures we can control its child elements' positioning
    // The clipPath is applied to give the footer a custom polygon shape
    <footer
      className="relative"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)', height: '600px' }} // Footer is 600px tall
    >
      {/* Inner div that holds the sticky content. We match the height of the footer for this element. */}
      <div className="relative h-[600px]">
        {/* Sticky div that remains stuck at the bottom of the viewport */}
        {/* 'sticky' makes the content remain fixed until scrolled past the footer */}
        {/* 'bottom-0' ensures it sticks to the bottom of the screen when scrolling */}
        <div className="sticky bottom-0 h-full">
          {/* Content component rendered inside the sticky footer. This could be text, links, etc. */}
          <Content />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
