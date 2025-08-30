import React from 'react'

const BookingCard = () => {
  return (
    <div id="booking" className="flex bg-6-1 mt-20 h-[1000px] max-w-6xl m-auto overflow-hidden shadow-sm font-decorative drop-shadow-xl/50 rounded-sm border-l-12 border-double border-white">
        <div className="relative w-full">
            <div className="absolute max-w-3xl bg-6-1 inset-0 flex flex-col px-5 items-center justify-center text-white backdrop-blur-4xl drop-shadow-xl/90 text-left">
                <h2 className="z-10 m-10 text-2xl sm:text-4xl text-shadow-sm/60 text-shadow-black">Travel & Accommodation Information:</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <img className="w-auto mt-10 height-auto border-1" src="/assets/desert.jpg" />
                  <div className="text-center sm:mt-20">
                    <h2 className="z-10 sm:mt-10 text-md sm:text-2xl underline underline-offset-2 decoration-white decoration-[.5px] text-shadow-sm/30 text-shadow-black ">Hilton El Conquistador Resort</h2>
                    <h2 className="z-10 mt-1 text-md sm:text-2xl text-shadow-sm/30 text-shadow-black">10000 N Oracle Rd, Tucson, AZ 85704</h2>
                  </div>
                  <img className="m-auto w-[180px] mt-10 height-auto" src="/assets/airplane_icon.png" />
                  <div className="text-center sm:mt-20">
                    <h2 className="z-10 text-lg sm:text-2xl underline underline-offset-2 decoration-white decoration-[.5px] text-shadow-sm/30 text-shadow-black">Tucson International Airport</h2>
                    <h2 className="z-10 mt-1 text-lg sm:text-2xl text-shadow-sm/30 text-shadow-black">7250 S Tucson Blvd, Tucson, AZ 85756</h2>
                  </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default BookingCard