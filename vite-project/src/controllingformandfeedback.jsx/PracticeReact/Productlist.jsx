import React from 'react';

const Productlist = ({ products, add, remove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover mb-2"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-pink-600 font-bold">₦{product.price}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => add(product)}
              className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Add to Cart
            </button>
            <button
              onClick={() => remove(product)}
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
