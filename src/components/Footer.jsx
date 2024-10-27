import React from 'react';
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    

<footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-lg font-semibold">About Us</h2>
          <img src={logo} className='w-16 rounded-full' />
          <p className="text-[10px]">
            We provide quality products at the best prices.
          </p>
        </div>

       

      
        <div>
          <h2 className="text-lg pb-2 font-semibold ">Contact Us</h2>
          <ul className="space-y-1 text-[10px]">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +123 456 789</li>
            <li>Address: 123 E-Commerce St, City</li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg pb-2 font-semibold">Follow Us</h2>
          <ul className="flex md:flex-row flex-col space-y-2 text-[10px] md:space-x-4">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>

     
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2024 E-Commerce. All Rights Reserved.</p>
      </div>
    </footer>
    
  )
}
