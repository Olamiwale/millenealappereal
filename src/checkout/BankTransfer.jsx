import React from "react";

export default function BankTransfer() {
  return (
    <div className="border border-gray-300 md:w-[800px] w-full mt-10 rounded-md p-4">
      <h3 className="text-gray-800 uppercase tracking-wider font-bold mb-2">
        Pay via Direct Bank Transfer
      </h3>

      <div className="rounded-md p-4 mb-4">
        <div className="border border-gray-300 my-3 rounded-md p-2 ">
          <p className="text-sm text-gray-700 tracking-widest leading-10">
            <strong>Bank Name:</strong> Millennial Apparel By Ruby
            <br />
            <strong>Account Name:</strong> Optimus Bank
            <br />
            <strong>Account Number:</strong> 1000026669
          </p>
        </div>

        <div className="border border-gray-300 my-3 rounded-md p-2 ">
          <p className="text-sm text-gray-700 tracking-widest leading-10">
            <strong>Bank Name:</strong> Millennial Apparel By Ruby <br />
            <strong>Account Name:</strong> Eco Bank
            <br />
            <strong>Account Number:</strong> 5910015013
          </p>
        </div>

        <p className="text-gray-600 mt-10 text-sm leading-10 mb-4">
          Make payment to account above and send{" "}
          <b>
            Proof of Payment{" "}
            <span className="font-normal text-red-800"> (screenshot) </span>{" "}
            Product Name, Product Quantity, Product Colour, Product Size and
            Shipping Address to{" "}
          </b>
          WhatsApp{" "}
          <span className="font-bold text-xl underline">
            {" "}
            +234 812 345 6789
          </span>
          .
        </p>
      </div>
    </div>
  );
}
