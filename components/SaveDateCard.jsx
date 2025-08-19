import React from 'react'
import Balatro from './Balatro';


const SaveDateCard = () => {
  return (
    <div className="bg-6 flex max-w-4xl h-[700px] m-auto overflow-hidden shadow-sm font-header drop-shadow-xl/50 rounded-sm border-8 border-double border-gray-900">
        <div className="relative w-full bg-6 ">
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
            <div className="absolute inset-0 balatro-custom pointer-events-none" />
                <h2 className="text-5xl font-extrabold sm:text-7xl z-10 m-10 text-black/90 text-shadow-lg text-shadow-blue-400/40 text-center">Saturday, April 18, 2026</h2>
                <h2 className="text-4xl font-extrabold sm:text-5xl z-10 m-10 text-black text-shadow-lg text-shadow-gray-500/50 text-center">Hilton El Conquistador Resort</h2>
                <h1 className="text-4xl font-extrabold sm:text-5xl z-10 m-10 text-black text-shadow-lg text-shadow-gray-500/50 text-center">Tucson, AZ</h1>
            </div>

        </div>
    </div>
  )
}

export default SaveDateCard