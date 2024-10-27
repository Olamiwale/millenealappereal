import React, { useState } from "react";
import Data from "../products.json";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";


export default function Shop() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center bg-white flex-col lg:px-20 items-center">
      <div className="justify-center p-2 w-full pt-10 items-center flex flex-col py-5">
        <p className="border-2 uppercase  p-4">
          Women gown
        </p>
      {/*  <p className="text-xl font-bold uppercase pt-10">our collection</p> */}
      </div>

      <div className="px-16 py-8 grid lg:grid-cols-4 grid-cols-2 bg-white gap-6">
        {Data.slice(8, 12).map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center pb-5 items-center"
          >
            <a href={`/product/${item.id}`}>
              <img
                src={item.imgUrl}
                className=" lg:h-[350px] md:h-[250px] h-[250px] w-[300px]"
              />
            </a>

            <div className="flex justify-between items-center w-full mt-5 ">
              <div>
                <p className="text-[10px] font-bold min-sm:pb-2-">
                  
                  {item.name}
                </p>
                <p className="text-[10px] pb-2"> NGN {item.price} </p>
              </div>
              <div className="cursor-pointer"                
                onClick={() => dispatch(addToCart(item))}
              >
                <FaCartShopping size={15} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="/product"
        className="hover:bg-slate-800 flex justify-center mb-5 bg-slate-900 item-center uppercase tracking-wider text-white text-[10px] rounded-sm font-bold p-4"
      >
        shop now
      </a>

      
    </div>
  );
}
