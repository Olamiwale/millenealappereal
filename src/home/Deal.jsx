import React from "react";
import bg from "../assets/imagebg2.png";
import dealBg from "../assets/deal.png";

export default function Deal() {
  return (
    <div className="flex flex-col justify-between items-center bg-gradient-to-r from-gray-200 to-gray-300">


      <div className="flex items-center">
        
          <img src={dealBg} className="w-64" alt="Product" />
          <div>
            <p className="bg-white mb-10 uppercase text-red-500 p-4 rounded-tr-[10px] rounded-bl-[10px] font-bold">Deal of the week</p>
            <p>Deal of the week</p>
            
            <button className="bg-red-500 px-5 p-2 rounded-lg text-white uppercase font-bold tracking-wide">%50 off</button>
          </div>
          
      </div>

     
    </div>
  );
}
