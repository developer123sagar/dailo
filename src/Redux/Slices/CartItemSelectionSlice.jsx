import { createSlice } from "@reduxjs/toolkit";

const CartItemSelection = createSlice({
  name: "cartItemSelection",
  initialState: {
    selectAll: false,
    selectedCartItems: [],
  },
  reducers: {
    selectAllCartItems: (state, action) => {
      state.selectAll = true;
      state.selectedCartItems = [...action.payload];
    },
    deselectAllCartItems: (state) => {
      state.selectAll = false;
      state.selectedCartItems = [];
    },
    selectCartItem: (state, action) => {
      state.selectedCartItems.push(action.payload);
    },
    deselectCartItem: (state, action) => {
      state.selectedCartItems = state.selectedCartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQtySelectItem: (state, action) => {
      const index = state.selectedCartItems.findIndex(
        (el) => el.id === action.payload
      );

      if (index !== -1) {
        let qty = state.selectedCartItems[index].quantity;
        const qtyInc = ++qty;
        state.selectedCartItems[index].quantity = qtyInc;

        const price = state.selectedCartItems[index].price;
        const total = price * qtyInc;

        state.selectedCartItems[index].total = total;
      }
    },
    decreaseQtySelectItem: (state, action) => {
      const index = state.selectedCartItems.findIndex(
        (el) => el.id === action.payload
      );

      if (index !== -1) {
        let qty = state.selectedCartItems[index].quantity;
        if (qty > 1) {
          const qtyDec = --qty;
          state.selectedCartItems[index].quantity = qtyDec;

          const price = state.selectedCartItems[index].price;
          const total = price * qtyDec;

          state.selectedCartItems[index].total = total;
        }
      }
    },
    removeSelectedProd: (state, action) => {
      state.selectedCartItems = state.selectedCartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  selectAllCartItems,
  deselectAllCartItems,
  selectCartItem,
  deselectCartItem,
  increaseQtySelectItem,
  decreaseQtySelectItem,
  removeSelectedProd,
} = CartItemSelection.actions;

export default CartItemSelection.reducer;
