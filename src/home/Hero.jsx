import React from 'react';


export default function Hero({bgImg}) {
  return (
    <div className='flex p-5 justify-center h-full items-center '>
        
        <img 
        src={bgImg} 
        className='w-full h-auto object-cover ' />

      
    </div>
  )
}
