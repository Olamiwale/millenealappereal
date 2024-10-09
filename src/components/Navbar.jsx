import React from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import NavLink from "./NavLink";

export default function Navbar() {



 

  return (
    <div className="sticky top-0 shadow-sm bg-white h-[135px]">

    

   

      <div className="flex bg-red-600 justify-center p-3">
        <p className="font-bold">YOU FIRST SHIPPING ON ORDER COLLECTION</p>
      </div>

      <div className="justify-between items-center lg:pt-6 pt-10 px-10">
        <div className="flex justify-between ">
        <div>
          <div className="lg:hidden flex gap-10">
            <FaBars size={18} /> 
            <FaMagnifyingGlass size={18} /> 
            </div>
          <div className="lg:block hidden">
            <select className="p-2 rounded-lg text-[10px]">
              <option>NGN</option>
              <option>EUR</option>
              <option>CAN</option>
            </select>
          </div>
        </div>
        <div className="text-3xl font-bold">STORENAME</div>

        <div className="flex justify-center items-center gap-10">
        <FaMagnifyingGlass size={18} /> 
          <FaUser size={18} />
          <FaCartShopping size={18} />
        </div>
        </div>
          < NavLink />
      </div>



     
 
    </div>
  );
}
