import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    products,
    currency,
    updateQuantity,
    removeFromCart,
  } = useContext(ShopContext);

  // ✅ Convert cart object into array
  const cartData = Object.keys(cartItems).map((id) => {
    const product = products.find((item) => item._id === id);
    return {
      ...product,
      quantity: cartItems[id],
    };
  });

  // ✅ Total Price Calculation
  const total = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  

  return (
    <section className="w-full pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-10">Your Cart 🛒</h1>

        {/* Empty Cart */}
        {cartData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">
              Your cart is currently empty.
            </p>
            <Link
              to="/collection"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartData.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-6 bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition"
                >
                  {/* Product Image */}
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg truncate">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Price: {currency} {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        className="px-3 py-1 border rounded-md hover:bg-gray-100"
                      >
                        -
                      </button>

                      <p className="font-medium">{item.quantity}</p>

                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="px-3 py-1 border rounded-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 text-sm mt-4 hover:underline"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Item Total */}
                  <p className="font-semibold text-lg">
                    {currency} {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 h-fit">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="flex justify-between mb-4 text-gray-600">
                <p>Subtotal</p>
                <p>
                  {currency} {total}
                </p>
              </div>

              <div className="flex justify-between mb-4 text-gray-600">
                <p>Shipping</p>
                <p>Free</p>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-semibold mb-8">
                <p>Total</p>
                <p>
                  {currency} {total}
                </p>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
