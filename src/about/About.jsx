import React from 'react';

export default function About () {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl uppercase font-bold text-center">About Us</h1>
        
       
        <div className='flex md:flex-row flex-col justify-between items-center py-20'>
        

       
        <section className="flex flex-col items-center mb-12 w-1/2">
        
          <img 
            src="./image.png" 
            alt="Jane Doe" 
            className="rounded-full mb-4" 
          />
          <h3 className="text-xl font-semibold">Jane Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </section>

        <section className="mb-12 w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 text-[10px] mb-4">
            Founded by fashion enthusiast Jane Doe
          </p>
        </section>

       

        </div>

       
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">
            Have questions or feedback? Reach out to us at:
          </p>
          <p className="text-gray-700">Email: support@fashionstore.com</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
        </section>
      </div>
    </div>
  );
};

