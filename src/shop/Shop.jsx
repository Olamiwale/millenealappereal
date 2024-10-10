import React, { useState } from 'react';
import { product } from '../data'; // Assuming you have a product array in your data file

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on category or search term
  const filteredProducts = product.filter((item) => {
    return (
      (!filteredCategory || item.category === filteredCategory) &&
      (!searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-full max-w-md"
        />
        {/* Filter Button */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-blue-500 text-white p-2 ml-4 rounded"
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Filter Options */}
      {showFilter && (
        <div className="mb-8">
          <button
            onClick={() => setFilteredCategory('')}
            className={`p-2 mr-4 rounded ${!filteredCategory ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilteredCategory('Men')}
            className={`p-2 mr-4 rounded ${filteredCategory === 'Men' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
          >
            Men
          </button>
          <button
            onClick={() => setFilteredCategory('Women')}
            className={`p-2 rounded ${filteredCategory === 'Women' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
          >
            Women
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img src={item.imgUrl} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
              <a
                href={`/shop/${item.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Product
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
