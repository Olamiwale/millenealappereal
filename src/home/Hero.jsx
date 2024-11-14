import React, { useEffect, useState } from "react";

export default function Hero() {
  return (
    <>
     <div className="flex flex-col  justify-center h-full items-center ">
      <img src="./bimg.jpg" className="w-full h-auto object-cover " />
    </div>

    <div className="fixed bg-green-500/80 hover:bg-green-600 transition-all duration-500 right-5 p-4 rounded-full bottom-[8%] ">
      <a  href="https://wa.me/+2347056881825?text=Hello%20there!" target="_blank" className="flex items-center space-x-5 group ">
         <img src="./whatsapp.png" className="w-8" />
        <p className="font-semibold text-white text-[15px]"> How Can We Help You</p> 
       
      </a>
     
      
      </div>
    </>
   
  );
}
