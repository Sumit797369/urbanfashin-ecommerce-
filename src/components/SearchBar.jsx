import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { X, Search } from "lucide-react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[100] flex items-start justify-center pt-28">

      {/* Search Box */}
      <div className="bg-white w-[90%] sm:w-[500px] rounded-xl shadow-lg p-5 flex items-center gap-3">

        {/* Search Icon */}
        <Search className="text-gray-500" size={20} />

        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 outline-none text-sm sm:text-base"
        />

        {/* Close Button */}
        <button
          onClick={() => setShowSearch(false)}
          className="text-gray-600 hover:text-black transition"
        >
          <X size={22} />
        </button>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
