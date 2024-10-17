import React from 'react';


export default function Hero({bgImg}) {
  return (
    <div className='flex justify-center h-full items-center '>
        
        <img 
        src={bgImg} 
        className='w-full h-auto object-cover ' />

        <div className='text-3xl absolute'>
          <p className='uppercase text-7xl font-extrabold text-gray-300' >let style you</p> 
        </div>

       

      
    </div>
  )
}
