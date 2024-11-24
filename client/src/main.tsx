import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouterLayout from "./RouterLayout/RouterLayout.tsx";
import Product from "./pages/Product.tsx";
import Category from "./pages/Category.tsx";
// import Profile from "./pages/Profile.tsx";
import Cart from "./pages/Cart.tsx";
import Favorite from "./pages/Favorite.tsx";
import Orders from "./pages/Orders.tsx";
import Success from "./pages/Success.tsx";
import Cancel from "./pages/Cancel.tsx";
import Blog from "./pages/Blog.tsx";
import NotFound from "./pages/NotFound.tsx";
import App from "./App.tsx";
import SignIn from "./pages/Sign-In.tsx";

import "./index.css";

// Defining all the paths/routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
