"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { imgData } from "../../../../constants/index";
import download from '../../../../public/download.png'
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";


function page() {
  const { id: itemId } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    setItem(imgData.find((itm) => itm.id == itemId));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="max-w-6xl  w-full drop-shadow-lg mx-auto backdrop-blur-md p-8 bg-white/8 flex flex-col md:flex-row lg:flex-row
       items-center  rounded-2xl  gap-16 ">
        <div className="">
          {/* IMG */}

          <Image
            className="rounded-2xl   "
            src={item?.image} width={600} height={700} alt="img" />
        </div>
        <div className=" rounded-lg p-4">
          {/* contents */}
          <h1 className="text-6xl  font-semibold mb-4">{item?.name}</h1>
          
          <div className="flex gap-4 items-center">
          <Image
            src={item?.avatar}
            width={30}
            height={30}
            />
            <p className=" text-2xl">{item?.author}</p>
            <p className="border bg-slate-100 px-8 justify-center py-2 flex    rounded-3xl">
              <Image
                src={download}
                alt='coin'
                width={30}
                height={30}
              />
              {item?.price}

            </p>
          </div>
          {/* check out content */}
        <div className="p-4 bg-blue-700 rounded-md mt-8  flex   gap-8 mb-96  ">
            <div className="text-2xl flex items-center justify-between gap-2 ">
            <Image
                src={download}
                alt='coin'
                width={30}
                height={30}
              />
              {item?.price}
              <div className="w-[1px] h-[20px] bg-slate-600 "/>
              <p className="text-2xl pl-2">({ item?.price *2060}$)</p>
            </div>
            <div className="flex items-center gap-4 ">
              <button className="bg-orange-300 rounded-lg p-2 active:scale-110  duration-200">
              <BsPlusLg />

              </button>
              <h1 className="text-2xl">1</h1>
              <button className="bg-orange-300  rounded-lg p-2 active:scale-110 duration-200">
              <AiOutlineMinus />


              </button>
            </div>
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default page;
