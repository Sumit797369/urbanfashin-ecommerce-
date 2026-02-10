import React from "react";
import { Truck, RefreshCcw, ShieldCheck, Headphones } from "lucide-react";

const OurPolicy = () => {
  const policies = [
    {
      icon: <Truck size={32} />,
      title: "Free Shipping",
      desc: "Enjoy free delivery on all orders above ₹999 anywhere in India.",
    },
    {
      icon: <RefreshCcw size={32} />,
      title: "Easy Returns",
      desc: "7-day hassle-free return & exchange policy for all products.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Payments",
      desc: "100% safe and secure payment options with encrypted checkout.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Customer Support",
      desc: "We’re always here to help you with orders, returns, or queries.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Policies
        </h2>

        {/* Policy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {policies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition duration-300"
            >
              {/* Icon */}
              <div className="text-black mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
