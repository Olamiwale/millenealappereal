import React from 'react'

export default function PayStack() {
  return (
    <form className="grid w-full justify-center py-7">
      <div className="space-y-10 p-8">
        <p className="tracking-wider text-2xl">Pay with Credit Card</p>
          <input
            placeholder='Card Number'
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
          <input
            placeholder='CVV'
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
          <input
            placeholder='Expiry Date'
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
        </div>

       
       


     
    </form>
  )
}
