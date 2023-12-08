"use client";
import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsLightningChargeFill } from "react-icons/bs";
import { HiMiniBars4 } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
// import Button from "./Button";
import { Product } from "@/interface";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/redux/store";

const Navbar = ({ name, image, price, id }: Product) => {
  const { cartTotalQuantity }: any = useSelector(
    (state: any): RootState => state.counter
  );
  // const  cartTotalQuantity = useSelector((store) => store)

  return (
    <>
      {/* <div className="max-w-7xl navbar bg-base-100 mx-auto h-20  top-0 z-[100] font mt-8">
        <div className="flex w-full justify-between items-center">
          <Link href='/' className="">
            <h1 className="text-3xl font-bold font-mono">Rolling</h1>
          </Link>
          <div className="flex items-center rounded-[40px] border-2 outline-none shadow-sm px-4">
            <CiSearch size={20} className='font-bold cursor-pointer'/>
            <input type="text" placeholder="Search rolling" className=" outline-none  outline-1 p-2 w-96" />
          </div>
          <div className="">

            <ul className=" flex gap-6 items-center font-medium">
              <li className=" flex md:hidden">
          <HiMiniBars4 size={28}  />
               
              </li>
              <Link href='/'>
                Explore
              </Link>
              <Link href='/'>
                Activity
              </Link>
              <Link href='/'>
                Feed
              </Link>
              <Link href='/'>
                Bids
              </Link>
              <Link href='/' className="border w-8 h-8 rounded-[50%] justify-center flex items-center shadow-lg">
              <BsLightningChargeFill />

              </Link>
              <Link href='/' className="text-blue-400 bg-slate-100 border rounded-[30px] p-2 px-4">
                Connect Wallet
              </Link>
            </ul>
          </div>
          
        </div>
        
      </div> */}

      <div className="bg-base-100 max-w-7xl mx-auto mt-4">
        <nav className="navbar align-elements  ">
          <div className="navbar-start">
            <Link href="/">
              <h1 className="text-3xl font-bold text-slate-700 font-mono">
                Rolling
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden md:hidden  xl:flex">
            <div className="flex items-center rounded-[40px] border-2 outline-none shadow-sm px-4">
              <CiSearch size={20} className="font-bold cursor-pointer" />
              <input
                type="text"
                placeholder="Search rolling"
                className=" outline-none  outline-1 p-2 w-96"
              />
            </div>
          </div>
          {/* end navb */}
          <div className="navbar-end">
            <div className="dropdown relative">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMiniBars4 size={28} />
                {/* <FaBarsStaggered className="h-6 w-6" /> */}
              </label>
              <ul
                tabIndex={0}
                className=" menu absolute right-4 lg:flex items-center gap-4 text-start menu-sm dropdown-content z-[1] mt-3 py-8 px-4 shadow bg-base-100 w-56  "
              >
                <Link href="/about">About</Link>
                <Link href="/">Activity</Link>
                <Link href="/">Feed</Link>
                <Link href="/">Bids</Link>
                <Link
                  href="/"
                  className="border w-8 h-8 rounded-[50%] justify-center flex items-center shadow-lg"
                >
                  <BsLightningChargeFill />
                </Link>
                <Link
                  href="/"
                  className=" bg-slate-100 justify-center border rounded-[30px] p-2 flex w-[100%] "
                >
                  <span className="text-blue-800"> Connect Wallet</span>
                </Link>
                <Link href="/cart" className="btn btn-circle btn-md ml-4">
                  <div className="indicator">
                    <BsCart3 className="w-6 h-6" />
                    <span className="badge badge-sm badge-primary indicator-item h-[20px] ">
                      {cartTotalQuantity}
                    </span>
                  </div>
                </Link>
                {/* <Navlinks/> */}
              </ul>
            </div>
            <div className=""></div>
            <ul className=" font-semibold items-center hidden lg:flex  menu menu-horizontal gap-6">
              <Link href="/about">About</Link>
              <Link href="/">Activity</Link>
              <Link href="/">Feed</Link>
              <Link href="/">Bids</Link>
              {/* <Link
                href="/"
                className="border w-8 h-8 rounded-[50%] justify-center flex items-center shadow-lg"
              >
                <BsLightningChargeFill />
              </Link> */}
              {/* <Link
                href="/"
                className="text-blue-400  md:hidden lg:block bg-slate-100 border rounded-[30px] p-2 px-4"
              >
                Connect Wallet
              </Link> */}
              <Link href="/cart" className="btn btn-circle btn-md ml-4">
                <div className="indicator flex items-center">
                  <BsCart3 className="w-6 h-6" />
                  <span className="badge text-[15px] badge-sm badge-primary indicator-item h-[25px] w-[25px]  rounded-full ">
                    {cartTotalQuantity}
                  </span>
                </div>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
