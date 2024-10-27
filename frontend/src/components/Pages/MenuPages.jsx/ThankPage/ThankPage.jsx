import logo from '../../../../assets/Logo/logo.png'; // Update the path to your logo image

const ThankPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-secondary text-center p-8">
      <div className="relative w-full h-full flex items-center justify-center">
        <h1 className="md:hidden block z-10 -mt-60 text-6xl font-bold text-black/80">
          Thank You!
        </h1>
        <img
          src={logo}
          alt="Sip&Play Cafe Logo"
          loading="lazy"
          className="md:hidden block absolute w-3/4 h-3/4 -mt-44 items-center object-contain opacity-[0.5]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="hidden md:block relative z-10 space-y-8 bg-amber-100  p-8 -mt-20 rounded-lg shadow-lg max-w-lg mx-auto">
          <img
            src={logo}
            alt="Sip&Play Cafe Logo"
            loading="lazy"
            className="absolute w-3/4 h-3/4 object-contain opacity-[0.1]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <h1 className="text-6xl font-bold text-black/80">Thank You!</h1>
          <p className="text-lg text-black/75">
            We appreciate your visit to Sip&Play Cafe. Your support means the
            world to us. We hope you enjoyed your time here, indulging in our
            specialty drinks and fun board games.
          </p>
          <p className="text-lg text-black/75">
            Stay tuned for our upcoming events and new menu items. We look
            forward to serving you again soon!
          </p>
          <p className="text-lg text-black/75">
            Follow us on social media to keep up with the latest updates and
            offers.
          </p>
          <p className="text-lg text-black/75">Cheers,</p>
          <p className="text-lg font-bold text-black/80">
            The Sip&Play Cafe Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankPage;
