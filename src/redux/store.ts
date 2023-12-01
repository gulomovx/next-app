"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/postSlice";

// const rootReducer = combineReducers({
//     items:cartReducer,
// })
export type AppDistach = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type ApplicationState = ReturnType<typeof store.getState>;
// export type ApplicationDispatch = typeof store.dispatch;
// export default store;

export const store = configureStore({
  reducer: {
    counter: cartReducer,
  },
});
