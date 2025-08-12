import React from 'react'
import Balatro from './Balatro';

const SaveDateCard = () => {
  return (
    <div className="flex bg-6 max-w-3xl h-[600px] m-auto overflow-hidden shadow-sm font-decorative drop-shadow-xl/100 ">
        <div className="relative w-full bg-6">
        <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={2000}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-black text-6xl">
            <h2>Saturday, April 18, 2026</h2>
            <h1>Tucson, AZ</h1>
            <h2>El Conquistador Resort</h2>
        </div>
        </div>
    </div>
  )
}

export default SaveDateCard