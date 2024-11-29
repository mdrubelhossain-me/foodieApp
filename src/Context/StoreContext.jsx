// StoreContext.js
import React, { createContext, useState } from "react";
import { foodList } from "../assets/assets";

// Creating a context for global state
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cart, setCart] = useState({});

  // Function to add an item to the cart
  const addToCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id]) {
        newCart[id] += 1; // Increment quantity if item already in cart
      } else {
        newCart[id] = 1; // Add item with a quantity of 1 if new
      }
      return newCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id] > 1) {
        newCart[id] -= 1; // Decrement quantity if more than 1
      } else {
        delete newCart[id]; // Remove item from cart if quantity is 1
      }
      return newCart;
    });
  };
  

  const contextValue = {
    foodList,
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
