import React from "react";
import { useSelector } from "react-redux";
import PayStack from "./PayStack";
import BankTransfer from "./BankTransfer";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
    
  );

  return (
    <div className="p-8 justify-center w-full items-center flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

    
      <div className="bg-gray-100 p-5 md:w-[800px] w-full rounded-md mb-6">
        
            <ul className="mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b-2 border-gray-200 mb-2">
                  <div className="flex items-center tracking-widest mt-5 space-x-5">
                     <img src={item.images[0]} className="w-36"/>
                    <div className="flex flex-col space-y-5">
                      
                       <p className="font-bold">Name: <span className="font-semibold">{item.name} </span> </p>
                       <p className="font-bold">Quantity: {item.quantity}</p>
                       <p className="font-bold">Colour: {item.color}</p>
                       <p className="font-bold">Price: ₦ {item.price}.00</p>

                     
                    </div>
         
                  </div>
                  <div className="font-medium tracking-widest space-y-4">
                    <p className="font-bold text-gray-500">  {item.quantity} × ₦{item.price}</p>
                    <p>  ₦ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex justify-between mt-4">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg tracking-widest font-bold">₦{totalPrice.toFixed(2)}</p>
            </div>
      </div>

      
      <PayStack />
      <BankTransfer />





    </div>
  );
}


