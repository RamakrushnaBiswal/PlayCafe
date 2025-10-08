import Content from './Content';

const Footer = () => {
  return (
    <footer
      className="h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh] bg-black text-white mb-4 pb-10 sm:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-10"></div>
        </div>
        <div className="h-[60px] md:h-[1px] sticky top-[calc(130vh-600px)]">
          <Content />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
