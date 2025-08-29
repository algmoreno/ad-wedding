import React from 'react'
import Stack from './Stack'

const images = [
    { id: 1, img: "/assets/ad-1.jpg" },
    { id: 2, img: "/assets/ad-2.jpg" },
    { id: 3, img: "/assets/ad-3.jpg" },
    { id: 4, img: "/assets/ad-4.jpg" },
    { id: 5, img: "/assets/ad-5.jpg" },
    { id: 6, img: "/assets/ad-6.jpg" },
    { id: 7, img: "/assets/ad-7.jpg" },
    { id: 8, img: "/assets/ad-8.jpg" },
    { id: 9, img: "/assets/ad-9.jpg" },
    { id: 10, img: "/assets/ad-10.jpg" },
  ];


const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-2xl h-[700px] m-auto overflow-hidden font-header ">
        <div className="flex w-full justify-center items-center">
            <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 300, height: 400 }}
            cardsData={images}
            />
        </div>
        <div className="shadow-sm font-header drop-shadow-xl/50 rounded-sm border-8 border-double border-gray-900">
            <p className="p-5">
                This story begins.
            </p>
        </div>

    </div>

  )
}

export default Gallery