import { useParams } from "react-router-dom";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

import Data from '../products.json'
import MoreProducts from "./MoreProducts";
import Accordion from "../components/Accordion";

export default function ProductDetails() {
  const { id } = useParams();

  const item = Data.find((item) => item.id === id);

  useEffect(() => {
    return () => { }
  }, [])

  const dispatch = useDispatch();

  

  return (
    <div>
    <div className="p-8 mb-8 flex md:flex-row flex-col justify-between pt-[40px] gap-20">

      <div className="flex md:flex-row flex-col justify-evenly items-start md:w-1/2">

        <div className="text-2xl space-y-3 md:hidden mb-10">
           <h1 className="font-bold text-xl tracking-[0.5px]">{item.name}</h1>
           <p className="text-md leading-3"> Price {item.price}</p> 
        </div>

       
     
       <div className="md:ml-4 flex justify-center">
        <img 
        src={item.imgUrl} 
        className="lg:w-[500px] lg:h-[550px] md:w-[380px] w-full" 
        alt={item.name} />
        </div>
        

       
      </div>

      <div className="flex flex-1 flex-col gap-4 md:w-1/2 ">
        
        <div className="text-2xl space-y-3 md:flex flex-col hidden">
           <h1 className="md:text-3xl font-bold leading-[150%] tracking-[0.1em]">{item.name}</h1>
           <p> star rating</p>
           <p> $ {item.price}</p> 
        </div>

        <div className="md:mt-0 flex flex-col md:justify-center  md:items-start uppercase leading-5 md:w-full">
          <div className="w-full"> 
            <p className="underline py-4 font-bold">Available in size</p>
            </div>
           
            <ul className="flex font-thin w-fit gap-4 lg:gap-5">
                <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]" >s</li>
                <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">m</li>
                <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">l</li>
                <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">xl</li>
                <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">xxl</li>
            </ul>
             <button 
             className="mt-10 w-full bg-black p-3 text-white font-bold uppercase"
             onClick={() => dispatch(addToCart(item))}
             >Add to cart</button>
        </div>

             
        <div className="flex flex-col">

         

          <div className="bg-gray-100 ">
            <Accordion />
          </div>

          <div className="flex gap-2 justify-between mt-[40px] uppercase font-bold text-white">

            <div className="p-3 bg-yellow-600 hover:bg-yellow-500 rounded-md w-full flex items-center space-x-5 justify-center"> 
            <p>+23456789011</p>
            <img src="/phoneImg.png" className="w-8" />
              </div>
            <div className="bg-green-600 hover:bg-green-500 rounded-md transition duration-500 cursor-pointer w-full flex justify-center items-center space-x-5"> 
              <p>Whatsapp</p>
              <img src="/whatsapp.png" className="w-8" />
              </div>

          </div>

        
        </div>
  
      </div>

    </div>
    < MoreProducts />
    </div>
  );
}
