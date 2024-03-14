import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import data from "../../dataset.json";

type CardType = { id: number; count: number };

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    list: data,
    cart: [] as CardType[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<CardType>) => {
      if (state.cart.length > 0) {
        const obj = current(state).cart.find((item) => item.id === action.payload.id);

        if (obj) {
          const arr = current(state).cart.map((item) =>
            item.id === action.payload.id ? { id: item.id, count: item.count + action.payload.count } : item
          );

          state.cart = arr;
        } else {
          state.cart = [...state.cart, action.payload];
        }
      } else {
        state.cart = [action.payload];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = mainSlice.actions;

export default mainSlice.reducer;
