import lemonade from '../../../../assets/Menu_assets/lemonade.png';

const lemonadeStyle = {
  backgroundImage: `url(${lemonade})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  minHeight: '50vh',
  opacity: '0.09',
  width: '100%',
};

const SixthPage = () => {
  return (
    <div className="h-full">
      <div
        style={lemonadeStyle}
        className="h-full absolute inset-0 md:min-h-100vh"
      ></div>
      <main className="h-full w-full bg-secondary page-shadow relative z-10 md:p-10 p-2">
        <div className="md:space-y-2 space-y-0">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-bold text-gray-900">
              SEASONAL MENU
            </h1>
            <p className="text-gray-600 text-xs md:text-[16px]">
              A salad is not a meal, it is a style.
            </p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Pina Colada
                  </h2>
                  <p className="text-xs md:text-[16px]">Medium: $4.75</p>
                  <p className="text-xs md:text-[16px]">Large: $5.75</p>
                  <p className="text-xs md:text-[16px] md:block hidden">
                    Our coconut boba with pineapple flavor!
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    MATCHA LEMONADE
                  </h2>
                  <p className="text-xs md:text-[16px]">Medium: $5.00</p>
                  <p className="text-xs md:text-[16px]">Large: $6.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">YUZU-ADE</h2>
                  <p className="text-xs md:text-[16px]">Large: $5.25</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    FRESHLY SQUEEZED LEMONADE
                  </h2>
                  <p className="text-xs md:text-[16px]">Medium: $4.00</p>
                  <p className="text-xs md:text-[16px]">Large: $5.00</p>
                  <p className="text-xs md:text-[16px] md:block hidden">
                    Real lemons with our signature recipe = amazing lemonade
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Berry Lavender Lemonade
                  </h2>
                  <p className="text-xs md:text-[16px]">Medium: $5.25</p>
                  <p className="text-xs md:text-[16px]">Large: $6.25</p>
                  <p className="text-xs md:text-[16px] md:block hidden">
                    Made with real bourbon and definitely the drink we&apos;re
                    most excited for this fall.
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Citrus Boba (Grapefruit or Orange)
                  </h2>
                  <p className="text-xs md:text-[16px]">Large: $6.00</p>
                  <p className="text-xs md:text-[16px] md:block hidden  ">
                    Made with real fruit juice and fruit slices!
                  </p>
                </div>
              </div>

              <div className="hidden md:flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold md:bg-blue-100 md:p-2 md:mb-4 md:rounded-lg">
                    ROTATING BEER/WINE PROGRAM
                  </h2>
                  <p className="text-xs md:text-[16px] md:bg-amber-200 md:px-6 md:py-4 md:rounded-full">
                    Check out our beer and wine at the front of our store!
                    We&apos;re constantly rotating out product from local
                    breweries!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SixthPage;
