import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";

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
        <p className="font-bold text-[10px] text-gray-50 tracking-wider">YOU FIRST SHIPPING ON ORDER COLLECTION</p>
      </div>

      <div className="pt-5 lg:pt-6  px-10">
        <div className="flex justify-between items-center ">
          <div>
            <div className="lg:hidden flex gap-10">
              {!toggle ? (
                <FaBars onClick={nav} size={20} />
              ) : (
                <FaXmark onClick={nav} size={20} />
              )}
            </div>

            {toggle ? <MobileNav /> : ""}

            <div className="lg:block hidden">
              <select className="p-2 rounded-lg text-[10px]">
                <option>NGN</option>
                <option>EUR</option>
                <option>CAN</option>
              </select>
            </div>
          </div>

          <a href="/">
            <img
            src="./image.png "
            className="w-20"
          />
          </a>

          

          <div className="flex">
            <FaCartShopping size={20} onClick={() => navigate("/cart")} />
            <p
              className={
                cartItems.length === 0
                  ? "hidden"
                  : "bg-green-400 ml-4 mt-[-5px] rounded-full text-sm w-4 h-5 text-center absolute"
              }
            >
              {cartItems.length}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
