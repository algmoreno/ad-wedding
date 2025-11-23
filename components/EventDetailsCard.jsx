import React from 'react'
import Balatro from './Balatro';
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const EventDetailsCard = () => {
  return (
    <div className="w-full sm:min-h-[1100px] overflow-hidden font-header drop-shadow-sm">

      { /* Shared background */}
      <div className="flex absolute inset-0">
        <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />
        <div className="absolute inset-0 balatro-custom pointer-events-none" />
      </div>

      {/*Event Details */}
      <div id="details" className="relative sm:grid sm:grid-cols-6 sm:grid-rows-2 gap-10 w-full h-full mt-20 z-20 p-5">

        {/* Top row: date spans both columns */}
        <div className="flex col-start-4 col-end-7 mb-5 justify-end items-center">
          <div className="flex w-full h-full backdrop-blur-[2px] items-center align-middle justify-center">
            <h2 className="m-auto text-2xl sm:text-4xl text-center font-extrabold text-black text-shadow-sm text-shadow-black">
              Saturday, April 18, 2026
            </h2>
          </div>

        </div>

        {/* Row 1, Column 1: Event 1 */}
        <div className="bg-5 flex flex-col col-start-1 col-end-4 row-start-1 justify-center items-center p-10 border-4 border-black text-red-900 outline-2 outline-offset-8 backdrop-blur-[6px] shadow-2xl">
          <h2 className="text-xl font-extrabold sm:text-2xl text-shadow-lg text-shadow-white-200/30">
            9:15 am
          </h2>
          <h2 className="p-10 text-3xl text-center font-extrabold sm:text-4xl mt-5 text-red-900 text-shadow-lg text-shadow-white-200/30">
            Ceremony and Lunch
          </h2>
          <h2 className="text-xl text-center font-extrabold sm:text-2xl mt-5 text-shadow-lg text-shadow-white-200/30">
            Sunset Point
          </h2>
          <h2 className="text-xl text-center font-extrabold sm:text-2xl mt-2 text-shadow-lg text-shadow-white-200/30">
            Hilton El Conquistador Resort
          </h2>
          <h1 className="text-xl font-extrabold sm:text-2xl mt-2 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ
          </h1>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="bg-5 flex flex-col col-start-4 col-end-7 row-start-2 justify-center items-center p-10 text-center border-4 border-black text-red-900 outline-2 outline-offset-8 backdrop-blur-[6px] shadow-2xl">
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

        {/* <div className="flex flex-col col-start-4 col-end-5 row-start-2 bg-2 h-full"></div>
        <div className="flex flex-col col-start-2 col-end-4 row-start-3 bg-2 h-full"></div> */}


      </div>

      {/*Travel & Accommodation Section */}
      <div id="t&a" className="relative sm:grid sm:grid-cols-6 sm:grid-rows-3 gap-8 w-full h-full z-20 mb-20">

        <div className="flex sm:col-span-4 sm:col-start-2 row-start-4 mt-10 justify-center">
          <h2 className="text-2xl sm:text-4xl text-center font-extrabold text-black text-shadow-sm text-shadow-black ">
            Travel & Accommodation
          </h2>
        </div>

        {/* Row 2, Column 2: Event 2 */}
        <div className="flex flex-col col-start-1 col-end-4 row-start-5 justify-center items-center p-10 text-center backdrop-blur-[6px]">
          <img className="w-[180px] sm:mt-10 height-auto" src="/assets/airplane_icon.png" />
          <h2 className="text-2xl font-extrabold sm:text-4xl text-shadow-lg text-shadow-sm text-shadow-black/30">
            Tucson International Airport
          </h2>
          <h2 className="text-xl font-extrabold sm:text-2xl mt-5 text-gray-900 text-shadow-lg text-shadow-white-200/30">
            7250 S Tucson Blvd
          </h2>
          <h1 className="text-xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ 85756
          </h1>
        </div>

        <div className="flex flex-col col-start-4 col-end-7 row-start-5 justify-center items-center p-10 text-center">
        <div className="bg-hotel h-[500px] w-full rounded-sm"></div>
          
          <h2 className="text-2xl font-extrabold sm:text-4xl mt-5 text-gray-900 text-shadow-sm text-shadow-black/30">
            Hilton El Conquistador Resort
          </h2>
          <h2 className="text-xl font-extrabold sm:text-2xl mt-5 text-shadow-lg text-shadow-white-200/30">
            10000 N Oracle Rd
          </h2>
          <h1 className="text-xl font-extrabold sm:text-2xl text-gray-900 text-shadow-lg text-shadow-white-200/30">
            Tucson, AZ 85704
          </h1>
          <h1 className="font-primary text-xl font-extrabold sm:text-2xl mt-5 text-blue-600 underline decoration-1 text-shadow-lg text-shadow-white-200/30">
          <a target="_blank" href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=TUSHTHH&arrivalDate=2026-04-17&departureDate=2026-04-19&groupCode=PMW417&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink">Book your stay</a>
          </h1>

        </div>

      </div>

      {/* Contact Section
      <div className="flex justify-center items-center">
        <h2 className="m-auto font-primary text-xl sm:text-xl text-center font-extrabold text-shadow-lg text-shadow-white-200/30">
          For any questions contact: admatel.wedding@gmail.com
        </h2>
      </div> */}

      {/*RSVP and Contact Section */}
      <div className="relative bg-engagement-3 rounded-sm p-10 text-white sm:grid sm:grid-cols-3 sm:grid-rows-3 my-20 w-full h-[500px] z-20 border-y-2 border-amber-950">

        {/* RSVP Box */}
        <div className="flex flex-col col-start-1 col-end-4 row-start-1 min-h-[250px] m-auto backdrop-blur-md rounded-md">
          <div className="pb-2 justify-center items-center p-10 text-center rounded-sm">
            <a className="block text-4xl font-extrabold sm:text-4xl text-shadow-lg text-shadow-white-200/30" href="/rsvp"> 
              RSVP 
              <LiaExternalLinkAltSolid style={{ color: 'lightblue' }} className="m-auto" size={30}/>
            </a>
            <h2 className="text-xl sm:text-2xl mt-5 text-white text-center font-extrabold text-shadow-lg text-shadow-white-200/30">
              We hope you can make it!
            </h2>
          </div>
        </div>

        {/* Contact text fixed to bottom center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white w-full flex justify-center">
          <h2 className="font-primary text-black text-xl sm:text-2xl text-center font-extrabold text-shadow-lg text-shadow-white-200/30">
            For any questions contact: admatel.wedding@gmail.com
          </h2>
        </div>

      </div>

    </div>

  )
}

export default EventDetailsCard