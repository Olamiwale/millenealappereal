import React, { useEffect, useState } from "react";
import Data from '../products.json'


export default function MoreProduct() {

  const [random, setRandom] = useState([])

  const getRandomItems = (arr, num) => {
    const shuffledItem = [...arr].sort(()=> 0.5 - Math.random());
    return shuffledItem.slice(0, num)
  }

  useEffect(()=>{
    setRandom(getRandomItems(Data, 3))
  }, [])


  return (
    <div className="p-8 flex justify-center flex-col items-center">
      <div className="justify-center items-center flex flex-col uppercase">
        <p className="font-bold text-sm border-2 p-3 mb-3">you may also like this</p>
     
      </div>

      <div className="grid md:grid-cols-4 grid-cols-3 justify-between gap-4">
        {random.map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center p-5 " >
            <a className="h-[150px]"
              onClick={() => handleItemClick(item)}
              href={`/product/${item.id}`}>
              <img src={item.imgUrl} className="w-full h-full" />
            </a>

            <p className="py-3 text-[10px]"> {item.name} </p>
           
           
          </div>
        ))}
      </div>
    </div>
  );
}


