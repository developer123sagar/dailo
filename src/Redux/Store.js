import { configureStore } from "@reduxjs/toolkit";
import FoodDataReducer from "./Slices/FoodDataSlice";
import CartReducer from "./Slices/CartProductSlice";
import CartItemSelectionReducer from "./Slices/CartItemSelectionSlice";
import AuthReducer from "./auth/AuthSlice";

export const store = configureStore({
  reducer: {
    foodData: FoodDataReducer,
    cart: CartReducer,
    cartItemSelection: CartItemSelectionReducer,
    auth: AuthReducer,
  },
});
