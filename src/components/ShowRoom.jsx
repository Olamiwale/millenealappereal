import React from "react";
import VideoPlayer from "./VideoPlayer";

export default function ShowRoom() {
  return (
    <div>
      
      <div className=" mb-5">
        <div className="flex justify-center">
          <img src="./bimg2.png" />
        </div>

        <div className="flex w-full justify-center">
          {/*<h2 className="text-center border-2 border-slate-900 mt-10 w-fit p-2  uppercase">
            Best women gown
          </h2>*/}
        </div>

        <div className="p-10 space-x-5 grid grid-cols-2">
          <img src="./bimg3.jpg" />
          <img src="./bimg4.jpg" />
        </div>

        <div className="flex justify-center">
          <a
            href="/product"
            className="hover:bg-slate-800 w-fit flex justify-center bg-slate-900 item-center uppercase tracking-wider text-white text-[10px] rounded-sm font-bold p-4"
          >
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
}
