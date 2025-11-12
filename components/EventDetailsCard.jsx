import React from 'react'
import Balatro from './Balatro';

const EventDetailsCard = () => {
  return (
    <div className="w-full sm:min-h-[1100px] overflow-hidden font-header drop-shadow-sm">

      { /* Shared background */}
      <div className="flex absolute inset-0">
        <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
        <div className="absolute inset-0 balatro-custom-1 pointer-events-none" />
      </div>

      {/*Event Details */}
      <div className="relative sm:grid sm:grid-cols-6 sm:grid-rows-3 w-full h-full mb-20 z-20 p-5">

        {/* Top row: date spans both columns */}
        <div className="flex sm:col-span-4 sm:col-start-2 justify-center items-center">
          <h2 className="text-3xl sm:text-6xl text-center font-extrabold text-red-900 text-shadow-lg text-shadow-white-200/30">
            Saturday, April 18, 2026
          </h2>
        </div>

        {/* Row 1, Column 1: Event 1 */}
        <div className="flex flex-col col-start-1 col-end-4 justify-center items-center border-4 border-black text-red-900 rounded-sm outline-2 outline-offset-8 backdrop-blur-[6px] shadow-2xl">
          <h2 className="text-xl font-extrabold sm:text-2xl text-shadow-lg text-shadow-white-200/30">
            9:15 am
          </h2>
          <h2 className="p-10 text-3xl text-center font-extrabold sm:text-4xl mt-5 text-red-900 text-shadow-lg text-shadow-white-200/30">
            Ceremony and Lunch
          </h2>
          <h2 className="text-xl text-center font-extrabold sm:text-2xl mt-5 text-shadow-lg text-shadow-white-200/30">
            Sunset Point?
          </h2>
          <h2 className="text-xl text-center font-extrabold sm:text-2xl mt-2 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-xl font-extrabold sm:text-2xl mt-2 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="flex flex-col col-start-4 col-end-7 row-start-3 justify-center items-center p-10 text-center border-4 border-black text-red-900 rounded-sm outline-2 outline-offset-8 backdrop-blur-[6px] shadow-2xl">
          <h2 className="text-xl font-extrabold sm:text-2xl text-shadow-lg text-shadow-white-200/30">
            5:30 pm
          </h2>
          <h2 className="p-10 text-3xl font-extrabold sm:text-4xl mt-5text-shadow-lg text-shadow-white-200/30">
            Reception
          </h2>
          <h2 className="text-xl text-center font-extrabold sm:text-2xl mt-5 text-shadow-lg text-shadow-white-200/30">
            Presidio Foyer and Ballroom
          </h2>
          <h2 className="text-xl font-extrabold sm:text-2xl mt-2 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-xl font-extrabold sm:text-2xl mt-2 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

        <div className="flex flex-col col-start-4 col-end-5 row-start-2 bg-2 h-full"></div>
        <div className="flex flex-col col-start-2 col-end-4 row-start-3 bg-2 h-full"></div>


      </div>

      {/*Travel & Accommodation Section */}
      <div className="relative sm:grid sm:grid-cols-6 sm:grid-rows-3 gap-8 w-full h-full z-20 mb-20">

        <div className="flex sm:col-span-4 sm:col-start-2 row-start-4 mt-10 justify-center items-center">
          <h2 className="text-3xl sm:text-6xl mb-10 text-center font-extrabold text-shadow-lg text-shadow-white-200/30">
            Travel & Accommodation
          </h2>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="flex flex-col col-start-1 col-end-4 row-start-5 justify-center items-center p-10 text-center">
          <img className="w-[180px] sm:mt-10 height-auto" src="/assets/airplane_icon.png" />
          <h2 className="text-4xl font-extrabold sm:text-4xl text-shadow-lg text-shadow-white-200/30">
            Tucson International Airport
          </h2>
          <h2 className="text-2xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            7250 S Tucson Blvd
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ 85756
          </h1>
        </div>

        <div className="flex flex-col col-start-4 col-end-7 row-start-5 justify-center items-center p-10 text-center">
        <div className="bg-hotel h-[500px] w-full rounded-sm"></div>
          
          <h2 className="text-2xl font-extrabold sm:text-4xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h2 className="text-xl font-extrabold sm:text-2xl mt-5 text-shadow-lg text-shadow-white-200/30">
            10000 N Oracle Rd
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ 85704
          </h1>
          <h1 className="text-2xl font-extrabold sm:text-2xl mt-5 text-blue-600 underline decoration-1 text-shadow-lg text-shadow-white-200/30">
          <a target="_blank" href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=TUSHTHH&arrivalDate=2026-04-17&departureDate=2026-04-19&groupCode=PMW417&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink">Book your stay here!</a>
          </h1>

        </div>

      </div>

      {/*RSVP Section */}
      <div className="bg-gray-200 p-10 relative sm:grid sm:grid-cols-3 sm:grid-rows-3 my-20 w-full h-full z-20 border-y-2 border-amber-950">

        <div className="flex sm:col-span-1 sm:col-start-2 row-start-4 mt-10 justify-center items-center">
          <h2 className="text-xl sm:text-2xl mb-10 text-center font-extrabold text-shadow-lg text-shadow-white-200/30">
            We hope you can make it!
          </h2>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="flex flex-col col-start-2 row-start-5 justify-center items-center p-10 text-center border-1">
          <img className="w-[180px] height-auto" src="/assets/airplane_icon.png" />
          <h2 className="text-4xl font-extrabold sm:text-4xl text-shadow-lg text-shadow-white-200/30">
            RSVP here
          </h2>
        </div>


      </div>
    </div>

  )
}

export default EventDetailsCard