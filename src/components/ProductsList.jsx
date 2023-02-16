import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Provider";
import ProductItems from "./ProductItems";

function ProductsList() {
  // const value = useContext(GlobalContext);
  const { products, disableBtn, itemInCart } = useContext(GlobalContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const items = products.slice(0, 8);
    setAllProducts(items);
  }, [products]);

  //console.log(itemInCart);
  //console.log(products);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((items) => (
            <ProductItems products={items} key={items.id} />
          ))}
        </ul>
        <Link
          to="/shop"
          className="group relative flex justify-center items-center overflow-hidden rounded bg-[#1f2938] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#1f2938] my-[4rem]"
        >
          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:mr-4">
            View More Products
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ProductsList;
