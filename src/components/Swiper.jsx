import React from "react";
import Hero from "../assets/images/gomora-image.png";

function Swiper() {
  return (
    <div>
      <div className="lg:bg-[linear-gradient(90deg,_white_70%,_pink_70%)]">
        <div className="mx-auto mt-20 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            {/* <div className="lg:max-w-lg lg:pr-5">
              <div className="max-w-xl">
                <h2 className="mb-6 max-w-lg text-3xl leading-snug tracking-tight text-blue-600 sm:text-5xl sm:leading-snug">
                  <span className="my-1 inline-block font-serif font-bold text-blue-600">
                    Learning model
                  </span>
                  of the future
                </h2>
                <p className="text-base text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque it.
                </p>
                <div className="mt-8 sm:flex space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="relative overflow-hidden rounded-xl border-4 border-blue-600 bg-white shadow">
                    <div className="py-10 px-6">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          328
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          Great Achievements
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl border-4 border-blue-600 bg-white shadow">
                    <div className="py-10 px-6">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          16
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          Graduations sponsored
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">
                <h2 className="mb-6 max-w-lg text-[4rem] font-light leading-snug tracking-tight text-blue-600 sm:text-8xl">
                  Shop Now <br />
                  <span className="my-1 inline-block border-b-8 border-blue-600 font-bold text-blue-600">
                    {" "}
                    Smile Later!{" "}
                  </span>
                </h2>
                <p className="text-[1.2rem] text-gray-700">
                  Shop smarter, not harder - with our top quality store items
                  and our unbeatable prices.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800"
                >
                  Get Started
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="underline-offset-2 inline-flex items-center font-semibold text-blue-600 underline transition-colors duration-200 hover:underline"
                >
                  Watch how it works
                </a>
              </div>
            </div>
            <div className="relative text-blue-600 lg:ml-32 lg:w-1/2 hidden lg:block">
              <div className="border-b-8 border-b-blue-600 max-w-lg mx-auto mb-10">
                <img
                  className="w-full h-full object-contain"
                  src={Hero}
                  alt="hero-bg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
