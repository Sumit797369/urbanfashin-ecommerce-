import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <section className="border-t pt-16 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-2xl mb-10">
          <Title text1={"MY"} text2={"ORDERS"} />
          <p className="text-gray-500 text-sm mt-2">
            Track and manage your recent purchases
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {products.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              {/* Left: Product Info */}
              <div className="flex items-start gap-6">
                <img
                  className="w-20 h-20 object-cover rounded-xl"
                  src={item.image[0]}
                  alt={item.name}
                />

                <div>
                  <p className="font-semibold text-lg">{item.name}</p>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                    <p>
                      Price:{" "}
                      <span className="font-medium text-black">
                        {currency} {item.price}
                      </span>
                    </p>

                    <p>
                      Qty: <span className="font-medium text-black">1</span>
                    </p>

                    <p>
                      Date:{" "}
                      <span className="font-medium text-black">
                        18 Feb 2026
                      </span>
                    </p>
                  </div>

                  {/* Status */}
                  <p className="mt-3 text-sm">
                    Status:{" "}
                    <span className="text-green-600 font-semibold">
                      Delivered ✅
                    </span>
                  </p>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2 rounded-xl border border-gray-300 hover:border-black hover:bg-gray-50 transition font-medium">
                  Track Order
                </button>

                <button className="px-6 py-2 rounded-xl bg-black text-white hover:bg-gray-900 transition font-medium">
                  Buy Again
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Orders */}
        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            You have not placed any orders yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Orders;
