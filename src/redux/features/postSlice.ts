"use client";
import { RootState } from "../store";
import { imgData } from "./../../../constants/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { imgData } from "../../../constants";
export interface CounterState {
  cartItems: [];
  cartTotalAmount: number;
  cartTotalQuantity: number;
}
interface Product {
  name: string;
  image: string;
  author: string;
  avatar: string;
  price: number;
  id: number;
}
const initialState: CounterState = {
  // imgData,
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// const initialState = {
//   amount:0,
//   imgData: imgData.map((item) => ({ ...item, amount: 0 })), // Add 'amount' property to each item
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // state.cartItems.push(action.payload)
      const product = action.payload;
      const data = []
      data.push(product)
      state.cartItems.push(product);
      localStorage.setItem('product', JSON.stringify(data))

      const item = state.cartItems.find((i) => i.id === product.id);
      console.log("1212", product);
      console.log("cartttt");

      if (item) {
        state.cartTotalQuantity += 1;
      }
    },
    countGlobal: () => {},
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default cartSlice.reducer;
