import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions"; // Assuming you have these actions

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
            className="bg-gray-100 rounded-md p-4 flex justify-between items-center"
          >
            <img
              src={item.images}
              className="md:w-[100px] w-16 md:h-[120px] rounded-md"
              alt={item.name}
            />
            <p className="font-bold md:text-xl text-sm">{item.name}</p>
            <p className="text-sm">Size: {item.size}</p> {/* Display size */}
            <p className="text-sm">Size: {item.quantity}</p> {/* Display quatity */}
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
