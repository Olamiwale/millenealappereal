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

      <div className="fixed transition-all duration-500 group bg-green-500/80 hover:bg-green-600 right-5 p-4 rounded-full bottom-[8%]">
  <a
    href="https://wa.me/+2347056881825?text=Hello%20there!"
    target="_blank"
    className="flex items-center space-x-5 group"
  >
    <img src="../whatsapp.png" className="w-8" />
    <p className="hidden group-hover:flex duration-500 text-white  transition-all  group-hover:translate-x-0">
      How Can We Help You
    </p>
  </a>
</div>


      <Footer />
    </>
  );
}
