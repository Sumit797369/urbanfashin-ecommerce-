import React from "react";

const Contact = () => {
  return (
    <section className="w-full pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-gray-600">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-7">
            Have questions or need help? Our team is here to support you. 
            Reach out anytime and we’ll get back to you quickly.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ================= CONTACT INFO ================= */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8 leading-7">
              Whether it’s about an order, product inquiry, or support, feel free
              to contact us through the details below.
            </p>

            <div className="space-y-6 text-gray-700">

              {/* Address */}
              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p>New Delhi, India</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p>support@kikgadgets.com</p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p>+91 98765 43210</p>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="font-semibold text-lg">⏰ Working Hours</h3>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white p-10 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* ================= MAP / EXTRA SECTION ================= */}
        <div className="mt-20 bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            We’re Always Here to Help 💬
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Customer satisfaction is our priority. Contact us anytime and we’ll
            ensure the best support experience.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;