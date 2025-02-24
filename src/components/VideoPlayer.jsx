import React from "react";
import video from "../assets/video/v8.mp4";
import video01 from "../assets/video/v5.mp4";

export default function VideoPlayer() {
  return (
    <div className=" w-full p-5 space-x-5 flex justify-center">
      <div className="relative w-1/2 mx-auto">
        {/* Video */}
        <video
          className="w-full object-cover h-full rounded-lg shadow-lg"
          loop
          controls
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-sm p-6"></div>
      </div>

      <div className="relative w-1/2 mx-auto">
        {/* Video */}
        <video
          className="w-full object-cover h-full rounded-lg shadow-lg"
          loop
          controls
          autoPlay
          muted
        >
          <source src={video01} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-sm p-6">
         
          
          <p className="mt-2"> Aisosa</p>
         

         

          

         
        </div>
      </div>
    </div>
  );
}
