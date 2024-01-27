import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);

  return (
    <CartContext.Provider
      value={{
        CartItem,
        setCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
