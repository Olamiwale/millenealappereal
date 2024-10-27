import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const tog = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
     
      <div className="flex flex-col">
      
        <div className="border-b">
          <button onClick={() => tog(0)}
            className="w-full text-left p-3 border-2 flex justify-between items-center"
          >
            <span className='font-semibold'>Product Details</span>
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === 0 ? 'max-h-screen' : 'max-h-0'
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
            <span className='font-semibold'>Shipping  & Returns Policy</span>
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === 1 ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-white">
              <p>

Orders are processed within 2 business days. Standard shipping takes 5-7 business days. Expedited shipping options are available at checkout. International shipping times vary. Customers will receive a tracking number once the order is shipped.
</p>
            </div>
          </div>
        </div>

      
        
      </div>
    </div>
  );
};

export default Accordion;
