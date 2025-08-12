import React from 'react'
import Balatro from './Balatro';

const SaveDateCard = () => {
  return (
    <div className="bg-6 flex max-w-3xl h-[600px] m-auto overflow-hidden shadow-sm font-decorative drop-shadow-xl/50 rounded-sm">
        <div className="relative w-full bg-6">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-800/90 text-shadow-lg/80 text-shadow-white text-6xl">
            <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
            <div className="absolute inset-0 from-custom pointer-events-none text-center" />
                <h2 className="z-10 mb-10">Saturday, April 18, 2026</h2>
                <h1 className="z-10 mb-10">Tucson, AZ</h1>
                <h2 className="z-10">El Conquistador Resort</h2>
            </div>
        </div>
    </div>
  )
}

export default SaveDateCard