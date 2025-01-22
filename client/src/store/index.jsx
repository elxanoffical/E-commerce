import basket from "./basket";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    basket: basket,
  },
});
