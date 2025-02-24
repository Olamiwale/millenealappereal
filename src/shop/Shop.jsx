import React from "react";
import Data from "../products.json";
//import { addToCart } from "../redux/actions";
//import { useDispatch } from "react-redux";



export default function Shop() {
 // const dispatch = useDispatch();

  return (
    <div className="flex justify-center bg-white flex-col lg:px-5 items-center">
      <div className="justify-center p-2 w-full pt-10 items-center flex flex-col py-5">
       
        <p className="border-2 text-center font-bold tracking-widest uppercase my-8 p-3">our collections</p>
      </div>

      <div className="px-4 py-8 grid lg:grid-cols-4 grid-cols-2 gap-6">
        {Data.slice(0,4).map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center pb-5 group items-center"
          >
            <a href={`/product/${item.id}`}>
              <img
                src={item.images[0]}
                className="md:h-[350px] h-[250px] w-[300px]"
              />
            </a>

            <div className="flex flex-col justify-center items-center w-full mt-5 ">
             
                <p className=" pb-2 tracking-wider text-sm font-bold min-sm:pb-2-">
                  
                  {item.name}
                </p>
                <p className=" tracking-widest text-black text-sm pb-2"> ₦ {item.price}.00 </p>
            
             {/* <div className="cursor-pointer group border-black/40 opacity-0  group-hover:opacity-100 border-[1px] w-full"                
                onClick={() => dispatch(addToCart(item))}
              >
               <p className="uppercase p-3 text-center tracking-widest hover:bg-black/90 hover:text-white transition-all duration-500 text-sm font-semibold">Add to Cart</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <a
        href="/product"
        className="hover:bg-light-wine  mb-10 bg-wine w-[250px] text-center rounded-full uppercase text-white font-medium text-sm tracking-widest p-4 transition duration-500 ease-in-out transform " >
        discover more
      </a>   

      
    </div>
  );
}

