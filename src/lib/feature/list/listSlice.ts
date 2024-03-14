import { createSlice } from "@reduxjs/toolkit";
import data from "../../dataset.json";

export const listSlice = createSlice({
  name: "counter",
  initialState: {
    list: data,
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = listSlice.actions;

export default listSlice.reducer;
