import React from 'react';

const Cart = ({ CartItems, add, remove }) => {
  const total = CartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">🛍️ Your Cart</h2>

      {CartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {CartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ₦{item.price} x {item.qty}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => remove(item)}
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                >
                  −
                </button>
                <span className="font-semibold">{item.qty}</span>
                <button
                  onClick={() => add(item)}
                  className="bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right font-bold text-lg">
            Total: ₦{total}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
