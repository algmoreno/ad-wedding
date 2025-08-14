import React from 'react'
import { Navbar } from '@/components/index';
import GradientText from './GradientText'


const Header = () => {
  return (
    <div className='backdrop-blur-sm font-bold'>
        <div className='flex px-2 sm:px-6 lg:px-8 font-header justify-center p-10'>
            <GradientText 
            colors={["#000000", "#000000", "#ba1004", "#000000", "#ba1004"]} // #fffbeb #910000
            animationSpeed={20}
            showBorder={false}
            className="m-auto text-[60px] md:text-[50px] text-shadow-lg/20"
            >
                Doli & Alan
            </GradientText>

        </div>
        <Navbar />
    </div>
  )
}

export default Header