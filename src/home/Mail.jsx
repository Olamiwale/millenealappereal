import React from 'react'

export default function Mail() {
  return (
    <div className='bg-gray-700 justify-center flex  flex-col items-center text-white md:p-[80px] py-[80px] px-20'>
        <div className='space-y-5 flex flex-col justify-center items-center'>
            <p>SIGN UO TO UNLOCK</p>
            <p>15% OFF YOUR FIRST PURCHASE</p>
            <p className='text-sm'>DISCOVER EXCLUSIVE NEW COLLECTIONS</p>
        </div>
        <form className='flex justify-center flex-col md:flex-row gap-5 py-10 w-full'>
            <input 
            type='email' 
            className='p-3 w-full md:w-[400px] bg-gray-700 border' 
            placeholder='Enter Your Email'/>
            <button className='bg-white font-semibold w-full md:w-[120px] text-black p-3'>SUBSCRIBE</button>
        </form>
    </div>
  )
}
