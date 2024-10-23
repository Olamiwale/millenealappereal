import React, { useState } from "react";
import Data from "../products.json";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center bg-white flex-col items-center">
      <div className="justify-center p-2 w-full pt-10 items-center flex flex-col py-5">
        <p className="text-xl font-bold uppercase bg-slate-700 text-white p-5">
          shop now
        </p>
        <p className="text-xl font-bold uppercase pt-10">our collection</p>
      </div>

      <div className="px-16 py-8 grid lg:grid-cols-4 grid-cols-2 bg-white gap-6">
        {Data.slice(8, 12).map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center pb-5 items-center"
          >
            <a href={`/product/${item.id}`}>
              <img src={item.imgUrl} className=" h-[250px] w-[300px]" />
            </a>

            <div className="flex justify-between w-full px-5 mt-5 ">
              <div>
                <p className="text-[10px] font-bold pb-2"> {item.name} </p>
                <p className="text-[10px] pb-2"> $ {item.price} </p>
              </div>
            </div>
            <div
              className="uppercase border-2 w-full flex items-center p-2 justify-center cursor-pointer"
              onClick={() => dispatch(addToCart(item))}
            >
              Quick Add
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

      <div className="p-5">

        <div className="flex justify-center">
           <img src="https://i.pinimg.com/originals/ac/62/16/ac6216b513457c0db1d9a3db4f9e4920.jpg" />
        </div>
        

         <div className="flex w-full justify-center">
          <h2 className="text-center border-2 border-slate-900 mt-10 w-fit p-4 text-xl font-bold uppercase"> top Women blouse</h2>
         </div>

        

         <div className="p-10 grid grid-cols-2">
       
        <img src="https://i.pinimg.com/originals/53/73/6a/53736aa8c0e482ee8621a90b4aa44cb4.jpg" />
        <img src="https://cdna.lystit.com/photos/8187-2015/11/09/tularosa-black-x-revolve-lace-up-blouse-product-1-149349038-normal.jpeg" />
       
      </div>

      <div className="flex justify-center">
        <a
        href="/product"
        className="hover:bg-slate-800 w-fit flex justify-center bg-slate-900 item-center uppercase tracking-wider text-white text-[10px] rounded-sm font-bold p-4"
      >
        shop now
      </a> 
      </div>


     
      </div>


     
    </div>
  );
}
