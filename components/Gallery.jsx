import React from 'react'
import Stack from './Stack'
import { MdSwipe } from "react-icons/md";

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
        <div className="flex w-full justify-center items-center">
            <Stack
            randomRotation={false}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 300, height: 400 }}
            cardsData={images}
            />
        </div>
        <div className="flex">
          <MdSwipe size={25} className="m-auto"/>
        </div>

        <div className="h-full border-t border-gray-400 shadow-sm font-header drop-shadow-xl/50 text-center p-5">
          <h1>
            Our Love Story
          </h1>
          <p>
            It was the fall of 2022 on the second day of the Dusk music festival. 
            The night was colder than ever but hearts were to become warm with what was destined for that night. 
            Alan casually scanned the crowd and saw her-Doli-standing in line with her friends, 
            with no clue her life would change forever.
          </p>
          <p className="mt-5">
            Drawn by the spark he felt when he saw her, he finally stepped forward and introduced himself. 
            Although hesitant, she let her guard down and let the conversation unfold. 
            Alan successfully secured her phone number but not before making him work at least a little for it. 
          </p>
          <p className="mt-5">
            They exchanged a few messages the next day. Alan wasn’t sure if she felt the way he did…yet. 
            Then, one week later, his phone lit up—it was her. The excitement he felt in that moment was palpable. 
            A big smile overtook his face and he just had to let out a fist pump. 
            That very excitement he felt was soon to become the beginning of what they realized was something more. 
          </p>
          <p className="mt-5">
            Their first dates were filled with delicious pizza, laughter, and meeting Doli’s beloved dog Rani. 
            Soon texts turned into long phone calls, memories, and an unforeseen feeling they both could not ignore. 
            Early on, they both felt it: the husband-wifey material. All they had to do was let time tell.
          </p>
          <p className="mt-5">
            Time did tell.
          </p>
          <p className="mt-5">
            By the spring of 2025 Alan knew in his heart Doli was the woman he wanted to share his life with. 
            With help from his sister Paula, they started planning the perfect proposal.
          </p>
          <p className="mt-5">
            On May 16, 2025 while visiting Paula, the plan came to life which involved a romantic evening 
            together in a beautiful garden teeming with blooming rhododendrons. As they wandered together, a 
            bald eagle soared overhead. It had to be an omen. When they reached a prime spot in the garden, 
            Alan took a breath, got down on one knee, and asked Doli to marry him.
          </p>
          <p className="mt-5">
            And she said YES.
          </p>
          <p>
            The rest of the story is to be written….
          </p>             
        </div>

    </div>

  )
}

export default Gallery