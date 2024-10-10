import tender from '../../../../assets/Menu_assets/tender.png';

const cafeStyle = {
  backgroundImage: `url(${tender})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  minHeight: '50vh',
  opacity: '0.12',
  width: '100%',
};

const FourthPage = () => {
  return (
    <div className="h-full">
      <div
        style={cafeStyle}
        className="h-full absolute inset-0 md:min-h-100vh"
      ></div>
      <main className="h-full w-full bg-secondary page-shadow relative z-10 md:p-10 p-3 ">
        <div className="md:space-y-4 space-y-0">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-bold text-gray-900">
              HOT BITES
            </h1>
            <p className="text-gray-600 text-xs md:text-[16px]">
              Spice up your day with our sizzling hot bites!
            </p>
          </div>

          <div className="p-1 flex flex-row  items-center justify-center gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Chicken Poppers
                  </h2>
                  <p className="text-xs md:text-[16px]">$6.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Mozz Sticks
                  </h2>
                  <p className="text-xs md:text-[16px]">$7.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Pigs in a Blanket
                  </h2>
                  <p className="text-xs md:text-[16px]">$7.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Tater Tots
                  </h2>
                  <p className="text-xs md:text-[16px]">$5.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Chicken Tenders
                  </h2>
                  <p className="text-xs md:text-[16px]">$8.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Onion Rings
                  </h2>
                  <p className="text-xs md:text-[16px]">$5.00</p>
                </div>
              </div>

              <div className="md:flex hidden justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">Fries</h2>
                  <p className="text-xs md:text-[16px]">$5.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Sweet Potato Fries
                  </h2>
                  <p className="text-xs md:text-[16px]">$6.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FourthPage;
