import React from 'react'
import Balatro from './Balatro';
import Silk from './Silk';

{/* <Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/> */}

const SaveDateCard = () => {
  return (
    <div className="relative w-full bg-gray-200 flex max-w-2xl h-[700px] m-auto overflow-hidden shadow-sm font-header drop-shadow-xl/50 rounded-sm border-l-12 border-double border-white">
      <div className="absolute inset-0 flex flex-col justify-center">
        <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
        <div className="absolute inset-0 balatro-custom-1 pointer-events-none" />
        <h2 className="text-5xl font-extrabold sm:text-6xl z-10 mt-50 mr-auto ml-5 text-black/90 text-shadow-lg text-shadow-white-200/30 text-left">Saturday, April 18, 2026</h2>
        <h2 className="text-4xl font-extrabold sm:text-4xl z-10 mt-10 mr-auto ml-5 text-black text-shadow-lg text-shadow-white-200/30 text-left">Hilton El Conquistador Resort</h2>
        <h1 className="text-4xl font-extrabold sm:text-4xl z-10 mt-10 mr-auto ml-5 text-black text-shadow-lg text-shadow-white-200/30 text-left">Tucson, AZ</h1>
        </div>
    </div>
  )
}

export default SaveDateCard