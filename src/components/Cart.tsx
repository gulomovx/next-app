"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { imgData } from "../../constants/index";
import download from "../../public/download.png";

type Props = {
  img?: any;
  time?: string;
  title?: string;
  actor?: string;
  actorImg?: string;
  price?: number;
};

const Cart = ({ img, time, title, actor, actorImg, price }: Props) => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" grid w-full grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {imgData.map((item) => {
          // console.log(item);
          return (
            <div
              key={item.id}
              className="rounded-2xl  shadow-lg hover:scale-105 hover:shadow-indigo-300 duration-300 flex flex-col justify-between  border "
            >
              <Link href={`/detail/${item.id}`}>
                <Image
                  alt="img"
                  src={item.image}
                  width={200}
                  height={400}
                  quality={100}
                  className=" w-full md:h-[300px]  lg:w-full rounded-2xl  object-cover cursor-pointer"
                />
              </Link>

              <h1 className="text-[20px] ml-2 my-2 text-slate-950 backdrop-blur-sm font-medium">
                {item.name}
              </h1>
                {/* <button className="bg-blue-300  p-2">Add</button> */}
              
              <div className="mx-2 bg-slate-800 h-[1px]"></div>
              <div className="flex justify-between items-center p-4 ml-2">
                <div className="flex justify-center items-center gap-2  relative ">
                  <Image
                    alt=""
                    src={item.avatar}
                    width={30}
                    height={30}
                    quality={100}
                    className=""
                  />
                  <p className="text-slate-700">{item.author}</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-slate-400">Current Bid</p>
                  <p className="text-[18px]">{item.price} ETH</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
