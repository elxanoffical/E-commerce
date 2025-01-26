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
import AdminPage from "../pages/admin";
import Dashbord from "../components/outlet/Dashboard";
import Products from "../components/outlet/products";
import Orders from "../components/outlet/orders";
import Customers from "../components/outlet/customers";
import Settings from "../components/outlet/settings";
import ReviewsAdmin from "../components/outlet/reviews";

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
      {
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            index: true,
            element: <Dashbord/>
          },
          {
            path: "products",
            element: <Products/>
          },
          {
            path: "orders",
            element: <Orders/>
          },
          {
            path: "customers",
            element: <Customers/>
          },
          {
            path: "reviewsAdmin",
            element: <ReviewsAdmin/>
          },
          {
            path: "settings",
            element: <Settings/>
          },
         
        ],
      },
    ],
  },
]);
