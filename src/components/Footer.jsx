import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Gomora.svg";
import cards from "../assets/images/Payment display card.png";

function Footer() {
  return (
    <>
      {" "}
      <footer className="bg-gray-100 pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
          <div className="col-span-1 space-y-8">
            <img src={logo} alt="Logo" className="w-24" />
            <div className="mr-2">
              <p className="text-gray-500">
                Gomora is an e-commerce store that specializes in selling unisex
                clothings. Built using ReactJS, Tailwind CSS, NodeJs and MongDB,
                it offers a modern, user-friendly shopping experience for
                customers.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-facebook-square"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-instagram-square"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-twitter-square"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-github-square"></i>
              </Link>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Store Links
                </h3>
                <div className="mt-4 font-medium space-y-4">
                  <Link
                    to="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    About
                  </Link>
                  <Link
                    to="/shop"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contact"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    to="/privacy"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/terms"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">
            &copy; Michael - Osas - All Right Reserved
          </p>
          <div>
            <img src={cards} alt="payment-methods" className="h-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
