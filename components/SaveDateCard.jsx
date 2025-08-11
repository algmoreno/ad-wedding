import React from 'react'


const SaveDateCard = () => {
  return (
    <div className="flex bg-0 max-w-3xl h-[600px] m-auto overflow-hidden shadow-sm font-decorative drop-shadow-xl/50">
        <div className="bg-white grid grid-cols-1 grid-rows-3 m-auto gap-4 px-4 py-5 sm:p-6 border-4 border-black backdrop-blur-lg backdrop-brightness-[120%] ">
            <h2 className='text-4xl m-auto'>
                Saturday, April 18, 2026
            </h2>
            <h1 className='text-4xl m-auto'>
                Tucson, AZ
            </h1>
            <h2 className='text-4xl m-auto'>
                El Conquistador Resort
            </h2>
        </div>
      </div>
  )
}

export default SaveDateCard