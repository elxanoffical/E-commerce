import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ListingPage from "../pages/listing";
import Details from "../components/details";
import Reviews from "../components/reviews";
import MainLayout from "../layout/mainLayout";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import ProductDetail from "../pages/productDetail";
import About from "../pages/about";
import MyBasket from "../pages/basket";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/categories",
        element: <ListingPage />,
      },
      {
        path: "/basket",
        element: <MyBasket />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signUp',
        element: <SignUp/>
      },
      {
        path: "/products/:documentId",
        element: <ProductDetail />,
        children: [
          {
            index: true,
            element: <Details />,
          },
          {
            path: "details",
            element: <Details />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
         
        ],
      },
    ],
  },
]);
