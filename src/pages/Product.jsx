import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  // ✅ Fetch Product Data
  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  // ✅ Loading State
  if (!productData) {
    return (
      <div className="pt-28 text-center text-gray-500">Loading product...</div>
    );
  }

  const handleBuyNow = () => {
    addToCart(productData._id, qty); // pehle cart me add karega
    navigate("/checkout"); // direct checkout page pe le jayega
  };

  return (
    <section className="w-full pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ================= PRODUCT WRAPPER ================= */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ================= LEFT: IMAGES ================= */}
          <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[20%]">
              {productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  onClick={() => setImage(item)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition
                    ${
                      image === item
                        ? "border-black"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  alt="thumb"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full sm:w-[80%]">
              <img
                src={image}
                className="w-full h-112.5 object-cover rounded-2xl shadow-md"
                alt="main"
              />
            </div>
          </div>

          {/* ================= RIGHT: PRODUCT INFO ================= */}
          <div className="flex-1">
            {/* Product Name */}
            <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>

            {/* Price */}
            <p className="text-2xl font-semibold text-black mb-6">
              {currency} {productData.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-7 mb-8">
              {productData.description ||
                "This is a premium quality product designed for the best experience. Upgrade your lifestyle with KIK GADGETS."}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <p className="font-semibold">Quantity:</p>

              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>

                <p className="px-4">{qty}</p>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Add to Cart */}
              <button
                onClick={() => addToCart(productData._id, qty)}
                className="flex-1 bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-900 transition shadow-md"
              >
                Add to Cart
              </button>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-orange-500 text-white px-10 py-4 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md"
              >
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-10 space-y-3 text-sm text-gray-500">
              <p>✅ Free Shipping on orders above ₹999</p>
              <p>✅ 7 Days Easy Return Policy</p>
              <p>✅ Secure Payments & Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
