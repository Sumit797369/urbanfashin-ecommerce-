import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Collection = () => {
  const { products, currency } = useContext(ShopContext);

  const categories = ["Controllers", "Speakers", "Keyboards"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-28 pb-20 px-6">

      {/* ================= FILTER OPTIONS ================= */}
      <div className="w-full sm:w-64 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        <p className="font-semibold mb-3">Categories</p>

        <button
          onClick={() => setSelectedCategory("All")}
          className={`block w-full text-left px-4 py-2 rounded-md mb-2 transition
            ${
              selectedCategory === "All"
                ? "bg-black text-white"
                : "hover:bg-gray-200"
            }`}
        >
          All Products
        </button>

        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`block w-full text-left px-4 py-2 rounded-md mb-2 transition
              ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= PRODUCTS SECTION ================= */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">
          {selectedCategory === "All"
            ? "All Products"
            : selectedCategory}
        </h1>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((item) => (
              <Link
                key={item._id}
                to={`/product/${item._id}`}
                className="bg-white text-black rounded-2xl overflow-hidden shadow-sm 
                hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-60 object-cover rounded-2xl 
                    hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {item.name}
                  </p>

                  <p className="mt-2 text-base font-semibold text-black">
                    {currency} {item.price}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        ) : (
          <p className="text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Collection;
