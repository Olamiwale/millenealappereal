import React from "react";

export default function Xmas () {
  return (
    <div className="bg-red-700 text-white py-10 px-6 text-center">
     
      
      <div className="flex justify-center items-center">
         <div className="mt-8 flex w-1/2 justify-center  space-x-4">
          <img src="./xmas.png" alt="xmas" className="h-auto md:h-[200px]" />
          <img src="./xmas.png" alt="xmas" className="h-auto hidden md:block  md:h-[200px]" />
         
        
         
        </div>

        <div className="w-1/2 ">
          
        <h1 className="md:text-5xl text-3xl font-bold mb-4">
          🎄 Merry Christmas! 🎁
        </h1>
        <p className="text-lg lg:text-2xl mb-6">
          Thank you for being part of our journey. Wishing you and your loved ones a holiday season filled with joy, love, and laughter.
        </p>

       
        </div>

        

       
      </div>
    </div>
  );
};

