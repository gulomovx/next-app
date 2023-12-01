"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imgData } from "../../../constants";
const initialState = {
  imgData,
};

// const initialState = {
//   amount:0,
//   imgData: imgData.map((item) => ({ ...item, amount: 0 })), // Add 'amount' property to each item
// };
export interface CounterState {
  value: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const item = state.imgData.find((image) => image.id === payload.id);
      if (item) {
        item.amount = item.amount + 1;
      }
      return state.imgData;
    },

    // decrement: (state, { payload }) => {
    //   const item = state.imgData.find((image) => image.id === payload.id);
    //   state.amount = item.amount -= 1;
    //   console.log("hmmm");
    // },
    // decrement: (state, { payload }) => {
    //   const item = state.imgData.find((image) => image.id === payload.id);
    //   if (item && item.amount > 0) {
    //     state.amount--; // Decrement the amount for the specific item, but ensure it doesn't go below 0
    //   }
    // },
  },
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;
