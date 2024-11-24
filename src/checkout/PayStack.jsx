import React,{useState} from 'react';
import Paystack from '@paystack/inline-js';
import { useSelector } from "react-redux";

export default function PayButton() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  

  const popup = new Paystack();

  const cartItems = useSelector((state) => state.cart.cartItems);

 const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0 );
 

const pay = () => {
   popup.newTransaction({
  key: 'pk_test_e52244433a45c5f15b2245839a52713d071f88a6',
  email: email,
  amount: totalPrice * 100,
  phone: '1234567890',
 
  metadata: { 
    custom_fields: [ 
        { 
            display_name: "First Name", 
            variable_name: "first_name", 
            value: firstName}, 
            
        { 
            display_name: "Last Name", 
            variable_name: "last_name", 
            value: lastName }, 
        { 
            display_name: "Phone Number", 
            variable_name: "phone_name", 
            value: '012345678' }, 
        { 
            display_name: "Address", 
            variable_name: "address", 
            value: address }
          
        ] 
    },
  onSuccess: (transaction) => {
    console.log(transaction);
  },
  onLoad: (response) => {
    console.log("onLoad: ", response);
  },
  onCancel: () => {
    console.log("onCancel");
  },
  onError: (error) => {
    console.log("Error: ", error.message);
  }
}) 
} 
  return (
    <div className='flex flex-col justify-center mt-6'>

       <div className='flex flex-col m-8 '>
        
        <input className='border-2 p-4' 
        type='text' 
        placeholder='First Name'
        onChange={(e)=>setFirstName(e.target.value)} 
        value={firstName} />

        <input className='border-2 p-4' 
        type='text' 
        placeholder='Last Name'
        onChange={(e)=>setLastName(e.target.value)} 
        value={lastName} />

        <input className='border-2 p-4' 
        type='text' 
        placeholder='Address'
        onChange={(e)=>setAddress(e.target.value)} 
        value={address} />

        <input className='border-2 p-4' 
        type='email' 
        placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email} />

       
       </div>

      <button  onClick={pay} className='bg-green-400 flex justify-center cursor-pointer p-4 w-1/2'>PayButton </button></div>
  )
}





