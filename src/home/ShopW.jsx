import React,{useState} from "react";
import Data from '../products.json'
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";


export default function ShopW() {

  const dispatch = useDispatch();
  

  return (
    <div className="p-8 flex justify-center flex-col items-center">
      <div className="justify-center items-center flex flex-col space-y-5 pb-20 pt-10">
        <p>FALL WINTER' 24</p>
        <p className="text-xl font-semibold">THE GRACE TO DO IT ALL</p>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 justify-between gap-6">
        {Data.slice(5, 9).map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center uppercase shadow-md"
          >
            <a href={`/product/${item.id}`}>
              <img src={item.imgUrl} className="h-[300px] w-[250px] shadow-md shadow-black" />
            </a>

            <p className="py-3"> {item.name} </p>
            <p className="pb-3"> $ {item.price} </p>
            <button 
            className="w-full p-3 border bg-gray-200 hover:bg-gray-400"
            onClick={() => dispatch(addToCart(item))}
           

            >
              QUICK ADD
            </button>
          </div>
        ))}
      </div>

      <div className="py-20">
        <Link to='/product'>
         <button className="bg-black text-white font-semibold p-3 px-8">
          DISCOVER MORE
        </button>
        </Link>
       
      </div>
    </div>
  );
}



