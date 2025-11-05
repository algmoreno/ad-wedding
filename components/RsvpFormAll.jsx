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
    <div className="grid grid-cols-1 gap-4 max-w-2xl h-auto m-auto overflow-hidden font-header ">
        <h1 className="text-center text-2xl">RSVP</h1>
        
    </div>

  )
}

export default Gallery