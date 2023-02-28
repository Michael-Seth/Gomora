import React from "react";

function CTA() {
  return (
    <div className="dark">
      <section className="bg-white my-12 dark:bg-gray-900">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Join us and get updates on our latest collections
          </h2>

          <div className="mt-8 lg:mt-0">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
              />

              <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Subscribe
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
              Attention! Offer expires in 30 days. <br /> Make sure not to miss
              this opportunity
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
