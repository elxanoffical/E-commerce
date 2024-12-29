import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ListingPage from "../pages/listing";
import ProductPage from "../pages/product";
import Details from "../components/details";
import Reviews from "../components/reviews";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/listingPage",
    element: <ListingPage />,
  },
  {
    path: "/product/:id",
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
]);
