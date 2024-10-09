import React from 'react'

export default function Product() {
  return (
    <div className='p-10 uppercase text-xl border-[1px] border-black/20 w-full'>
      <div className='border-b-[1px] pb-5 w-full'>
        <p>Home / one pieces</p>
      </div>

      <div className='flex justify-between items-center  pt-5'>
        <div>menu toggle</div>
        <div className='flex gap-40'>
          <p>Sort</p>
          <p className='  lg:hidden' >filter</p>
        </div>
      </div>
    </div>
  )
}
