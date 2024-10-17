import React,{useState} from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  const nav = () => {
    setToggle(!toggle)
  }



  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

 

  return (
    <div className="sticky top-0 shadow-lg bg-gray-100 h-[135px] z-50">
      <div className="flex bg-yellow-300 justify-center p-3">
        <p className="font-bold">YOU FIRST SHIPPING ON ORDER COLLECTION</p>
      </div>

      <div className="justify-between items-center lg:pt-6 pt-10 px-10">
        <div className="flex justify-between ">
          <div>
            <div className="lg:hidden flex gap-10">
             {!toggle ? 
             <FaBars onClick={nav} size={20} /> : 
             <FaXmark onClick={nav} size={20} />  }

              <FaMagnifyingGlass size={18} />
            </div>

              {toggle ? <MobileNav /> : ''}

            <div className="lg:block hidden">
              <select className="p-2 rounded-lg text-[10px]">
                <option>NGN</option>
                <option>EUR</option>
                <option>CAN</option>
              </select>
            </div>
          </div>

          <div className="text-3xl font-bold cursor-pointer" onClick={()=> navigate('/')}>STORENAME</div>

          <div className="flex justify-center items-center gap-10 cursor-pointer">
            <FaUser size={20} />

            <div className="flex ">
              
              <FaCartShopping size={20} onClick={()=> navigate('/cart')} />
              <p className={ cartItems.length === 0 ?'hidden' : "bg-green-400 ml-4 mt-[-5px] rounded-full text-sm w-4 h-5 text-center absolute"}>
              {cartItems.length} </p>
            </div>
            
              
        
          </div>
        </div>
       
        <NavLink />
      </div>
    </div>
  );
}
