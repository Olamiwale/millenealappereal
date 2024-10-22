import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MobileNav() {

const navigate = useNavigate();

  return (
    <div>
     
    <div
      className='lg:hidden fixed top-40 left-0 h-full w-2/3 bg-white p-5 transform transition-transform duration-1000 ease-in-out'>
      <ul className='flex flex-col justify-center items-center'>
        <li className="my-4">
          <a onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</a>
        </li>
        <li className="my-4">
          <a href="/product" className="hover:underline">Product</a>
        </li>
        <li className="my-4">
          <a href="/about" className="hover:underline">About</a>
        </li>
        <li className="my-4">
          <a href="/services" className="hover:underline">Services</a>
        </li>
        <li className="my-4">
          <a onClick={()=>navigate('/contact')} className="hover:underline cursor-pointer">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  )
}
