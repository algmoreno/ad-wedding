import React from 'react'
import Balatro from './Balatro';

const SaveDateCard = () => {
  return (
    <div className="bg-6 flex max-w-3xl h-[600px] m-auto overflow-hidden shadow-sm font-decorative drop-shadow-xl/100 ">
        <div className="relative w-full bg-6">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 text-shadow-lg/40 text-6xl">
            <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
            <div className="absolute inset-0 bg-gradient-to-t from-custom pointer-events-none" />
                <h2 className="z-10 mb-10">Saturday, April 18, 2026</h2>
                <h1 className="z-10 mb-10">Tucson, AZ</h1>
                <h2 className="z-10">El Conquistador Resort</h2>
            </div>
        </div>
    </div>
  )
}

export default SaveDateCard