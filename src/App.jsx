import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Deal from './components/Deal';
import Mail from './components/Mail';
import Footer from './components/Footer';
import About from './components/About';

export default function App() {
  return (
    <div>
    
      <Navbar />
      <Hero />
      <Shop />
      <Hero />
      <Shop />
      <Hero />
      <Shop />
      <Deal />
      <About />
      <Mail />
      <Footer />
    </div>
  )
}
