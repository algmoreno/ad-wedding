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

const EventDetailsCard = () => {
  return (
<div className="relative w-full h-[1200px] p-10 m-auto overflow-hidden shadow-sm font-header drop-shadow-xl/50 rounded-sm border-l-12 border-double border-white">

{/* Shared background */}
<div className="absolute inset-0">
  <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
  <div className="absolute inset-0 balatro-custom-1 pointer-events-none" />
</div>

{/* Main grid: 3 rows, 2 columns */}
<div className="relative grid grid-rows-[auto_1fr_1fr] grid-cols-1 sm:grid-cols-2 w-full h-full z-20">

  {/* Top row: date spans both columns */}
  <div className="col-span-2 flex justify-center items-start pt-10">
    <h2 className="text-5xl sm:text-6xl font-extrabold text-black/90 text-shadow-lg text-shadow-white-200/30">
      Saturday, April 18, 2026
    </h2>
  </div>

  {/* Row 1, Column 1: Event 1 */}
  <div className="flex flex-col col-span-1  justify-center items-center p-10 mt-10 border-2 outline-2 outline-offset-8 backdrop-blur-[6px]">
    <h2 className="text-4xl font-extrabold sm:text-4xl text-black text-shadow-lg text-shadow-white-200/30">
      10:00 am
    </h2>
    <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-black text-shadow-lg text-shadow-white-200/30">
      Ceremony and Lunch
    </h2>
    <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-black text-shadow-lg text-shadow-white-200/30">
      Hilton El Conquistador Resort
    </h2>
    <h1 className="text-4xl font-extrabold sm:text-4xl mt-5 text-black text-shadow-lg text-shadow-white-200/30">
      Tucson, AZ
    </h1>
  </div>

  {/* Row 2, Column 2: Event 2 */}
  <div className="flex flex-col justify-center items-center p-10 mt-10 text-right col-start-2 row-start-3 border-2 outline-2 outline-offset-8 backdrop-blur-[6px]">
    <h2 className="text-4xl font-extrabold sm:text-4xl text-black text-shadow-lg text-shadow-white-200/30">
      5:30 pm
    </h2>
    <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-black text-shadow-lg text-shadow-white-200/30">
      Reception
    </h2>
    <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-black text-shadow-lg text-shadow-white-200/30">
      Hilton El Conquistador Resort
    </h2>
    <h1 className="text-4xl font-extrabold sm:text-4xl mt-5 text-black text-shadow-lg text-shadow-white-200/30">
      Tucson, AZ
    </h1>
  </div>

</div>
</div>


  )
}

export default EventDetailsCard