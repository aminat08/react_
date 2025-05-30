import React from 'react'

const ProductCard = ({ p, addToCart }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-4 text-center">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-2" />
            <h2 className="text-lg font-semibold text-gray-700">{p.name}</h2>
            <p className="text-pink-600 font-bold">${p.price}</p>
            <button onClick={()=> addToCart(p)}className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-4 rounded-full transition duration-300">Add to cart</button>
        </div>
    )
}

export default ProductCard