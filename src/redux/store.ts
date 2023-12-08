"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/postSlice";

// const rootReducer = combineReducers({
//     items:cartReducer,
// })

// export type ApplicationState = ReturnType<typeof store.getState>;
// export type ApplicationDispatch = typeof store.dispatch;
// export default store;

// export const store = configureStore({
//   reducer: {
//     counter: cartReducer,
//   },
// });
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: cartReducer,
    },
  });
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// 2
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
