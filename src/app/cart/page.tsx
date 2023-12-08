"use client";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../hooks";
import { Product } from "@/interface";
const page = () => {
  const { cartTotalAmount, cartItems, cartTotalQuantity } = useSelector(
    (state: any) => state.counter
  );
  console.log("card data", cartItems);
  const dispatch = useDispatch();
  // if (cartItems.length == 0) {
  //   return (
  //     <div className="border-b max-w-6xl mx-auto  border-base-300 pb-5 py-20">
  //       <h2 className="text-4xl font-medium  tracking-wider capitalize">
  //         Your cart is empty
  //       </h2>
  //     </div>
  //   );
  // }
  return (
    <div className="max-w-7xl mx-auto   min-h-screen mt-16  ">
      <h1 className="text-3xl md:text-5xl my-4 text-slate-900">
        Featured NFT Items
      </h1>
      {cartItems &&
        cartItems.map((item: any) => {
          return (
            <div
              key={new Date().getMilliseconds() + Math.random()}
              className="border my-2 p-4 rounded-lg flex "
            >
              <img
                src={item.image}
                alt=""
                width={100}
                className="rounded-xl object-cover"
              />
              <h1 className="text-2xl">{item.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default page;
