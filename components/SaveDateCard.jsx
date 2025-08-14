import React from 'react'
import Balatro from './Balatro';


const SaveDateCard = () => {
  return (
    <div className="bg-6 flex max-w-4xl h-[700px] m-auto overflow-hidden shadow-sm font-header drop-shadow-xl/50 rounded-sm border-8 border-double border-gray-900">
        <div className="relative w-full bg-6 ">
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
            <div className="absolute inset-0 balatro-custom pointer-events-none" />
                <h2 className="text-3xl sm:text-7xl z-10 m-10 text-gray-800/90 text-shadow-lg/80 text-shadow-white text-center">Saturday, April 18, 2026</h2>
                <h2 className="text-3xl sm:text-5xl z-10 m-10 font-header text-gray-900 text-shadow-lg text-shadow-white text-center">Hilton El Conquistador Resort</h2>
                <h1 className="text-3xl sm:text-5xl z-10 m-10 font-header text-gray-900 text-shadow-lg text-shadow-white text-center">Tucson, AZ</h1>
            </div>

        </div>
    </div>
  )
}

export default SaveDateCard