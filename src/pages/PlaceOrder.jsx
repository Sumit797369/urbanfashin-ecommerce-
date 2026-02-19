import React, { useContext, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { cartItems, products, currency, delivery_fee } =
    useContext(ShopContext);

  // ✅ Payment Method State
  const [paymentMethod, setPaymentMethod] = useState("COD");

  // ✅ Subtotal Calculation
  const subtotal = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((item) => item._id === id);
    return acc + product.price * cartItems[id];
  }, 0);

  const total = subtotal + delivery_fee;

  // ✅ Place Order Handler
  const handlePlaceOrder = () => {
    alert(`Order Placed Successfully ✅\nPayment Method: ${paymentMethod}`);
  };

  return (
    <section className="w-full pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 min-h-[80vh]">

          {/* ================= LEFT SIDE: DELIVERY FORM ================= */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[60%]">
            <div className="text-xl sm:text-2xl my-3">
              <Title text1={"DELIVERY"} text2={"INFORMATION"} />
            </div>

            {/* Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Last Name"
              />
            </div>

            {/* Email */}
            <input
              className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
              type="email"
              placeholder="Email Address"
            />

            {/* Phone */}
            <input
              className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Phone Number"
            />

            {/* Address */}
            <input
              className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Street Address"
            />

            {/* City + State */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="City"
              />
              <input
                className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="State"
              />
            </div>

            {/* Zip + Country */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Zip Code"
              />
              <input
                className="border border-gray-300 rounded-xl py-3 px-4 w-full outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Country"
              />
            </div>

            {/* ================= PAYMENT METHOD ================= */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">
                Select Payment Method
              </h2>

              <div className="space-y-4">

                {/* UPI */}
                <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer hover:border-black transition">
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={paymentMethod === "UPI"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <p className="font-medium">UPI</p>
                </label>

                {/* Card */}
                <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer hover:border-black transition">
                  <input
                    type="radio"
                    name="payment"
                    value="CARD"
                    checked={paymentMethod === "CARD"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <p className="font-medium">
                    Credit / Debit / ATM Card
                  </p>
                </label>

                {/* COD */}
                <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer hover:border-black transition">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <p className="font-medium">Cash on Delivery</p>
                </label>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: ORDER SUMMARY ================= */}
          <div className="w-full lg:max-w-[35%] bg-gray-50 rounded-2xl shadow-sm p-8 h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* Price Details */}
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>
                  {currency} {subtotal}
                </p>
              </div>

              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>
                  {currency} {delivery_fee}
                </p>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg text-black">
                <p>Total</p>
                <p>
                  {currency} {total}
                </p>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
            >
              Place Order
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Payment Method:{" "}
              <span className="font-semibold">{paymentMethod}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
