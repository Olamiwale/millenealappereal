import React, { useEffect, useState } from "react";

const images = [
  "./hero01.png",
  "./hero02.png",
  "./hero03.png",
  "./hero04.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
    
      <img
        src={images[currentImage]}
        alt="Luxury Collection"
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000"
      />

    
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80"></div>

    
      <div className="relative flex flex-col items-center justify-center text-center h-full px-4">
        <div className="bg-white/50 opacity-80 p-10 items-center flex flex-col rounded-md">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-wider">
            Discover <span className="text-wine">Royal Elegance</span>
          </h1>
          <p className="mt-4 tracking-wider text-lg md:text-xl text-black max-w-xl">
            Step into luxury with our finest collections and redefine your style
            with 
            <span className="font-semibold text-wine ml-2">
                sophistication
            </span>
          </p>

          <button className="mt-8 bg-wine hover:bg-light-wine text-white tracking-wider px-10 w-[250px] py-3 rounded-full text-xl font-semibold transition duration-500 ease-in-out transform hover:scale-105 shadow-lg">
            <a href="/product">Explore Now</a>
          </button>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black"></div>
    </div>
  );
}
