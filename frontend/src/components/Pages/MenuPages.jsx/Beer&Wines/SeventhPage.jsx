import wines from '../../../../assets/Menu_assets/wines.png';

const winesStyle = {
  backgroundImage: `url(${wines})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  minHeight: '50vh',
  opacity: '0.09',
  width: '100%',
};

const SeventhPage = () => {
  return (
    <div className="h-full">
      <div
        style={winesStyle}
        className="h-full absolute inset-0 md:min-h-100vh"
      ></div>
      <main className="h-full w-full bg-secondary page-shadow relative z-10 md:p-10 p-4">
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-bold text-gray-900">
              BEER/WINE
            </h1>
            <p className="text-gray-600 md:text-[16px] text-xs">
              Good beer and wine make life&apos;s moments memorable
            </p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Babe Rose
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Archer Roose White/Red
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Kona Lager
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Blue Point
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Juneshine
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Lunar Hard Seltzers
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Allagash White
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">
                    Doc Cider
                  </h2>
                </div>
              </div>

              <div className="md:flex hidden justify-between">
                <div>
                  <h2 className="md:text-xl text-xsfont-semibold">
                    Stella Artois
                  </h2>
                </div>
              </div>

              <div className="md:flex justify-between hidden">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">Shocktop</h2>
                </div>
              </div>

              <div className="md:flex hidden justify-between">
                <div>
                  <h2 className="md:text-xl text-xs font-semibold">Finback</h2>
                </div>
              </div>

              <div className="md:flex hidden justify-between">
                <div>
                  <h2 className="md:text-xl text-xsfont-semibold">
                    Three&apos;s Brewery
                  </h2>
                </div>
              </div>
            </div>

            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div className="bg-red-200 p-3 rounded-e-3xl text-center bg-opacity-25">
                  <h2 className="md:text-lg text-xs font-semibold bg-yellow-200 p-1 rounded-3xl">
                    ROTATING MENU
                  </h2>
                  <p className="md:text-[16px] text-xs">
                    Check out our rotating selection from local breweries!
                  </p>
                  <p className="md:text-[16px] text-xs">
                    (tall silver cans on our counter)
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

export default SeventhPage;
