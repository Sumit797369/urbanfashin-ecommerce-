import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-8">
          Get the latest updates, exclusive offers, and new arrivals straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Small Note */}
        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to receive marketing emails from us. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
