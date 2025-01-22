import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./style/global.css";
import "./i18n/index";
import { Provider } from "react-redux";
import store from "./store";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "az");
}

if (!localStorage.getItem("isDarkMode")) {
  localStorage.setItem("isDarkMode", "false");
}

if (!localStorage.getItem("favorites")) {
  localStorage.setItem("favorites", "[]");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />

  </Provider>
);
