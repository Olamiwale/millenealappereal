import React, { useState } from "react";
import Data from "../products.json";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="relative w-full h-screen bg-black">
        <img
          src="./newPro02.jpg"
          alt="Luxury Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0"></div>

        <div className="relative flex flex-col items-center justify-center text-center h-full px-4">
          <div className="bg-black/40 p-10 items-center flex flex-col rounded-md">
            <p className="mt-4 tracking-wider text-lg md:text-xl text-white max-w-xl">
              Step into luxury with our finest collections and redefine your
              style with MapRuby
            </p>

            <button className="mt-8 bg-yellow-500 w-[250px] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg">
              <a href="/product">Explore Now</a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white flex-col lg:px-5 items-center">
        <div className="justify-center p-2 w-full pt-10 items-center flex flex-col py-5">
          {/*<p className="border-2 text-center tracking-wider uppercase p-3">
            our collection
          </p>*/}
        </div>

        <div className="px-4 py-8 grid lg:grid-cols-4 grid-cols-2 gap-6">
          {Data.slice(0, 4).map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center pb-5 group items-center"
            >
              <a href={`/product/${item.id}`}>
                <img
                  src={item.images[1]}
                  className="md:h-[350px] h-[250px] w-[300px]"
                />
              </a>

              <div className="flex flex-col justify-center items-center w-full mt-5 ">
                <p className=" pb-2 tracking-wider text-sm font-bold min-sm:pb-2-">
                  {item.name}
                </p>
                <p className=" tracking-widest text-gray-900 text-sm pb-2">
                  {" "}
                  ₦ {item.price}.00{" "}
                </p>

                <div
                  className="cursor-pointer group border-black/40 opacity-0  group-hover:opacity-100 border-[1px] w-full"
                  onClick={() => dispatch(addToCart(item))}
                >
                  <p className="uppercase p-3 text-center tracking-widest hover:bg-slate-800 hover:text-white transition-all duration-500 text-sm font-semibold">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* <a
          href="/product"
          className="hover:bg-slate-600  mb-10 bg-slate-800 uppercase text-white font-medium text-sm tracking-widest p-3"
        >
          discover more
        </a>*/}
      </div>
    </>
  );
}
