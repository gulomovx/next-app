"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../store";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

// "use client";
// import Navbar from "@/components/Navbar";
// import React from "react";
// import { Provider } from "react-redux";
// import { store } from "../store";
// const Providers = ({ children }) => {
//   return (
//     <Provider store={store}>
//       <>
//         <Navbar />
//         {children}
//       </>
//     </Provider>
//   );
// };

// export default Providers;
