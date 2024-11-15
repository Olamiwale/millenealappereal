import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/actions"; // Assuming you have these actions

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
              src={item.imgUrl}
              className="md:w-[100px] w-16 md:h-[120px] rounded-md"
              alt={item.name}
            />
            <p className="font-bold md:text-xl text-sm">{item.name}</p>
            <p>$ {item.price}</p>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-300 text-lg p-1 rounded-md"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                -
              </button>
              <span className="font-bold">{item.quantity}</span>
              <button
                className="bg-gray-300 text-lg p-1 rounded-md"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>
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
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
