import React from 'react'

export default function Footer() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-20 justify-between p-8 md:px-20 md:py-40'>
        
       

            <div className='flex flex-col gap-5'>
            <p>FOLLOW COMPANY NAME</p>
            <p>@followcompanyname</p>
            <p>Social Handle</p>
            </div>

            <div className='flex flex-col gap-5'>
            <p className='font-bold'>SHOP BY CATEGORY</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            </div>

            <div className='flex flex-col gap-5'>
            <p className='font-bold'>INFO</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
            <p>Shop by category</p>
           </div> 
       
       
        <div className='flex flex-col gap-5'>
           <p className='font-bold' >JOIN TREASURE MAILING LIST</p>
            <p>15% OFF YOUR FIRST PURCHASE + EARLY</p>
            <p>SHOP BY CATEGORY</p>
            <form className='flex flex-col space-y-5 py-10'>
            <input type='email' className='p-3 w-[250px] bg-white border-2 border-black' />
            <button className='bg-black text-white w-[100px] p-2 px-8'>SUBSCRIBE</button>
            </form>
        </div>
    </div>
  )
}
