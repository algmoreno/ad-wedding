import React from 'react'
import { Navbar } from '@/components/index';
import GradientText from './GradientText'

const HeaderLanding = () => {
  return (
    <div className='bg-engagement-7 font-bold'>
      <div className='flex px-2 sm:px-6 lg:px-8 font-header justify-center p-10 text-center'>
        <a href="/">
          <h1 className="text-[60px] md:text-[50px] text-white text-shadow-lg text-shadow-white/30 ">
            Doli & Alan
          </h1>
        </a>
      </div>
      <div className="flex ">
        <h1 className="m-auto text-[50px] sm:text-[100px] text-amber-200/70 text-shadow-lg text-shadow-black/30">
          4.18.2026
        </h1>
      </div>
      <Navbar />
      <div className="h-[100px] sm:h-[200px]">

      </div>
    </div>
  )
}

export default HeaderLanding