"use client"
import React from 'react';
import banner1 from '../../../../../public/frontend/Banner/Banner1.webp';
import banner2 from '../../../../../public/frontend/Banner/Banner12.webp'; 


const Banner1 = () => {
  return (
    <div
      className="relative w-full h-[110vh] overflow-hidden "
      style={{
        backgroundImage: `url(${banner1.src})`, // Default background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-50" />
      <div className="absolute md:top-1/2 top-[10rem] md:left-[3rem] transform -translate-y-1/2 text-blue-400 p-5">
        <h1 className="text-3xl md:text-6xl">Wellness</h1>
        <h1 className="text-3xl md:text-4xl ml-5">by Nature</h1>
        <p className="mt-10 text-lg md:text-xl w-[20rem] md:w-[40rem] lg:w-[50rem]">
          Zhou Nutrition started with a small group of runners, yogis, athletes, and outdoor enthusiasts all striving for greatness in our own unique ways.
        </p>
      </div>

     
    </div>
  );
}

export default Banner1;