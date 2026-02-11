import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { User, Heart, Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false); // ✅ ADDED
const { setShowSearch } = useContext(ShopContext);

  return (
    <>
      <div
        className={`fixed h-20 top-0 left-0 w-full z-50 transition-all duration-300
          ${isHome ? "bg-transparent text-white" : "bg-white text-black shadow-sm"}
        `}
      >
        <div className="h-20 px-4 sm:px-10 flex items-center justify-between">
          {/* ✅ MOBILE MENU ICON (LEFT) */}
          <div className="md:hidden">
            <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
          </div>

          {/* LEFT MENU (DESKTOP – UNCHANGED) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>Home</p>
              <hr className="w-full border-none h-[1.5px] bg-black hidden" />
            </NavLink>

            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p>Collection</p>
              <hr className="w-full border-none h-[1.5px] bg-black hidden" />
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>About</p>
              <hr className="w-full border-none h-[1.5px] bg-black hidden" />
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>Contact</p>
              <hr className="w-full border-none h-[1.5px] bg-black hidden" />
            </NavLink>
          </div>

          {/* CENTER LOGO (SAME) */}
          <NavLink
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 sm:text-3xl font-[Anton] leading-none"
          >
            KIK GADGETS
          </NavLink>

          {/* RIGHT ICONS (SAME POSITION) */}
          <div className="flex items-center gap-4 sm:gap-6">
<img
  src={assets.search_icon}
  onClick={() => setShowSearch(true)}
  className={`w-5 cursor-pointer transition-all duration-300 
    ${isHome ? "invert" : "invert-0"}
  `}
  alt=""
/>
            <div className="group relative">
             <img
  src={assets.profile_icon}
  className={`w-5 cursor-pointer transition-all duration-300 
    ${isHome ? "invert" : "invert-0"}
  `}
  alt=""
/>


              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            </div>
            <Link to="/cart" className="relative">
             <img
  src={assets.cart_icon}
  className={`w-5 cursor-pointer transition-all duration-300 
    ${isHome ? "invert" : "invert-0"}
  `}
  alt=""
/>

              <p
  className={`absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 
    aspect-square rounded-full text-[8px]
    ${isHome ? "bg-white text-black" : "bg-black text-white"}
  `}
>
  10
</p>

            </Link>
            {/* <User className="cursor-pointer" />
            <Heart className="cursor-pointer" /> */}
            {/* <Search className="cursor-pointer" /> */}
            {/* <div className="relative cursor-pointer">
              <ShoppingBag />
              <span
                className={`absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center rounded-full
                  ${isHome ? "bg-white text-black" : "bg-black text-white"}
                `}
              >
                0
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* ✅ MOBILE SIDE MENU (ADDED – LEFT) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-[60] transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <X className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <div className="flex  flex-col gap-6 p-6 font-semibold">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/collection" onClick={() => setOpen(false)}>
            Collection
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>

      {/* ✅ BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[55]"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
