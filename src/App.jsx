import React, { useState } from "react";
// import { Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnRefund from "./pages/ReturnRefund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer />
      <Navbar />
      <SearchBar/>

      {/* <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Place-Order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-refund" element={<ReturnRefund />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
