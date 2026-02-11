import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Collection = () => {
  const { products, currency } = useContext(ShopContext);

  // ✅ Categories list
  const categories = ["Controllers", "Speakers", "Keyboards"];

  // ✅ States
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Price Filter States
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // ✅ Sort State
  const [sortOrder, setSortOrder] = useState("default");

  // ================= FILTER LOGIC =================

  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // ✅ Price Filter Apply
 filteredProducts = filteredProducts.filter((item) => {
  const min = minPrice === "" ? 0 : Number(minPrice);
  const max = maxPrice === "" ? Infinity : Number(maxPrice);

  return item.price >= min && item.price <= max;
});


  // ✅ Sorting Apply
  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-28 pb-20 px-6">

      {/* ================= FILTER OPTIONS ================= */}
{/* ================= SIDEBAR ================= */}
<div className="w-full sm:w-72 flex flex-col gap-6">

  {/* ================= CATEGORY BOX ================= */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold mb-4">Categories</h2>

    {/* All Products */}
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

    {/* Dynamic Categories */}
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

  {/* ================= FILTER BOX ================= */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold mb-6">Filters</h2>

    {/* Price Range */}
    <div>
      <p className="font-semibold mb-3">Price Range</p>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="w-full px-3 py-2 border rounded-md mb-3"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>

    {/* Sort By Price */}
    <div className="mt-6">
      <p className="font-semibold mb-3">Sort By Price</p>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="w-full px-3 py-2 border rounded-md cursor-pointer"
      >
        <option value="default">Default</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>
    </div>
  </div>
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
