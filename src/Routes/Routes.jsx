import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import About from "../components/About";
import Cart from "../components/Cart";
import Favorites from "../components/Favorites";
import PhoneDeatails from "../components/PhoneDeatails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("phones.json"),
      },
      { path: "about", Component: About },
      { path: "cart", Component: Cart },
      { path: "favorites", Component: Favorites },
      { path: "phone-details", Component: PhoneDeatails },
    ],
  },
]);
