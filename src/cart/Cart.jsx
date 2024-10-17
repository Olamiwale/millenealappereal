import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div className="p-5 pt-10">
      <div className=" md:text-xl text-sm flex justify-center m-auto font-semibold text-black bg-gray-100 w-fit p-2">
        {cartItems.length === 0
          ? "You have no items in your Cart"
          : cartItems.length === 1
          ? "You have 1 item in your Cart"
          : `You have ${cartItems.length} items in your carts`}
      </div>

      <div className="max-w-[800px] m-auto">
        {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 rounded-md p-2 m-10 flex justify-between items-center"        >
          <img
            src={item.imgUrl}
            className="md:w-[100px] w-16 md:h-[120px] rounded-md"
            alt={item.name}
          />
          <p className="font-bold md:text-xl text-sm">{item.name}</p>
          <p>$ {item.price}</p>

          <button
            className="bg-red-600 text-sm p-2 rounded-md text-white font-bold"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      </div>

      
    </div>
  );
}
