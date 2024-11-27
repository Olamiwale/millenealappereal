import React, { useEffect, useState } from "react";

export default function Hero() {
  return (

    <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-10 px-6 text-center">
  <h2 className="text-3xl font-bold text-white mb-4">
    Stay Updated with Our Latest Offers!
  </h2>
  <p className="text-white text-lg mb-6">
    Sign up for our newsletter and be the first to know about exclusive deals and new arrivals.
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-3 rounded-md w-full sm:w-auto sm:flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
    <button className="bg-yellow-400 text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition">
      Subscribe Now
    </button>
  </div>
  <p className="text-white mt-6 text-sm">
    We respect your privacy. Unsubscribe anytime.
  </p>
</div>

   
  );
}

{ /*   <div className="relative w-full h-screen bg-black">
    
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
  
 
  </div>*/}
  
