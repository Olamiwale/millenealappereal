import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/actions"; // Added actions for quantity update
import { FaTrashCan } from "react-icons/fa6";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-5 pb-[200px] pt-[50px]">
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

            <div className="flex flex-col gap-1"> 

          <p className=" md:text-xl text-sm">Name: <span className="font-bold">{item.name} </span> </p>
            <p className="Size">Size: <span className="font-bold uppercase"> {item.size}</span> </p> 
            <p className="Size">Colour: <span className="font-bold"> {item.color}</span> </p> 
            <p>Price: <span className="font-bold">  ₦ {item.price}</span></p>

            
            </div>

           

            {/* Quantity controls */}
            <div className="flex items-center space-x-2">
              <button 
                className="bg-gray-200 px-2 py-1 rounded" 
                onClick={() => dispatch(decreaseQuantity(item.id))} 
                disabled={item.quantity <= 1}>
                -
              </button>
              <p className="font-bold">{item.quantity}</p>
              <button 
                className="bg-gray-200 px-2 py-1 rounded" 
                onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
            </div>
            
            

            <button
              className="text-sm p-2"
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
            <a href="/checkout"> Checkout </a>
          </button>
        </div>
      )}
    </div>
  );
}
