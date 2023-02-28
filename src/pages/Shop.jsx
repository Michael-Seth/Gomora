import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Provider";
import ProductItems from "../components/ProductItems";

function Shop() {
  // const value = useContext(GlobalContext);
  const { products, disableBtn, itemInCart } = useContext(GlobalContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const items = products;
    setAllProducts(items);
  }, [products]);

  //console.log(itemInCart);
  //console.log(products);

  return (
    <section>
      <div class="bg-whitea relative mx-auto mt-1 mb-10 overflow-hidden rounded-t-lg py-32 text-left shadow-lg">
        <p class="text-white">Published April 4, 2022</p>
        <h1 class="mt-2 text-5xl font-bold text-gray-800">
          7 rules of effective marketing
        </h1>
        <img
          class="-z-10 absolute top-0 left-0 mt-10 h-full w-full object-cover"
          src="https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005__340.jpg"
          alt=""
        />
      </div>

      <div className="max-w-screen-xl px-4 py-1 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((items) => (
            <ProductItems products={items} key={items.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Shop;
