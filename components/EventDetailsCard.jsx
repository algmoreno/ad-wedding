import React from 'react'
import Balatro from './Balatro';

const EventDetailsCard = () => {
  return (
    <div className="w-full sm:min-h-[1100px] p-5 overflow-hidden font-header drop-shadow-sm border-l-16">

      { /* Shared background */}
      <div className="flex absolute inset-0">
        <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
        <div className="absolute inset-0 balatro-custom-1 pointer-events-none" />
      </div>

      {/* Main grid: 3 rows, 2 columns */}
      <div className="relative sm:grid sm:grid-cols-6 sm:grid-rows-6 gap-8 w-full h-full z-20">

        {/* Top row: date spans both columns */}
        <div className="flex sm:col-span-4 sm:col-start-2 justify-center items-center pt-10">
          <h2 className="text-5xl sm:text-6xl mb-10 text-center font-extrabold text-red-900 text-shadow-lg text-shadow-white-200/30">
            Saturday, April 18, 2026
          </h2>
        </div>

        {/* Row 1, Column 1: Event 1 */}
        <div className="flex flex-col col-start-1 col-end-4 justify-center items-center p-10 border-2 outline-2 outline-offset-8 backdrop-blur-[6px]">
          <h2 className="text-2xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            9:15 am
          </h2>
          <h2 className="text-4xl text-center font-extrabold sm:text-4xl mt-5 text-red-900 text-shadow-lg text-shadow-white-200/30">
            Ceremony and Lunch
          </h2>
          <h2 className="text-2xl text-center font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="flex flex-col col-start-4 col-end-7 row-start-3 justify-center items-center p-10 text-center border-2 outline-2 outline-offset-8 backdrop-blur-[6px]">
          <h2 className="text-2xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            5:30 pm
          </h2>
          <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-red-900 text-shadow-lg text-shadow-white-200/30">
            Reception
          </h2>
          <h2 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

        <div className="col-start-4 col-end-5 row-start-2 border-4 bg-4">

        </div>

        <div className="col-start-2 col-end-4 row-start-3 border-4 bg-4">

        </div>

        <div className="flex sm:col-span-4 sm:col-start-2 row-start-4 justify-center items-center">
          <h2 className="text-5xl sm:text-6xl mb-10 text-center font-extrabold text-red-900 text-shadow-lg text-shadow-white-200/30">
            Travel & Accommodation
          </h2>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="flex flex-col col-start-1 col-end-4 row-start-5 justify-center items-center p-10 text-center border-2 outline-2 outline-offset-8 backdrop-blur-[6px]">
          <h2 className="text-2xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            5:30 pm
          </h2>
          <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-red-900 text-shadow-lg text-shadow-white-200/30">
            Reception
          </h2>
          <h2 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

        <div className="flex flex-col col-start-4 col-end-7 row-start-6 justify-center items-center p-10 text-center border-2 outline-2 outline-offset-8 backdrop-blur-[6px]">
          <h2 className="text-2xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            5:30 pm
          </h2>
          <h2 className="text-4xl font-extrabold sm:text-4xl mt-5 text-red-900 text-shadow-lg text-shadow-white-200/30">
            Reception
          </h2>
          <h2 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

      </div>
    </div>

  )
}

export default EventDetailsCard