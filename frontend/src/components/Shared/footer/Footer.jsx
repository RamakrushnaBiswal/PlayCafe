import Content from "./Content";

const Footer = () => {
  return (
    <footer >
      <div className="bottom-0">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <Content />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
