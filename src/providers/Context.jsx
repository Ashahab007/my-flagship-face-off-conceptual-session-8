// 10.0 as my condition is to update the cart in NavBar by clicking on PhoneDetails shopping cart. But there is no relation with PhoneDetails with navbar shopping cart. In that case we use context API. First, Created a folder name providers in src folder. Then created a Context.jsx and CartProvider.jsx file.

import { createContext } from "react";
// 10.1 now call the createContext from react and assign in a variable CartContext which will be capital form like following. We can make multiple context here in this page.

export const CartContext = createContext();
