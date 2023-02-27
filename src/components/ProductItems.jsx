import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Provider";

function ProductItems({ products }) {
  const { addToCart, removeFromCart } = useContext(GlobalContext);

  useEffect(() => {}, [removeFromCart]);
  //console.log(products);
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-3">
      <Link
        to={`/product/${products.id}`}
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${products.imageUrl})`,
        }}
      ></Link>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {products.title}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            ${products.price}
          </span>
          <button
            className={`px-3 py-2  font-semibold text-[13px] text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none ${
              products.inStock
                ? ""
                : "bg-gray-500 cursor-not-allowed focus:pointer-events-none "
            }`}
            onClick={() => addToCart(products)}
          >
            {products.inStock ? "Add to cart" : "item in cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
