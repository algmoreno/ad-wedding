import React from 'react'
import { Navbar } from '@/components/index';
import GradientText from './GradientText'


const Header = () => {
  return (
    <div className='font-bold'>
        <div className='flex px-2 sm:px-6 lg:px-8 font-header justify-center p-10 text-center'>
          <a href="/">
            <GradientText 
            colors={["#000000", "#000000", "#ba1004", "#000000", "#ba1004"]} // #fffbeb #910000
            animationSpeed={20}
            showBorder={false}
            className="m-auto text-[60px] md:text-[50px] text-shadow-lg/20"
            >
                
            </GradientText>
            <h1 className="text-[60px] md:text-[50px] text-white">
              Doli & Alan
            </h1>
            
          </a>
          <img className="max-md:hidden w-[100px] h-[100px]" src="/assets/favicon.png" />
        </div>
        <img className="sm:hidden m-auto w-[100px] h-[100px] sm:w-[100px] sm:h-[100px]" src="/assets/favicon.png" />
        <Navbar />
    </div>
  )
}

export default Header