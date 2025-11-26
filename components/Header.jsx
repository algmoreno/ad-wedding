import React from 'react'
import { Navbar } from '@/components/index';
import GradientText from './GradientText'

const Header = () => {
  return (
    <div className='bg-engagement-header-1 font-bold'>
      <div className='flex px-2 sm:px-6 lg:px-8 font-header justify-center p-10 text-center'>
        <a href="/">
          <h1 className="text-[60px] md:text-[50px] text-white text-shadow-sm text-shadow-black/50 ">
            Doli & Alan
          </h1>
        </a>
      </div>
      <Navbar />
    </div>
  )
}

export default Header