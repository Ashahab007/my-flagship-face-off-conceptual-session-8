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
        // show suspense using hydrateFallbackElement
        hydrateFallbackElement: <p>Loading, Please Wait . . .</p>,
        Component: Home,
        loader: () => fetch("../phones.json"), //here ../ is used because it's not api. it's a fake data. in case of api avoid "../".
      },
      { path: "about", Component: About },
      { path: "cart", Component: Cart },
      { path: "favorites", Component: Favorites },
      {
        // 3.0 make the path dynamic
        path: "phone-details/:id",
        // 3.1 getting phone details
        loader: () => fetch("../phones.json"),
        Component: PhoneDeatails,
      },
    ],
  },
]);
