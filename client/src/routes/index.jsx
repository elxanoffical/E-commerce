import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ListingPage from "../pages/listing";
import ProductPage from "../pages/product";
import Details from "../components/details";
import Reviews from "../components/reviews";
import MainLayout from "../layout/mainLayout";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

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
        path: "/listingPage",
        element: <ListingPage />,
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
        path: "/product/:documentId",
        element: <ProductPage />,
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
