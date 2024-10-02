import React from "react";
import Content from "./Content";

const Footer = () => {
  return (
    <footer
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <Content />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
