import React, { useState } from "react";

export default function BankTransfer () {
  return (
    <div className="border border-gray-300 md:w-[800px] w-full mt-20 rounded-md p-4">
        <h3 className="text-gray-800 font-bold mb-2">
          Pay via Direct Bank Transfer
        </h3>
        <p className="text-gray-600 text-sm leading-10 mb-4">
          Make payment to account below and send proof of payment via
          WhatsApp to <span className="font-bold">+234 812 345 6789</span>.
        </p>
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="text-sm text-gray-700 tracking-widest leading-10">
            <strong>Bank Name:</strong> Example Bank <br />
            <strong>Account Name:</strong> MapByRuby <br />
            <strong>Account Number:</strong> 1234567890
          </p>
        </div>
       
      </div>
  );
}
