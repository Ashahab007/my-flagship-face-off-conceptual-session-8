import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";

import { RouterProvider } from "react-router";
import CartProvider from "./providers/CartProvider";

createRoot(document.getElementById("root")).render(
  // 10.6 as per context api theory the CartProvider should set in those position which will wrap all the children. Here the RouterProvider is wrapped with CartProvider
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </StrictMode>
);
