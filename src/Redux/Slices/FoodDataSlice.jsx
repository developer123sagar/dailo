import { createSlice } from "@reduxjs/toolkit";

const FoodDataSlice = createSlice({
  name: "FoodData",
  initialState: {
    FoodItems: [],
  },
  reducers: {
    setFoodItems: (state, action) => {
      state.FoodItems = action.payload;
    },
  },
});

export const { setFoodItems } = FoodDataSlice.actions;

export default FoodDataSlice.reducer;
