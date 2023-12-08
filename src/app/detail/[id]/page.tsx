"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { imgData } from "../../../../constants/index";
import download from "../../../../public/download.png";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import "../../globals.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// import { AppDistach } from "@/redux/store";
import { addToCart } from "../../../redux/features/postSlice";
import { IoBagCheckOutline } from "react-icons/io5";
import { Product } from "@/interface";

function page() {
  // const { imgData: items } = useSelector((store) => store.counter);
  const cartTotalQuantity = useSelector((store) => store);
  console.log(cartTotalQuantity);

  const dispatch = useDispatch();

  const { id: itemId } = useParams();
  // console.log(itemId);
  const [item, setItem] = useState<Product>();

  useEffect(() => {
    setItem(imgData.find((itm) => itm.id === +itemId));
  }, []);

  return (
    <div className="max-w-7xl  mx-auto mt-16 mb-96">
      <div
        className="max-w-6xl  w-full border shadow-xl   mx-auto backdrop-blur-md p-8 bg-white/8 flex flex-col md:flex-row lg:flex-row
       items-center  rounded-2xl  gap-4 "
      >
        <div className="">
          {/* IMG */}

          <Image
            className="rounded-2xl "
            src={item?.image}
            width={500}
            height={700}
            alt="img"
          />
        </div>
        <div className=" backdrop-blur-md md:p-16  rounded-2xl shadow-">
          {/* contents */}
          <h1 className="text-2xl md:text-6xl blue  font-semibold mb-4">
            {item?.name}
          </h1>

          <div className="flex gap-4 items-center">
            <Image src={item?.avatar} width={30} height={30} alt="img" />
            <p className=" text-2xl">{item?.author}</p>
            <p className="border bg-slate-100 px-8 justify-center py-2 flex    rounded-3xl">
              <Image src={download} alt="coin" width={30} height={30} />
              {item?.price}
            </p>
          </div>
          {/* check out content */}
          <div className="p-4  rounded-md  mt-8 flex flex-col md:flex-row gap-12">
            <div className="text-2xl flex items-center justify-between gap-2 ">
              <Image src={download} alt="coin" width={30} height={30} />
              {item?.price}
              <div className="w-[1px] h-[20px] bg-slate-600 " />
              <p className="text-2xl pl-2">({item?.price * 2060}$)</p>
            </div>
            {/* <div className="flex items-center gap-4 ">
              <button
                onClick={() => {
                  dispatch(increment({ id: item?.id }));
                }}
                className="bg-orange-300 rounded-lg p-2 active:scale-110  duration-200"
              >
                <BsPlusLg />
              </button>
              <h1 className="text-2xl mx-2">{item?.amount}</h1>
              <button
                onClick={() => {
                  dispatch(decrement({ id: item?.id }));
                }}
                className="bg-orange-300  rounded-lg p-2 active:scale-110 duration-200"
              >
                <AiOutlineMinus />
              </button>
            </div> */}
            <button
              onClick={() => dispatch(addToCart(item))}
              className="bg-blue-700 flex  items-center gap-2 justify-center w-full  p-2 text-white rounded-3xl"
            >
              Add to cart
              <IoBagCheckOutline size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
