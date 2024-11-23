import React, { useEffect, useState } from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-black">
      <img
        src="./bimg.jpg"
        alt="Luxury Collection"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/2via-black/20 to-black/80"></div>

      <div className="relative  flex flex-col items-center justify-center text-center h-full px-4">
        <div className="bg-black opacity-80 p-10 items-center flex flex-col rounded-md">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wider">
            Discover <span className="text-yellow-400">Royal Elegance</span>
          </h1>
          <p className="mt-4 tracking-wider text-lg md:text-xl text-white max-w-xl">
            Step into luxury with our finest collections and redefine your style
            with
            <span className="font-semibold text-yellow-400">
              {" "}
              sophistication.
            </span>
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg">
            <a href="/product">Explore Now</a>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black"></div>
    </div>
  );
}
