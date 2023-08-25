import { createSlice } from "@reduxjs/toolkit";
import { ToastMsg } from "../../Toast/Toast";

const CartProductSlice = createSlice({
  name: "cart",
  initialState: {
    cartDatas: localStorage.getItem("cartDatas")
      ? JSON.parse(localStorage.getItem("cartDatas"))
      : [],
  },
  reducers: {
    addProduct(state, action) {
      const { price, id } = action.payload;
      const existingItemIndex = state.cartDatas.findIndex(
        (item) => item.id === id
      );
      if (existingItemIndex === -1) {
        const total = action.payload.price;
        state.cartDatas = [
          ...state.cartDatas,
          { ...action.payload, total: total },
        ];
      } else {
        state.cartDatas[existingItemIndex].quantity += 1;
        state.cartDatas[existingItemIndex].total += price;
      }
      ToastMsg(`${action.payload.name} is added in your cart`, "success");
      // Save cart data to localStorage
      localStorage.setItem("cartDatas", JSON.stringify(state.cartDatas));
    },
    increaseQty: (state, action) => {
      const index = state.cartDatas.findIndex((el) => el.id === action.payload);

      let qty = state.cartDatas[index].quantity;
      const qtyInc = ++qty;
      state.cartDatas[index].quantity = qtyInc;

      const price = state.cartDatas[index].price;
      const total = price * qtyInc;

      state.cartDatas[index].total = total;

      // Save cart data to localStorage
      localStorage.setItem("cartDatas", JSON.stringify(state.cartDatas));
    },
    decreaseQty: (state, action) => {
      const index = state.cartDatas.findIndex((el) => el.id === action.payload);
      let qty = state.cartDatas[index].quantity;
      if (qty > 1) {
        const qtyDec = --qty;
        state.cartDatas[index].quantity = qtyDec;

        const price = state.cartDatas[index].price;
        const total = price * qtyDec;

        state.cartDatas[index].total = total;
      }
      // Save cart data to localStorage
      localStorage.setItem("cartDatas", JSON.stringify(state.cartDatas));
    },
    removeProduct(state, action) {
      state.cartDatas = state.cartDatas.filter(
        (item) => item.id !== action.payload
      );
      // Save cart data to localStorage
      localStorage.setItem("cartDatas", JSON.stringify(state.cartDatas));
    },
    emptyCart(state) {
      state.cartDatas = [];
      // Save cart data to localStorage
      localStorage.setItem("cartDatas", JSON.stringify(state.cartDatas));
    },
  },
});

export const {
  addProduct,
  removeProduct,
  emptyCart,
  increaseQty,
  decreaseQty,
} = CartProductSlice.actions;

export default CartProductSlice.reducer;
