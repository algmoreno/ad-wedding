import React from 'react'
import { Navbar } from '@/components/index';
import GradientText from './GradientText'

const Header = () => {
  return (
    <div className='bg-amber-50'>
        <div className='flex px-2 sm:px-6 lg:px-8 font-decorative justify-center p-10'>
            <GradientText 
            colors={["#000000", "#000000", "#ba1004", "#000000", "#000000"]} // #fffbeb #910000
            animationSpeed={10}
            showBorder={false}
            className="m-auto text-[40px] md:text-[125px]"
            >
                Alan + Doli
            </GradientText>
        </div>
        <Navbar />
    </div>
  )
}

export default Header