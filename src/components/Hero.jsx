import React, { useEffect, useState } from "react";

const Hero = () => {
  // ✅ High resolution + wide hero images
  const slides = [
    "https://images.unsplash.com/photo-1559697242-a465f2578a95?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1732475530118-0db47f851736?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=2000&q=80",
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide Change Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* ✅ Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slide"
            className={`absolute inset-0 w-full h-full 
              object-cover object-center
              transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* ✅ Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl font-[zalando] md:text-7xl font-extrabold text-white leading-tight">
          Streetwear That Speaks <br /> Your Style
        </h1>

        <p className="mt-6 font-[zalando] text-lg md:text-xl text-gray-200 max-w-2xl">
          Discover premium quality, trending outfits, sneakers & unbeatable
          comfort.
        </p>

        <button className="mt-10 bg-white text-black font-semibold px-10 py-3 rounded-md hover:bg-gray-200 transition">
          Shop Now
        </button>

        {/* ✅ Slide Indicators */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${index === current ? "bg-white scale-110" : "bg-gray-400"}
              `}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
