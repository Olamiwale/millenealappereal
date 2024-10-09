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
              <p>This is the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Heading</p>
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
              <p>This is the content for Headinis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Headingis the content for Heading</p>
            </div>
          </div>
        </div>

      
        
      </div>
    </div>
  );
};

export default Accordion;
