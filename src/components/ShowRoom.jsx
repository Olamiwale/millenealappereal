import React, { useEffect, useState } from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-black">
    
    <img
      src="./newPro02.jpg"
      alt="Luxury Collection"
      className="absolute inset-0 w-full h-full object-cover opacity-80"
    />
  
   
    <div className="absolute inset-0"></div>
  

    <div className="relative flex flex-col items-center justify-center text-center h-full px-4">

      <div className="bg-black/40 p-10 items-center flex flex-col rounded-md">
       
      <p className="mt-4 tracking-wider text-lg md:text-xl text-white max-w-xl">
        Step into luxury with our finest collections and redefine your style with MapRuby
      </p>
  
      <button className="mt-8 bg-yellow-500 w-[250px] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg">
        <a href="/product">
           Explore Now 
        </a>
       
      </button>
      </div>
      
    </div>
  
 
  </div>
  
   
  );
}

