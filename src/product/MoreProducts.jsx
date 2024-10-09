import React from "react";
import { product } from "../data";


export default function MoreProduct() {


  return (
    <div className="p-8 flex justify-center flex-col items-center">
      <div className="justify-center items-center flex flex-col uppercase pb-20 pt-10">
        <p>you may also like this</p>
     
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 justify-between gap-4">
        {product.slice(0, 4).map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center uppercase"
          >
            <a
              onClick={() => handleItemClick(item)}
              href={`/product/${item.id}`}
            >
              <img src={item.imgUrl} className="h-[250px] w-[210px] shadow-md shadow-black" />
            </a>

            <p className="py-3"> {item.name} </p>
            <p className="pb-2"> $ {item.price} </p>
            <button className=" border-1 w-full p-3 border-black ">
              QUICK ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


