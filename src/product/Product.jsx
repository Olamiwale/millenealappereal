import React, { useState } from "react";
import Data from "../products.json";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");

  

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = Data.filter((item) => {
    return (
      (!filteredCategory || item.category === filteredCategory) &&
      (!searchTerm ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

     
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-8 justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-full md:max-w-md"
        />

        <div className=" flex justify-center">
          <button onClick={() => setFilteredCategory("")}
            className={`p-2 mr-4 tracking-widest px-4 rounded ${!filteredCategory ? "bg-slate-800 text-white" : "bg-slate-400"}`}>
             All Products
          </button>
          <button
            onClick={() => setFilteredCategory("Jumpsuit")}
            className={`p-2 mr-4 tracking-widest rounded px-4 ${filteredCategory === "Jumpsuit" ? "bg-slate-800 text-white"
                : "bg-slate-400"}`}>
            Jumpsuit
          </button>
          <button
            onClick={() => setFilteredCategory("gown")}
            className={`p-2 mr-4 tracking-widest rounded px-4 ${filteredCategory === "gown" ? "bg-slate-800 text-white"
                : "bg-slate-400"}`}>
            Gown
          </button>
          <button
            onClick={() => setFilteredCategory("Two Piece")}
            className={`p-2 mr-4 tracking-widest rounded px-4 ${filteredCategory === "Two Piece" ? "bg-slate-800 text-white"
                : "bg-slate-400"}`}>
            Two Piece
          </button>
          <button
            onClick={() => setFilteredCategory("Trouser")}
            className={`p-2 mr-4 tracking-widest rounded px-4 ${filteredCategory === "Trouser" ? "bg-slate-800 text-white"
                : "bg-slate-400"}`}>
            Trouser
          </button>
        
        </div>
      </div>



      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="bg-white p-4  rounded-lg">
              <a  href={`/product/${item.id}`}>
                <img
                src={item.imgUrl}
                alt={item.name}
                className="w-full h-48 object-cover mb-4 rounded"
               
              /> 
              </a>
             
              <h2 className="text-[8px] font-semibold">{item.name}</h2>
              <p className="text-gray-600 font-bold text-[8px]">${item.price}</p>
        
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
}
