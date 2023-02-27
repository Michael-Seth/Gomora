import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Provider";
import useLocalStorage from "../hooks/useLocalStorage";
import CartItem from "./CartItem";

function Cart({ handleCart }) {
  const {
    cart,
    increaseCartQuantity,
    cartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [cartTotal, setCartTotal] = useLocalStorage("subTotal", 0);
  //const [itemQuantity, setItemQuantity] = useLocalStorage("itemQuantity", 1);
  // console.log(cartTotal);

  // const quantityRef = useRef(1);
  useEffect(() => {
    const submitCart = () => {
      let sum = 0;
      cart.forEach((cartPrice) => {
        sum += cartPrice.totalPrice;
        Math.ceil(sum);
        setCartTotal(sum);
        //console.log(cartPrice.price);
      });
      //handleCart();
    };
    submitCart();
    cartQuantity();
    //increaseCartQuantity();
    //decreaseCartQuantity();
  }, [cart, increaseCartQuantity, decreaseCartQuantity]);

  return (
    <>
      <section
        className="bg-[#000000c9] fixed z-20 top-5 right-0 h-screen w-full"
        // onClick={handleCart}
      >
        <div
          className="w-screen absolute opacity-100 right-[2.5rem] top-[3.8rem] z-50 max-w-[40rem] p-8 pt-4 bg-gray-100 border border-gray-600"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Cart</h1>
          </div>

          {cart.length >= 1 ? (
            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
              <div className="bg-white shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flow-root">
                    <ul className="-my-8">
                      {cart.map((cartItem) => {
                        return (
                          <CartItem key={cartItem.id} cartItem={cartItem} />
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
                      <p className="text-lg font-semibold text-gray-900">
                        Free
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      <span className="text-xs font-bold text-gray-9x00">
                        $
                      </span>{" "}
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
          ) : (
            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
              <div className="bg-white shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <h3 className="text-center">😔 Your Cart Is Empty</h3>
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      onClick={handleCart}
                      className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      Continue Shopping
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
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
