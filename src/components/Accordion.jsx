import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const tog = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="border-b">
          <button
            onClick={() => tog(0)}
            className="w-full text-left p-3 border-2 flex justify-between items-center"
          >
            <span className="font-semibold">Product Details</span>
            <span>{activeIndex === 0 ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === 0 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white">
              <p>No Detail for this product</p>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border-b">
          <button
            onClick={() => tog(1)}
            className="w-full text-left p-3 border-2 flex justify-between items-center"
          >
            <span className="font-semibold">Shipping & Returns Policy</span>
            <span>{activeIndex === 1 ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === 1 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white space-y-5 py-10">
              <p className="tracking-wider leading-8">
                We currently ship within Nigeria and worldwide </p>
                <ul className="list-decimal space-y-4"> 
                <li>
                  Standard shipping : 3-7 business days within Lagos
                  <b>NGN 3500.00</b> (Free for orders over <b>NGN 300 000.00</b>)
                </li>
                <li>
               
                  Express Shipping : 3-5 business days <b> NGN 7000 </b>
                  (Available in Lagos state Only)
                </li>
                <li>
                  International Shipping : 10-21 business days, depending on the
                  location.
                  <b>
                    (Shipping rate is calculated at checkout based on the
                    destination and order size)
                  </b>
                </li>
                </ul>

                <p>
                  <b>NOTE:</b> Delivery times may vary due to carrier delays or
                  unforeseen circumstances beyond our control
                </p>
                <p className="text-blue-700 font-semibold underline">
                  <a href="/services">Read more on our Shipping Policy </a>
                </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
