import React from "react";

function CTA() {
  return (
    <div className="my-10 mx-auto flex max-w-xl flex-col rounded-xl border bg-gray-700 py-10 px-4 text-center sm:px-10 lg:max-w-screen-lg lg:flex-row lg:text-left">
      <div className="mx-auto w-[15rem] max-w-full lg:mx-0 lg:w-[40rem]">
        <img
          className="h-full w-full object-contain"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/4fa0e724015357.5632ca672052c.png"
          alt=""
        />
      </div>
      <div className="lg:pl-10">
        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl md:leading-snug">
          Startup Branding <br className="hidden sm:block" />
          In a Nutshell
        </h1>
        <p className="mt-4 text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          numquam qui ratione. Ullam excepturi repellendus obcaecati recusandae
          laudantium!
        </p>
        <div className="mt-8 flex flex-col rounded-md border bg-white sm:flex-row">
          <input
            className="m-2 h-12 rounded-md px-4 text-gray-500 focus:outline-none focus:ring focus:ring-red-400 sm:w-full"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
          <button className="m-2 shrink-0 rounded-md bg-red-600 px-8 py-3 font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none">
            Get Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
