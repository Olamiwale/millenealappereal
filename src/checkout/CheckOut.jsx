import React from "react";
import { useSelector } from "react-redux";
import PayStack from "./PayStack";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
    
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

    
      <div className="bg-gray-100 p-5 rounded-md mb-6">
        
            <ul className="mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2">
                  <div className="flex items-center tracking-widest space-x-5">
                    <img src={item.images[0]} className="w-20"/>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600 tracking-widest">
                      {item.quantity} × ₦{item.price}
                    </p>
                  </div>
                  <p className="font-medium">
                    ₦{(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex justify-between mt-4">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg font-bold">₦{totalPrice.toFixed(2)}</p>
            </div>
      </div>
      <PayStack />
    </div>
  );
}


