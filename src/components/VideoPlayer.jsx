import React from "react";
import video from "../assets/video/v1.mp4";
import video01 from "../assets/video/v5.mp4";

export default function VideoPlayer() {
  return (
    <div className=" w-full p-5 space-x-5 flex justify-center">
      <video className="w-1/2   h-auto" loop controls autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="relative w-1/2 mx-auto">
      {/* Video */}
      <video className="w-full object-cover h-full rounded-lg shadow-lg" loop controls autoPlay muted>
        <source src={video01} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-sm p-6">

        
        <h2 className="text-sm font-bold mt-[100px] text-red-400 ">💖Valentine Special 💖</h2>
        <p className="font-extrabold text-red-500">-25% OFF</p>
        <p className="mt-2"> Aisosa</p>
        <p className="font-semibold text-yellow-300">Size: 10</p>
     
        <p className="font-semibold">Available Colors: Mint, Purple</p>

        <p className="font-bold text-green-300">Price: ₦40,000 / $35</p>

          <p className=" mt-3 text-sm italic">Offer valid until Feb 7th, 2025</p>
      </div>
    </div>

      
    </div>
  );
}
