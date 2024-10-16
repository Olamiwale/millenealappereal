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
    <div className="p-5">
    <div className="flex md:flex-row flex-col justify-between pt-[40px] gap-20">

      <div className="flex md:flex-row flex-col justify-evenly items-start md:w-1/2">
     
         <ul className=" lg:flex flex-col hidden justify-center gap-3">
            <li><img className="w-[70px]" src={item.imgUrl}/></li>
            <li><img className="w-[70px]" src={item.imgUrl}/></li>
            <li><img className="w-[70px]" src={item.imgUrl}/></li>
            <li><img className="w-[70px]" src={item.imgUrl}/></li>
            
        </ul>

        <div className="text-2xl space-y-3 md:hidden mb-10">
           <h1 className="font-bold text-3xl leading-[150%] tracking-[0.1em]">{item.name}</h1>
           <p className="font-bold"> STAR RATING</p>
           <p> $ {item.price}</p> 
        </div>

       
     
       <div className="md:ml-4">
        <img 
        src={item.imgUrl} 
        className="lg:w-[500px] lg:h-[550px] md:w-[380px]" 
        alt={item.name} />
        </div>
        

       
      </div>

      <div className="flex flex-1 flex-col gap-4 md:w-1/2 ">
        
        <div className="text-2xl space-y-3 md:flex flex-col hidden">
           <h1 className="md:text-3xl font-bold leading-[150%] tracking-[0.1em]">{item.name}</h1>
           <p> star rating</p>
           <p> $ {item.price}</p> 
        </div>

        <div className="mt-[20px] md:mt-0 flex flex-col justify-center items-center md:items-start uppercase leading-5 md:w-fit">
          <div className="w-full"> 
            <p className="underline py-4 font-bold">What's my size</p>
            </div>
           
            <ul className="text-2xl flex font-thin w-fit gap-4 lg:gap-5">
                <li className="border-[2px] border-black/40 py-2 px-6" >s</li>
                <li className="border-[2px] border-black/40 py-2 px-6">m</li>
                <li className="border-[2px] border-black/40 py-2 px-6">l</li>
                <li className="border-[2px] border-black/40 py-2 px-6">xl</li>
                <li className="border-[2px] border-black/40 py-2 px-6">xxl</li>
            </ul>
             <button 
             className="mt-10 w-full bg-black p-3 text-white text-xl uppercase"
             onClick={() => dispatch(addToCart(item))}
             >Add to cart</button>
        </div>

        <div className="">
          <p><i>Receive by Thur, 10th Oct  -  Mon, 14th Oct</i></p>
          <p><i>Subscribe to our mailing list for additional 15% OFF </i></p>
        </div>
       
        <div className="flex flex-col">

         

          <div className="bg-gray-100 ">
            <Accordion />
          </div>

          <div className="flex gap-2 justify-between mt-[40px] uppercase font-bold text-white">

            <div className="p-3 bg-black/70 w-full flex items-center space-x-5 justify-center"> 
            <p>Call to order</p>
            <img src="/phoneImg.png" className="w-8" />
              </div>
            <div className="bg-green-500 w-full flex justify-center items-center space-x-5"> 
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
