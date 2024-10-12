import bubbleTea from '../../../../assets/Menu_assets/boba.png';
import bubbleTea2 from '../../../../assets/Menu_assets/boba2.png';
import cafe from '../../../../assets/Menu_assets/cafe.png';
const cafeStyle = {
  backgroundImage: `url(${cafe})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  minHeight: '50vh',
  opacity: '0.17',
  width: '100%',
};

const ThirdPage = () => {
  return (
    <div className="h-full">
      <div
        style={cafeStyle}
        className="h-full absolute inset-0 md:min-h-100vh"
      ></div>
      <main className="h-full w-full bg-secondary page-shadow md:p-10 p-4">
        <div className="md:space-y-4 space-y-0">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-bold text-gray-900">
              THE OG
            </h1>
            <p className="text-gray-600 md:text-[16px] text-xs">
              Bad day? Have a boba.
            </p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="md:space-y-2 w-1/2 space-y-0">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Classic Milk Tea
                  </h2>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Medium: $4.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Large: $5.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs md:block hidden">
                    Hot: $5.25
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:md:text-xl text-xs font-semibold">
                    Brown Sugar Boba
                  </h2>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Medium: $4.75
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Large: $5.75
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Hot: $5.75
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs md:block hidden">
                    Caffeine free
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Taro Boba Coconut Boba
                  </h2>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Medium: $4.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Large: $5.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Hot: $5.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs md:block hidden">
                    Caffeine free, dairy free
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Fruit Green/Black Tea
                  </h2>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Medium: $4.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Large: $5.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs z-10 md:block hidden">
                    Comes in a variety of flavors:
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs z-10 md:block hidden">
                    mango/strawberry/passionfruit/peach/ apple/lychee/kiwi
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Jasmine Milk Tea Wintermelon Milk Tea
                  </h2>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Medium: $4.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Large: $5.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    Hot: $5.25
                  </p>
                  <p className="text-gray-600 md:text-[16px] text-xs">
                    {' '}
                    Dairy free
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold bg-green-200 rounded-md px-2">
                    Toppings +$0.50
                  </h2>
                  <p className="text-gray-600 md:text-[16px] text-xs md:block hidden">
                    Tapioca pearls, lychee jelly, mixed jelly, grass jelly, pop
                    strawberry, pop passionfruit, mango stars
                  </p>
                </div>
              </div>

              <div className="flex justify-center ">
                <img
                  src={bubbleTea}
                  className="md:h-40 md:w-50 h-20 w-20 object-contain"
                  alt="Bubble Tea"
                  loading="lazy"
                />
                <img
                  src={bubbleTea2}
                  className="md:h-40 md:w-50 h-20 w-20 object-contain"
                  alt="Bubble Tea"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThirdPage;
