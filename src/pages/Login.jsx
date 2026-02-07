import React from 'react'

import { X } from "lucide-react";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-[90%] max-w-4xl rounded-xl overflow-hidden bg-white flex shadow-2xl">

        {/* LEFT SECTION */}
        <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-extrabold tracking-wide">
            BONKERS<br />CORNER
          </h1>

          <p className="mt-6 text-lg font-semibold">Welcome!</p>
          <p className="text-sm mt-1 opacity-80">
            Register to avail the best deals!
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-1/2 p-10 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-bold mb-6">Login / Signup</h2>

          <label className="text-sm font-medium text-gray-600">
            Enter Mobile Number
          </label>

          <div className="mt-2 flex items-center border rounded-md overflow-hidden">
            <span className="px-3 border-r bg-gray-100">🇮🇳 +91</span>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-3 outline-none"
            />
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900">
            Continue
          </button>

          <p className="text-xs text-gray-400 mt-4">
            By logging in, you agree to our{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>{" "}
            &{" "}
            <span className="underline cursor-pointer">Terms of Service</span>
          </p>

          <p className="text-xs text-center mt-4 underline cursor-pointer text-gray-500">
            Trouble logging in?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

