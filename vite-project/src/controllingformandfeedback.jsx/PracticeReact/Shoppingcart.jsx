import React, { useState } from 'react'
import Productlist from './Productlist';
import Cart from '../../Shopping cart ui/Cart';
const Shoppingcart = () => {
    const products = [
  { id: 1, name: 'Pink T-shirt', price: 25, image: 'image-link' },
  { id: 2, name: 'Orange Sneakers', price: 50, image: 'image-link' },
  { id: 3, name: 'Blue Jeans', price: 40, image: 'image-link' }
];
const [CartItems, setCartItems]=useState([]);
const add = (product) =>{
    const exist = CartItems.find(f=> f.id === product.id);
    if (exist) {
        setCartItems(CartItems.map(m=> m.id === product.id? {...exist, qty:exist.qty + 1} : m ))
    }
    else{
        setCartItems([...CartItems, {...product,qty:1}])
    }
}
const remove = (product) =>{
    const exist = CartItems.find(f=> f.id === product.id);
      if (!exist) return
    if (exist.qty === 1) {
        setCartItems(CartItems.filter(f=> f.id !== product.id))
    }
    else{
        setCartItems(CartItems.map(m=> m.id === product.id ? {...exist, qty:exist.qty - 1} : m))
    }
}
  return (
    <div>
        <div>
          <Productlist add={add} remove={remove} products={products} />
          <Cart CartItems={CartItems}  add={add} remove={remove} />
        </div>
    </div>
  )
}

export default Shoppingcart