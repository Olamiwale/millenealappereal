import React from 'react';
import Swipper from '../components/Swipper';


export default function Hero({bgImg}) {
  return (
    <div className='flex justify-center '>
        
        <img 
        src={bgImg} 
        className='w-full h-auto object-cover ' />

      
    </div>
  )
}
