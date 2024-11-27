import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions"; // Assuming you have these actions

import { FaTrashCan } from "react-icons/fa6";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-5 pt-10">
      <div className="md:text-xl text-sm flex justify-center m-auto font-semibold text-black bg-gray-100 w-fit p-2 mb-5">
        {cartItems.length === 0
          ? "You have no items in your Cart"
          : cartItems.length === 1
          ? "You have 1 item in your Cart"
          : `You have ${cartItems.length} items in your cart`}
      </div>

      <div className="max-w-[800px] m-auto space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-md p-4 flex justify-between items-center"
          >
            <img
              src={item.images[1]}
              className="md:w-[100px] w-16 md:h-[120px] rounded-md"
              alt={item.name}
            />

            
            <p className="font-bold md:text-xl text-sm">{item.name}</p>

            
            <p className="Size">Size: <span className="font-bold uppercase"> {item.size}</span> </p> 
            <p className="Size">Quantity: <span className="font-bold"> {item.quantity}</span> </p> 
            <p className="Size">Colour: <span className="font-bold"> {item.color}</span> </p> 
            
            <p>$ {item.price}</p>

            

            <button
              className=" text-sm p-2"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <FaTrashCan size={20} />
            </button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="max-w-[800px] m-auto flex justify-end mt-10">
          <button className="bg-green-600 text-white p-3 rounded-md font-bold">
            <a href="/checkout"> 
              Checkout
            </a>
          </button>
        </div>
      )}
    </div>
  );
}
