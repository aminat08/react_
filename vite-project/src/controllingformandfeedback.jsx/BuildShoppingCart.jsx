import React, { useEffect, useState } from 'react';

const BuildShoppingCart = () => {
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

  // Load cart from localStorage or empty array
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    return savedCart ? savedCart : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addtocart = (product) => {
    setCart([...cart, product]);
  };
 
   //what we are doing here is IndexToRemove is the index of the particular product we want to remove and we are saying that go through every item in the cart and keep only those items whose index is not equal to the one we deleted(IndexToRemove)
  const removecart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };
 
  // State for filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectCategory, setSelectCategory] = useState('All');

  // Filter products by search term and category
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) => selectCategory === 'All' || p.category === selectCategory);

  return (
    <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-10 bg-gray-50 min-h-screen">

      {/* Filters */}
      <div className="mb-6 space-y-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full p-2 border rounded"
        />
        <select
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
        </select>
      </div>

      {/* Products List */}
      <div>
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Products</h1>
        <div className="space-y-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-400 italic">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-pink-600 font-bold mt-2">${product.price}</p>
                </div>
                <button
                  onClick={() => addtocart(product)}
                  className="mt-4 bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Cart Section */}
      <div>
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-400 italic text-lg">No items in cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((c, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{c.name}</h2>
                  <p className="text-pink-600 font-bold">${c.price}</p>
                </div>
                <button
                  onClick={() => removecart(i)}
                  className="text-red-500 font-semibold hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 text-right font-bold text-xl text-gray-900">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildShoppingCart;
