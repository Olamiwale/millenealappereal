import React from 'react';


export default function Hero({bgImg}) {
  return (
    <div className='flex justify-center '>
        
        <img 
        src={bgImg} 
        className='w-full h-auto object-cover ' />
    </div>
  )
}
