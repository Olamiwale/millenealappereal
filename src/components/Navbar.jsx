import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const nav = () => {
    setToggle(!toggle);
  };

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="sticky top-0 shadow-lg bg-slate-200 z-50">
      <div className="flex bg-slate-900 justify-center p-3">
        <p className="font-bold text-[10px] text-gray-50 tracking-wider">
          YOU FIRST SHIPPING ON ORDER COLLECTION
        </p>
      </div>

      <div className=" container mx-auto px-10  md:px-20">
        <div className="flex justify-between items-center ">
          <div>
            <div className="lg:hidden flex gap-10">
              {!toggle ? (
                <FaBars onClick={nav} size={20} />
              ) : (
                <FaXmark onClick={nav} size={20} />
              )}
            </div>

            {/*<div>{toggle ? <MobileNav /> : ""}</div>*/}

            <div className="lg:block hidden">
              <select className="p-2 rounded-lg text-[10px]">
                <option>NGN</option>
                <option>EUR</option>
                <option>CAN</option>
              </select>
            </div>
          </div>

          <a href="/">
            <img src={logo} className="w-20 md:w-32" />
          </a>

          <div className="flex items-center lg:gap-[50px] gap-8">
            {/*<FaUser onClick={'/'} size={20} />*/}

            <div className="flex">
              <FaCartShopping size={20} onClick={() => navigate("/cart")} />
              <p
                className={
                  cartItems.length === 0
                    ? "hidden"
                    : "bg-green-400 ml-4 mt-[-5px] rounded-full text-sm w-4 h-5 text-center absolute"
                }
              >
              
                {cartItems.length}
              </p>
            </div>
            
          </div>
        </div>

       
          <ul className={toggle ? 'lg:hidden absolute bg-slate-200 w-full justify-center items-start px-10 md:pl-20 py-5 left-0 ' : 'hidden'}>
          <li onClick={() => { nav();  navigate("/")}} className="border-b-2 p-3 uppercase cursor-pointer">
            Home
          </li>
          <li onClick={() => { nav(); navigate("/product")}} className="border-b-2 p-3 uppercase cursor-pointer">
            Product
          </li>
          <li onClick={() => { nav(); navigate("/contact")}} className="border-b-2 p-3 uppercase cursor-pointer">
            Contact
          </li>
          </ul> 
      

       

      </div>
    </div>
  );
}
