import React from 'react'
import bg from '../assets/imagebg2.png'

export default function Deal() {
  return (
    <div className='flex flex-col justify-center items-center md:border-b-[1px] border-t-[1px] border-black/20'>
        
        <div className='flex flex-col md:flex-row justify-center  w-full items-center'>
            <div className='w-1/2 uppercase text-3xl flex flex-col justify-center items-center py-20'>
           <p>any advert / deal name </p>
        </div>
        <div className='bg-blue-400 md:w-1/2 w-full'>
            <img src={bg} className='w-full h-[400px]' />
        </div> 
        </div>
       
       
    </div>
  )
}
