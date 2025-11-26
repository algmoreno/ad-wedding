import React from 'react'
import { Navbar } from '@/components/index';
import GradientText from './GradientText'

const HeaderLanding = () => {
  return (
    <div className='bg-engagement-7 font-bold w-full min-h-screen'>
      <div className='flex px-2 sm:px-6 lg:px-8 font-header justify-center p-10 text-center'>
        <a href="/">
          <h1 className="text-[60px] md:text-[50px] text-white text-shadow-sm text-shadow-black/50 ">
            Doli & Alan
          </h1>
        </a>
      </div>

      <Navbar />

      <div className="flex h-[100px] sm:h-[200px]">
      <h1 className="mx-auto sm:mt-20 text-[50px] sm:text-[100px] text-orange-300/70 text-shadow-sm text-shadow-black/30">
          4.18.2026
        </h1>
      </div>
    </div>
  )
}

export default HeaderLanding