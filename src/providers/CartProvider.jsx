import React, { useState } from "react";
import { CartContext } from "./Context";
// 10.2 create CartProvider as component

// 10.7 as all the component becomes children so receive the children
const CartProvider = ({ children }) => {
  // 10.4 Creating the cart that can access children
  const [cart, setCart] = useState([]);

  return (
    // 10.3 import the CartContext from Context.jsx and set here which will work as parent using .provider. Inside CartContext.Provider everything will be children. This children will access the cart.
    //   10.5 pass the cart in value named builtin props as object.
    <CartContext.Provider value={{ cart, setCart }}>
      {/* 10.8 apply the children. The concept is CartProvider takes receives the children by wrapping all the component from main.jsx file and now this children released the cart with the cart &setCart. Now all the children can access the value  */}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
