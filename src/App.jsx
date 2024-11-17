import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import Spinner from "./components/Spinner";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? <Spinner /> : <Outlet />}

      <div className="fixed bg-green-500/80 hover:bg-green-600 transition-all duration-500 right-5 p-4 rounded-full bottom-[8%] ">
      <a  href="https://wa.me/+2347056881825?text=Hello%20there!" target="_blank" className="flex items-center space-x-5 group ">
         <img src="../whatsapp.png" className="w-8" />
        <p className="font-semibold text-white text-[15px]"> How Can We Help You</p> 
       
      </a>
     
      
      </div>

      <Footer />
    </>
  );
}
