import { createSlice } from "@reduxjs/toolkit";

export const basket = createSlice({
  name: "basket",
  initialState: {
    value: [],
  },
  reducers: {
    addNewItemToBasket: (state, action) => {
      let newArr = state.value.concat(action.payload)
      state.value = newArr
    },
  },
});
export const { addNewItemToBasket } = basket.actions;

export default basket.reducer;
