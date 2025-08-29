import React from 'react'

const BookingCard = () => {
  return (
    <div id="booking" className="flex bg-6-1 mt-20 h-[700px] max-w-6xl m-auto overflow-hidden shadow-sm font-decorative drop-shadow-xl/50 rounded-sm border-l-12 border-double border-white">
        <div className="relative w-full">
            <div className="absolute max-w-3xl bg-6-1 inset-0 flex flex-col px-5 items-center justify-center text-white backdrop-blur-4xl drop-shadow-xl/90 text-left">
                <h2 className="z-10 m-10 text-2xl sm:text-4xl text-shadow-sm/60 text-shadow-black">Travel & Accommodation Information:</h2>
                <div>
                  
                </div>
                <h2 className="z-10 mt-10 text-md sm:text-2xl underline decoration-white text-shadow-sm/60 text-shadow-black">Hilton El Conquistador Resort</h2>
                <h2 className="z-10 mt-1 text-md sm:text-2xl text-shadow-sm/60 text-shadow-black">10000 N Oracle Rd, Tucson, AZ 85704</h2>
            </div>
        </div>
    </div>
  )
}

export default BookingCard