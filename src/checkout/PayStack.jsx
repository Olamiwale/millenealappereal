import React,{useState} from 'react';
import Paystack from '@paystack/inline-js';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export default function PayButton() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


  const navigate = useNavigate()
  

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
            value: phoneNumber }
       
       
          
        ] 
    },
  onSuccess: (transaction) => {
    console.log(transaction);
    navigate('/payment-status')
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
    <div className='flex flex-col justify-center w-full items-center mt-6'>

       <form className='flex  flex-col md:w-[800px] w-full m-8 bg-slate-50 p-2  '>

        <div className='flex flex-col'>
          <label className='font-semibold py-2'>First Name</label>
           <input className='border-2 p-4 tracking-widest' 
        type='text' 
        placeholder='First Name'
        onChange={(e)=>setFirstName(e.target.value)} 
        value={firstName} required />
        </div>
        
       <div className='flex flex-col'>
       <label className='font-semibold py-2'>Last Name</label>
        <input className='border-2 p-4 tracking-widest' 
        type='text' 
        placeholder='Last Name'
        onChange={(e)=>setLastName(e.target.value)} 
        value={lastName} required />
       </div>

       <div className='flex flex-col'>
       <label className='font-semibold py-2'>Phone Number</label>
        <input className='border-2 p-4 tracking-widest' 
        type='text' 
        placeholder='Last Name'
        onChange={(e)=>setPhoneNumber(e.target.value)} 
        value={phoneNumber} required />
       </div>

        <div className='flex flex-col'>
        <label className='font-semibold py-2'>Email Address</label>
           <input className='border-2 p-4 tracking-widest' 
        type='email' 
        placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        
        required/>
        
        </div>

         
       </form>

       <div className='my-10 mt-16'>
       <h2 className="text-xl font-bold uppercase tracking-widest mb-4">
      Select Payment Method
    </h2>
       </div>


       <div className="border border-gray-300 md:w-[800px]  w-full rounded-md p-4 flex items-center justify-between">
        <div className='leading-10'>
          <h3 className="text-gray-800 font-bold">Pay with Paystack</h3>
          <p className="text-gray-600 text-sm">
            Pay securely using your card, bank, or mobile money.
          </p>
        </div>
        <button
          onClick={pay}
          className="bg-green-500 w-[250px] text-white font-semibold px-6 py-6 rounded-md hover:bg-green-600 transition"
        >
          Pay Now
        </button>
      </div>

     

    
      </div>
  )
}





