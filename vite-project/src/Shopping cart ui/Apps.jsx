import React, { useState } from 'react'
import ProductCard from './ProductCard';
import Cart from './Cart';
const Apps = () => {
  const products = [
  { id: 1, name: 'Pink Hoodie', price: 45, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Orange Sneakers', price: 60, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Lovely Bag', price: 80, image: 'https://via.placeholder.com/150' },
]
const [items,setItems]=useState([]);
 const addToCart = (product) =>{
   setItems([...items, product]);
 }
  return (
    <div>
      {products.map(p => <ProductCard p={p} addToCart={addToCart} /> )}
       <Cart items ={items}/>
    </div>
  )
}

export default Apps