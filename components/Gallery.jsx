import React from 'react'
import Stack from './Stack'

const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
  ];


const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-4xl h-[700px] m-auto overflow-hidden font-header ">
        <div className="flex w-full items-center">
            <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 400, height: 400 }}
            cardsData={images}
            />
        </div>
        <div className="shadow-sm font-header drop-shadow-xl/50 rounded-sm border-8 border-double border-gray-900">
            <p>
                This story begins.
            </p>
        </div>

    </div>

  )
}

export default Gallery