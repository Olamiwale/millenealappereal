import React, { useState } from 'react';

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden md:max-w-4xl m-5 w-full">
        
        
        <div className="w-full md:w-1/2 bg-gray-400 p-8 flex flex-col items-center justify-center">
          <img
            src="https://via.placeholder.com/300x300.png"
            alt="Contact us"
            className="rounded-full mb-6 w-48 h-48 object-cover"
          />
          <h2 className="text-white text-xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white mb-6">Follow us on social media</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-xl font-bold mb-6 text-slate-900 text-center uppercase">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className='text-[12px]'>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none h-28"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 uppercase font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


