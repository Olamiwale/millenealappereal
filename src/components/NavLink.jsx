import { useState } from 'react';
import { links } from '../data';

export default function Navbar () {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-200 py-6 md:flex hidden">
    <ul className="flex space-x-5 m-auto w-[900px] justify-center">
      {links.map((collection, index) => (
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

    {links.map((collection, index) => (
      <div
        key={index}
        className={openIndex === index ? 'absolute bg-white top-full w-full transition-transform translate-y-0 duration-900 ease-in-out' : 'hidden'}
      >
        <ul className="flex flex-col justify-center items-center">
          {collection.links.map((link, linkIndex) => (
            <li key={linkIndex}>{link}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};
