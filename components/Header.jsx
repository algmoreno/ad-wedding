import React from 'react'
import { Navbar } from '@/components/index';

const Header = () => {
  return (
    <div className='bg-amber-50'>
        <div className='flex px-2 sm:px-6 lg:px-8 font-decorative justify-center p-10'>
            <h1 className='m-auto text-[150px]'>
                Alan + Doli
            </h1>
        </div>
        <Navbar />
    </div>
  )
}

export default Header