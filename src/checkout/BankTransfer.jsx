import React, { useState } from "react";

export default function BankTransfer () {
  return (
    <form className="grid w-full justify-center py-7">
      <div className="space-y-10 p-8">
        <p className="tracking-wider text-2xl">Payment Detail</p>
        <div className="space-y-4">
          <label htmlFor="first-name" className="block font-medium">
            First name
          </label>

          <input
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="first-name" className="block font-medium">
            Last name
          </label>

          <input
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="first-name" className="block font-medium">
            Email
          </label>

          <input
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="country" className="block font-medium">
            Country / State
          </label>
          <input
            placeholder="Nigeria / Lagos"
            name="first-name"
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />

          <div className="flex space-x-5">
            <input
              placeholder="Postal code (Optional)"
              name="postal-code"
              type="text"
              className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
            />
            <input
              placeholder="City (Optional)"
              name="postal-code"
              type="text"
              className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="street-address" className="block font-medium">
            Street address
          </label>

          <input
            type="text"
            className="w-full rounded-sm p-4 text-gray-900 ring-1 ring-gray-300"
          />
        </div>
      </div>

      <div className="flex justify-center">
         <button className="bg-green-500 transition duration-500 hover:bg-green-600 uppercase tracking-widest font-bold text-white p-4 w-1/2">Make Payment</button>
      </div>

     
    </form>
  );
}
