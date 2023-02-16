import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import StoreData from "./data";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [products, setProducts, clearProducts] = useLocalStorage(
    "storeData",
    StoreData
  );

  const [cart, setCart, clearCart] = useLocalStorage("cart", []);
  //const [cart, setCart] = useLocalStorage("shopping-cart",[]);
  const [itemInCart, setItemInCart] = useState({});
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    //manageCart();
  }, [cart, products]);

  const addToCart = (item) => {
    manageCart(item);
  };

  console.log(products);

  const manageCart = (item) => {
    if (item.inStock) {
      item.inStock = false;
      setCart([item, ...cart]);
      setProducts((prevState) => [...prevState, item]);
      //console.log(products);
    }
  };

  const getSingleProduct = (productId) => {
    const product = products.find(
      (product) => product.id === Number(productId)
    );
    setSingleProduct(product);
  };
const cartQuantity =()=>{

}
  const increaseCartQuantity = (id) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  const value = {
    products,
    addToCart,
    itemInCart,
    cart,
    getSingleProduct,
    singleProduct,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
