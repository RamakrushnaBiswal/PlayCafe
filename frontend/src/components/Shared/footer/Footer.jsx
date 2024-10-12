import React from 'react';
import Content from './Content';

const Footer = () => {
  return (
    <footer
      className="relative"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
        height: '600px',
      }}
    >
      <div
        className="relative h-[600px]"
        style={{
          height: '600px',
          '@media (max-width: 768px)': {
            height: '400px', 
            clipPath: 'none', 
          },
        }}
      >
        <div className="sticky bottom-0 h-full">
          <Content />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
