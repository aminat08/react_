import React from 'react'

const Cart = ({CartItems, handleAddTocart, handleremovecart}) => {
    const total = CartItems.reduce((acc,curr) => acc + curr.price * curr.qty ,0)
  return (
    <div>Cart</div>
  )
}

export default Cart