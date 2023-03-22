import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import StoreData from "./data";
import axios from "axios";


export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [products, setProducts, clearProducts] = useLocalStorage(
    "storeData",
    StoreData
  );

  const [cart, setCart, clearCart] = useLocalStorage("cart", []);
  const [singleProduct, setSingleProduct] = useState({});
  const [cartTotal, setCartTotal] = useLocalStorage("subTotal", 0);

  const addToCart = (item) => {
    manageCart(item);
    console.log(cart);
  };

  useEffect(() => {
    //manageCart();
  }, [cart, products, addToCart]);

  //console.log(products);

  // const manageCart = (item) => {
  //   if (item.inStock) {
  //     item.inStock = false;
  //     const newItem = { ...item, quantity: 1, totalPrice: item.price };
  //     setCart([newItem, ...cart]);
  //     setProducts((prevState) => [...prevState, item]);
  //     //console.log(products);
  //   }
  // };
  const manageCart = (item) => {
    if (item.inStock) {
      item.inStock = false;
        const newItem = { ...item, quantity: 1, totalPrice: item.price };
      setCart([newItem, ...cart]);
      setProducts((prevState) => {
        const index = prevState.findIndex((i) => i.id === item.id);
        if (index === -1) {
          return prevState; // item not found, return previous state
        } else {
          const updatedProducts = [...prevState];
          updatedProducts[index] = item;
          console.log(updatedProducts);
          return updatedProducts;
        }
      });
    }
  };

  const getSingleProduct = (productId) => {
    const product = products.find(
      (product) => product.id === Number(productId)
    );
    setSingleProduct(product);
  };

  const cartQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 1;
  };

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

  const increaseCartQuantity = (id, price) => {
    setCart((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        // If the item doesn't exist in the cart, add it with a quantity of 1 and total price equal to the item price
        return [...currentItems, { id, quantity: 1, totalPrice: price }];
      } else {
        // If the item already exists in the cart, update its quantity and total price
        const updatedItems = currentItems.map((item, index) => {
          if (index === itemIndex) {
            const updatedQuantity = item.quantity + 1;
            const updatedTotalPrice = updatedQuantity * price;
            console.log(item);
            return {
              ...item,
              quantity: updatedQuantity,
              totalPrice: updatedTotalPrice,
            };
          } else {
            return item;
          }
        });
        return updatedItems;
      }
    });
  };

  const decreaseCartQuantity = (id, price) => {
    setCart((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        return currentItems;
      } else {
        const item = currentItems[itemIndex];
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity === 0) {
          return currentItems.filter((item, index) => index !== itemIndex);
        } else {
          const updatedTotalPrice = updatedQuantity * price;
          const updatedItem = {
            ...item,
            quantity: updatedQuantity,
            totalPrice: updatedTotalPrice,
          };
          const updatedItems = [...currentItems];
          updatedItems[itemIndex] = updatedItem;
          return updatedItems;
        }
      }
    });
  };

  // const removeFromCart = (id, price, quantity) => {
  //   setCart((currentItems) => {
  //     const itemIndex = currentItems.find((item) => item.id === id);
  //     console.log(itemIndex);
  //     if (itemIndex === -1) {
  //       return currentItems;
  //     } else {
  //       const updatedItems = currentItems.filter((item) => item.id !== id);
  //       console.log(updatedItems);
  //       const updatedTotalPrice = totalPrice - price * quantity;
  //       setTotalPrice(updatedTotalPrice);
  //       return updatedItems;
  //     }
  //   });
  // };

  const removeFromCart = (id) => {
    setCart((currentItems) => {
      const updatedItems = currentItems.filter((item) => item.id !== id);
      setProducts((prevState) => {
        const index = prevState.findIndex((i) => i.id === id);
        if (index === -1) {
          return prevState; // item not found, return previous state
        } else {
          const updatedProducts = [...prevState];
          updatedProducts[index] = { ...prevState[index], inStock: true };
          console.log(updatedProducts);
          return updatedProducts;
        }
      });
      console.log(products);
      return updatedItems;
    });
  };

  const registerUser = async (userData) => {
    setIsLoading(true);

    setResend(true);
    try {
      const resp = await axios.post("/users/register", {
        user: userData,
      });

      //please dont do the below. only for testing purpose
      if (resp.status === 201) {
        setResend(false);
        toast.success("Please Check Your Email For Token");
        setTimeout(() => {
          navigate("/verify");
        }, 1500);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    products,
    addToCart,
    cart,
    getSingleProduct,
    singleProduct,
    submitCart,
    cartTotal,
    cartQuantity,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
