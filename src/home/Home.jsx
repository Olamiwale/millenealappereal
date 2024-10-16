import React from 'react';
import Hero from './Hero';
import Shop from './Shop';
import Deal from './Deal';
import Mail from './Mail';
import About from './About';
import ShopW from './ShopW';

export default function Home() {
  return (
    <div>
      <Hero bgImg="https://wallpaperset.com/w/full/c/7/4/156276.jpg" />
      <Shop />
      <Hero bgImg="https://wallpapercave.com/wp/wp4329518.jpg" />
      <ShopW />
      <Hero bgImg="https://cf.ltkcdn.net/handbags/images/orig/230353-1600x1067-woman-holding-leather-handbag.jpg" />
      <Shop />
      <Deal />
      <About />
      <Mail />
    </div>
  )
}


