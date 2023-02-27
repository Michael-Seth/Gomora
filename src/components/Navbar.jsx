import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/Gomora.svg";
import { GlobalContext } from "../GlobalContext/Provider";
import Cart from "./Cart";

function Navbar() {
  const { cart } = useContext(GlobalContext);
  //const [isFixed, setIsFixed] = useState(false);
  const [cartItems, setCartItems] = useState(false);
  const handleCart = () => {
    setCartItems(!cartItems);
  };

  return (
    <>
      {" "}
      <header className="bg-white dark:bg-gray-900 fixed top-0 w-full z-30 ">
        <nav
          x-data="{ isOpen: false }"
          className="relative bg-white shadow dark:bg-gray-800"
        >
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <a href="#">
                <img className="w-[90px]" src={logo} alt="logo" />
              </a>

              <div className="flex lg:hidden">
                <button
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div className="flex flex-col md:flex-row md:mx-6 font-semibold capitalize text-[14px]">
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Shop
                </a>
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  About
                </a>

                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Get Started
                </a>
              </div>

              <div className="flex justify-center md:block">
                <div
                  className="relative text-gray-700 transition-colors cursor-pointer duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={handleCart}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span
                    style={{
                      top: "-.7rem",
                      right: "-.5rem",
                      width: "1rem",
                      height: "1rem",
                    }}
                    className="absolute text-center p-1 text-os text-white bg-blue-500 rounded-full"
                  >
                    {cart?.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {cartItems && <Cart handleCart={handleCart} />}
      <br /> <br />
    </>
  );
}

export default Navbar;
