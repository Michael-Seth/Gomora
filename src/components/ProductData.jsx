import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Provider";

function ProductData() {
  const params = useParams();
  const { singleProduct, getSingleProduct, addToCart } =
    useContext(GlobalContext);
  const [product, setProduct] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getSingleProduct(params.id);
    setProduct({ ...singleProduct });
  }, [getSingleProduct]);

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  // };
  //console.log(product);

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt="Tee"
                src={product?.imageUrl}
                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
              />

              <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>

                {/* <span className="ml-1.5 text-xs"> Hover to zoom </span> */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl mt-8 font-bold lg:text-4xl">
                {product?.title}
              </h2>
            </div>
          </div>

          <div className="lg:sticky lg:top-0">
            <form className="space-y-4 lg:pt-8">
              <fieldset>
                <legend className="text-lg font-bold">Size</legend>

                <div className="mt-2 flex gap-1">
                  {/* <label for="material_cotton" className="cursor-pointer">
                    {product?.size.map((sizes, index) => {
                      return (
                        <>
                          <input
                            key={index}
                            type="radio"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            name="material"
                            className="peer sr-only"
                          />
                          <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                            {sizes}
                          </span>
                        </>
                      );
                    })}
                  </label> */}

                  <label htmlFor="material_wool" className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_wool"
                      name="material"
                      className="peer sr-only"
                    />

                    <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Medium
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* <div className="rounded border bg-gray-100 p-4">
                <p className="text-sm">
                  <span className="block">
                    Pay as low as $3/mo with 0% APR.{" "}
                  </span>

                  <a href="" className="mt-1 inline-block underline">
                    {" "}
                    Find out more{" "}
                  </a>
                </p>
              </div> */}

              <div>
                <p className="text-xl font-bold">${product?.price}</p>
              </div>

              <button
                type="submit"
                className={`w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white ${
                  product?.inStock
                    ? ""
                    : "bg-red-400 cursor-not-allowed focus:pointer-events-none "
                }`}
                onClick={() => addToCart(product)}
              >
                {product.inStock ? "Add to cart" : "item in cart"}
              </button>
              <button
                type="submit"
                className={`w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white`}
                onClick={addToCart}
              >
                Buy Now
              </button>

              {/* <button
                type="button"
                className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Notify when on sale
              </button> */}
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none [&>iframe]:mt-2 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <strong>
                <small>Description</small>
              </strong>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductData;
