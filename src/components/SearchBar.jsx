import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, products } =
    useContext(ShopContext);

  // ✅ Filter products dynamically
  const filtered =
    search.length > 0
      ? products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return showSearch ? (
    <div className="fixed inset-0 bg-black/50 z-[200] flex justify-center items-start pt-28 px-4">

      {/* Search Box */}
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6">

        {/* Top Row */}
        <div className="flex items-center gap-3 border-2 border-gray-500  rounded-full px-4 py-2">

          <Search size={20} className="text-gray-500" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 outline-none text-sm sm:text-base"
            autoFocus
          />

          {/* Close */}
          <button
            onClick={() => {
              setShowSearch(false);
              setSearch("");
            }}
            className="text-gray-500 hover:text-black transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Search Results */}
        {filtered.length > 0 && (
          <div className="mt-6 max-h-64 overflow-y-auto">

            <p className="text-sm text-gray-500 mb-3">
              Showing results for: <span className="font-semibold">{search}</span>
            </p>

            <div className="flex flex-col gap-3">
              {filtered.slice(0, 6).map((item) => (
                <Link
                  key={item._id}
                  to={`/product/${item._id}`}
                  onClick={() => setShowSearch(false)}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
                >
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-lg"
                  />

                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">₹{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {search.length > 0 && filtered.length === 0 && (
          <p className="mt-6 text-center text-gray-500">
            No products found 😢
          </p>
        )}
      </div>
    </div>
  ) : null;
};

export default SearchBar;
