import React from 'react'
import { Navbar } from '@/components/index';

const Header = () => {
  return (
    <div>
        <div className='flex font-decorative justify-center p-5'>
            <h1 className='m-auto text-[150px]'>
                Alan + Doli
            </h1>
        </div>
        <Navbar />
    </div>
  )
}

export default Header