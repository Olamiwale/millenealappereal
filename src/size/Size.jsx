import React from 'react';
import sizeImage from '../assets/image.png'

export default function Size() {
  return (
    <div className='flex flex-col items-center justify-center p-8'>

   
        <p className='text-3xl font-bold text-center mb-8'>Size Chart</p>
      
        <div className=''>
            <img src={sizeImage} className='w-[500px]' />
            <div>
                <p>NB</p>
                 <li>The measurement table is a UK size chart format</li>
        <li>Measurement are in INCHES</li>
        <li>We recommend a Higher size for sizes in US format i.e For a US 10, a UK 12 is more suitable</li>
        <li>All pants have a standard length of 47 INCHES</li>
                </div>
            
        </div>
       
        
    </div>
  )
}
