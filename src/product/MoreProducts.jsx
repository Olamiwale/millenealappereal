import React, { useEffect, useState } from "react";
import Data from '../products.json'


export default function MoreProduct() {

  const [random, setRandom] = useState([])

  const getRandomItems = (arr, num) => {
    const shuffledItem = [...arr].sort(()=> 0.5 - Math.random());
    return shuffledItem.slice(0, num)
  }

  useEffect(()=>{
    setRandom(getRandomItems(Data, 4))
  }, [])


  return (
    <div className="p-8 my-8 flex justify-center bg-gray-100 flex-col items-center mt-[80px]">
      <div className="justify-center items-center flex flex-col uppercase pb-20 pt-10">
        <p className="font-bold text-3xl">you may also like this</p>
     
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 justify-between gap-4">
        {random.map((item, id) => (
          <div
            key={id}
            className="flex flex-col justify-center shadow-lg shadow-gray-400 items-center " >
            <a className="h-[200px]"
              onClick={() => handleItemClick(item)}
              href={`/product/${item.id}`}>
              <img src={item.imgUrl} className="w-full h-full" />
            </a>

            <p className="py-3"> {item.name} </p>
            <p className="pb-2"> $ {item.price} </p>
           
          </div>
        ))}
      </div>
    </div>
  );
}


