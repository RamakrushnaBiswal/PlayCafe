import React from 'react';
import Content from './Content';

const Footer = () => {
  return (
    <footer
      className="relative h-[800px] max-sm:h-[600px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="max-sm:absolute max-sm:inset-0 max-sm:top-0 max-sm:h-[600px] relative h-[calc(100vh+800px)] -top-[100vh] ">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <Content />
        </div>
      </div>
    </footer>

  );
};

export default Footer;
