import React,{useState} from "react";
import Data from '../products.json'
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";


export default function Shop() {

  const dispatch = useDispatch();
  

  return (
    <div className="flex justify-center bg-gray-100 my-10 flex-col items-center">
      <div className="justify-center w-full pt-20 items-center flex flex-col space-y-5">
      
        <p className="text-2xl font-semibold">Explore the our amazing products</p>
      </div>

      <div className=" grid lg:grid-cols-4 grid-cols-2 justify-between mt-10 gap-6">
        {Data.slice(7, 11).map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center pb-5 items-center shadow-md"
          >
            <a href={`/product/${item.id}`}>
              <img src={item.imgUrl} className="h-[300px] w-[250px]" />
            </a>

            <div className="flex justify-between w-full px-5 mt-10 ">
              <div> 
            <p className=""> {item.name} </p>
            <p className="font-bold pt-3"> $ {item.price} </p> 
              </div>
            
            <div className="hover:bg-blue-300 w-[40px] h-[40px] rounded-full flex items-center justify-center"
            onClick={() => dispatch(addToCart(item))} >
             <FaCartShopping  size={20} />
            </div> 
            </div>

           
          </div>
        ))}
      </div>

      <div className="py-20">
        <Link to='/product'>
         <button className="hover:bg-black/80 bg-black w-[300px] tracking-wider text-white text-xl font-bold p-4">
          DISCOVER MORE
        </button>
        </Link>
       
      </div>
    </div>
  );
}



