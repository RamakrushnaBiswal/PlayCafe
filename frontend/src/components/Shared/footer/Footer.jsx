import Content from './Content';

const Footer = () => {
  return (
    <footer
      className="h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh] bg-amber-100 dark:bg-black mb-4 pb-10 sm:pb-16">
        <div className="h-[60px] md:h-[1px] sticky top-[calc(130vh-600px)]">
          <Content />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
