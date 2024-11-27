import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";





export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const nav = () => {
    setToggle(!toggle);
  };

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);


  const location = useLocation()
  function matchRoute (route) {
    if(route === location.pathname){
      return true
    };
  }

  return (
    <div className="sticky top-0 shadow-lg bg-slate-200 z-50">
      <div className="flex bg-slate-900 justify-center p-3">
        <p className="font-bold text-[10px] text-gray-50 tracking-wider">
          YOU FIRST SHIPPING ON ORDER COLLECTION
        </p>
      </div>

      <div className=" container mx-auto px-10 pb-5  md:px-20">
        <div className="flex justify-between items-center ">
          <div>
            <div className="md:hidden cursor-pointer flex gap-10">
              {!toggle ? (
                <FaBars className="transition-all duration-500 " onClick={nav} size={20} />
              ) : (
                <FaXmark onClick={nav} size={20} />
              )}
            </div>

            {/*<div>{toggle ? <MobileNav /> : ""}</div>*/}

            <div className="md:block hidden">
              <select className="p-2 rounded-lg text-[10px]">
                <option>NGN</option>
                <option>EUR</option>
                <option>CAN</option>
              </select>
            </div>
          </div>

          <a href="/">
            <img src={logo} className="w-20 md:w-16" />
          </a>

          <div className="flex items-center lg:gap-[50px] gap-8">
            {/*<FaUser onClick={'/'} size={20} />*/}

            <div className="flex cursor-pointer p-2">
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
      
          <ul className={`absolute bg-slate-200 w-full justify-center items-start transition-all duration-[800ms] ease-in-out px-10 md:pl-20 py-5 left-0 ${
    toggle
      ? 'lg:hidden translate-y-0 opacity-100'
      : 'hidden lg:hidden translate-y-full opacity-0'
  }`}>

          <li onClick={() => { nav();  navigate("/")}} className="border-b-2 p-3 tracking-widest font-semibold cursor-pointer">
            Home
          </li>
          <li onClick={() => { nav(); navigate("/product")}} className="border-b-2 p-3 tracking-widest font-semibold cursor-pointer">
            Shop
          </li>
          <li onClick={() => { nav(); navigate("/contact")}} className="border-b-2 p-3 tracking-widest font-semibold cursor-pointer">
            Size Chart
          </li>
          </ul> 


          <div className="md:flex justify-center hidden ">
            <ul className="flex space-x-10 ">
              <li  className={`cursor-pointer font-semibold text-black ${
                matchRoute("/") && "text-slate-400"
              }`} onClick={() => navigate('/')} >Home</li>
              <li  className={`cursor-pointer font-semibold text-black ${
                matchRoute("/product") && "text-slate-400"
              }`} onClick={() => navigate('/product')} >Shop</li>

              <li  className={`cursor-pointer font-semibold text-black ${
                matchRoute("/size") && "text-slate-400"
              }`} onClick={() => navigate('/size')} >Size Chart</li>
              
            </ul>
          </div>

      </div>
    </div>
  );
}
