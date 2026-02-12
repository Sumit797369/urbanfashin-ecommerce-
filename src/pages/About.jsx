import React from "react";

const About = () => {
  return (
    <section className="w-full pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl  font-extrabold mb-4">
            About KIK<span className=" text-gray-600"> GADGETS</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-7">
            Welcome to KIK GADGETS — your one-stop destination for premium
            gadgets, accessories, and lifestyle products designed for modern
            tech lovers.
          </p>
        </div>

        {/* ================= STORY SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-7 mb-4">
              At <span className="font-semibold">KIK GADGETS</span>, we started
              with a simple mission: to bring the latest and most innovative
              gadgets to everyone at affordable prices.
            </p>
            <p className="text-gray-700 leading-7">
              From gaming controllers to premium speakers and smart accessories,
              we carefully curate products that match your lifestyle and
              passion for technology.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="about"
              className="rounded-2xl shadow-md object-cover w-full h-[350px]"
            />
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600 leading-6">
                Every product is tested and verified to ensure top-notch quality
                and performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600 leading-6">
                We deliver quickly and safely across India with reliable
                shipping partners.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Trusted Support
              </h3>
              <p className="text-gray-600 leading-6">
                Our team is available 24/7 to help you with orders, returns, and
                queries.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the KIK GADGETS Community 🚀
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Explore our latest collections and upgrade your lifestyle with the
            best gadgets in the market.
          </p>
          <button className="bg-white text-black px-10 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;