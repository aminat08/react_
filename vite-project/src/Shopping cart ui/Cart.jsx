import React from 'react'

const Cart = ({items}) => {
    const total = items.reduce((acc,curr) => acc + curr.price,0 )
  return (
    <div>
        { items.length === 0 ? ( <p className="text-gray-500">Cart is empty 💔</p>):(
        <ul>
        {items.map((items, index)=>(
             <li key={index} className="flex justify-between items-center text-gray-700">
              <span>{items.name}</span>
              <span>${items.price}</span>
            </li>
        ))}
        </ul>
    )}
     <hr className="my-4" />
      <div className="flex justify-between font-bold text-gray-800">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  )
}

export default Cart