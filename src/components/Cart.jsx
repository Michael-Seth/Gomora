import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Provider";
import useLocalStorage from "../hooks/useLocalStorage";

function Cart({ handleCart }) {
  const { cart, increaseCartQuantity, cartQuantity, decreaseCartQuantity } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const [cartTotal, setCartTotal] = useLocalStorage("subTotal", 0);
  const [itemQuantity, setItemQuantity] = useLocalStorage("itemQuantity", 1);
  // console.log(cartTotal);

  // const quantityRef = useRef(1);
  useEffect(() => {
    const submitCart = () => {
      let sum = 0;
      cart.forEach((cartPrice) => {
        sum += cartPrice.price;
        Math.ceil(sum);
        setCartTotal(sum);
        //console.log(cartPrice.price);
      });
      //handleCart();
    };
    submitCart();
  }, []);

  // const onMutate = (e) => {
  //   let boolean = null;
  //   if (e.target.value === "true") {
  //     boolean = true;
  //   }
  //   if (e.target.value === "false") {
  //     boolean = false;
  //   }
  //   //For files
  //   if (e.target.files) {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       images: e.target.files,
  //     }));
  //   }
  //   //For text/boolean/numbers
  //   if (!e.target.files) {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [e.target.id]: boolean ?? e.target.value,
  //     }));
  //   }
  // };
  return (
    <>
      <section className="bg-[#000000c9] fixed z-20 top-5 right-0 h-screen w-full">
        <div
          className="w-screen absolute opacity-100 right-[2.5rem] top-[2.8rem] z-50 max-w-[40rem] p-8 pt-4 bg-gray-100 border border-gray-600"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {cart.map((cartItem) => {
                      return (
                        <li
                          key={cartItem.id}
                          className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                        >
                          <div className="shrink-0">
                            <img
                              className="h-24 w-24 max-w-full rounded-lg object-cover"
                              src={cartItem.imageUrl}
                              alt=""
                            />
                          </div>

                          <div className="relative flex flex-1 flex-col justify-between">
                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div className="pr-8 sm:pr-5">
                                <p className="text-base font-semibold text-gray-900">
                                  {cartItem.title}
                                </p>
                                {/* <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p> */}
                              </div>

                              <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  ${cartItem.price}
                                </p>

                                <div className="sm:order-1">
                                  <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                    <button
                                      onClick={() =>
                                        increaseCartQuantity(cartItem.id)
                                      }
                                      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                    >
                                      -
                                    </button>
                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                      {itemQuantity}
                                    </div>
                                    <button
                                      onClick={() =>
                                        decreaseCartQuantity(cartItem.id)
                                      }
                                      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                              <button
                                type="button"
                                className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              >
                                <svg
                                  className="block h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    className=""
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${Math.ceil(cartTotal)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">Free</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-bold text-gray-9x00">$</span>{" "}
                    {Math.ceil(cartTotal)}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    //onClick={submitCart}
                    className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
