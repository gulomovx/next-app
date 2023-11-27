'use client'

import Image from 'next/image'
import main from '../../public/Main.svg'
import userAvatar from '../../public/Avatar1.svg'
import CartList from '@/components/CartList'
import { useState } from 'react'


export default function Home() {
  const [loading, setLoading]=useState(false)
  return (
    
    <div className="max-w-7xl mx-auto mt-8 h-screen  lg:mt-16">
      <div className="  gap-4  lg:flex xl:flex xl:justify-center xl:items-center lg:justify-between items-center mb-8">
        <div className="">
        <Image
      src={main}
      alt="Picture of the author"  
      // width={889}
      // height={500}
            quality={100}
            className='w-full lg:w-[800px] lg:h=[500px] rounded-lg'
    />
        </div>

        <div className=" mt-12 flex flex-col p-4   ">
          <h1 className="text-[28px] font-semibold tracking-wider">The circle's pristine cleanliness</h1>
          <p className='flex items-center gap-2'>
          <Image
      src={userAvatar}
      alt="Picture of the author"
      width={30}
      height={30}
              quality={100}
              className=''
            />
            <span>Jonas</span>
          </p>


          <div className="flex gap-8">
            <div className="">
              <p className="text-[25px]">Current bid</p>
              <h1 className="font-semibold">0.85 ETH</h1>
              <span className='text-slate-300'>$2,169.42</span>
            </div>
            <div className="w-[1px]  bg-slate-700"></div>
            <div className="">
              <h1 className="">Action ends in</h1>
              <ul className="flex gap-4">
                <li className=''>
                  <h1 className='font-semibold'>3</h1>
                  <span className="text-slate-300">Hours</span>
                </li>
                <li className=''>
                  <h1 className='font-semibold'>16</h1>
                  <span className="text-slate-300">Minutes</span>
                </li>
                <li className=''>
                  <h1 className='font-semibold'>3</h1>
                  <span className="text-slate-300">Seconds</span>
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-blue-600 px-2 py-4 rounded-[30px] mt-8 text-white ">Place a bit</button>
          <button className=" px-2 py-4 text-blue-700">View artwork</button>

        </div>
      </div>
      <CartList/>
    </div>
  )
}
