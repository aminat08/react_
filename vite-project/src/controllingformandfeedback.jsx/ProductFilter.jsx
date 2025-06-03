import React, { useState } from 'react';

const ProductFilter = () => {
  const products = [
    { id: 1, name: 'Pink T-Shirt', category: 'Clothing', price: 25 },
    { id: 2, name: 'Wireless Headphones', category: 'Electronics', price: 80 },
    { id: 3, name: 'Sneaker Shoes', category: 'Footwear', price: 60 },
    { id: 4, name: 'Blue Jeans', category: 'Clothing', price: 45 },
    { id: 5, name: 'Smart Watch', category: 'Electronics', price: 120 },
    { id: 6, name: 'Running Shoes', category: 'Footwear', price: 70 },
    { id: 7, name: 'Pink Hoodie', category: 'Clothing', price: 55 },
    { id: 8, name: 'Bluetooth Speaker', category: 'Electronics', price: 40 },
  ];

  const [selectCategory, setSelectCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filters = products
    .filter((p) => selectCategory === 'All' || p.category === selectCategory)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <form className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-pink-500"
        />
        <select
          onChange={(e) => setSelectCategory(e.target.value)}
          value={selectCategory}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-pink-500"
        >
          <option value="All">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
        </select>
      </form>

      {filters.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filters.map((f) => (
            <div
              key={f.id}
              className="border border-gray-200 p-4 rounded-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-pink-600">{f.name}</h3>
              <p className="text-gray-600">Category: {f.category}</p>
              <p className="text-gray-800 font-bold">${f.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
