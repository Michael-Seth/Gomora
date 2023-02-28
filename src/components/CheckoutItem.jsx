import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext/Provider";

function CheckoutItem({ checkoutItem, index }) {
  const {
    increaseCartQuantity,
    cartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(1);

  //console.log(checkoutItem);

  useEffect(() => {
    setQuantity(cartQuantity(checkoutItem.id));
  }, [cartQuantity, increaseCartQuantity, decreaseCartQuantity]);

  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <h3 className="font-semibold mt-2 mr-2">{index + 1}.</h3>
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={checkoutItem.imageUrl}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{checkoutItem.title}</span>
        <span className="float-right my-2 text-[0.9rem] text-gray-600">
          <span className="font-semibold text-gray-800 ">Quantity</span> -{" "}
          {checkoutItem.quantity}
        </span>
        <p className="text-lg font-bold">${checkoutItem.totalPrice}</p>
      </div>
    </div>
  );
}

export default CheckoutItem;
