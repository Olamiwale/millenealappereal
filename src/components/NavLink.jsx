import { useState } from 'react';
import {links} from '../data'

const collections = [
  { name: "Home", links: ["Link1", "Link2", "Link3"] },
  { name: "Product", links: ["Link1", "Link2"] },
  { name: "About", links: ["Link1", "Link2", "Link3", "Link4"] },
  { name: "Services", links: ["Link1", "Link2", "Link3", "Link4"] },
  { name: "Contact", links: ["Link1", "Link2", "Link3", "Link4"] },
  
];

export default function Navbar () {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="justify-center items-center p-3 lg:flex hidden">
      <ul className="flex relative space-x-5 m-auto w-[900px] justify-center">
        {collections.map((collection, index) => (
          <li
          className='relative'
            key={index}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            {collection.name}
          </li>
        ))}
      </ul>

      {collections.map((collection, index) => (
        <div
          key={index}
          className={openIndex === index ? 'absolute bg-white top-full w-full transition-transform translate-y-0 duration-300 ease-in-out' : 'hidden'}
        >
          <ul 
           
          className="flex flex-col justify-start items-start pl-40">
            {collection.links.map((link, linkIndex) => (
              <li className='p-2' key={linkIndex}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


