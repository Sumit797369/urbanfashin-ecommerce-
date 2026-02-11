import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300  pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            KIK GADGETS
          </h2>
          <p className="text-sm leading-6">
            Your one-stop shop for trending fashion, sneakers, and premium
            lifestyle products. Quality guaranteed.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/kik_gadgets__2/" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-white transition">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
     <ul className="space-y-3 text-sm">
  <li>
    <Link to="/shipping-policy" className="hover:text-white transition">
      Shipping Policy
    </Link>
  </li>

  <li>
    <Link to="/return-refund" className="hover:text-white transition">
      Return & Refund
    </Link>
  </li>

  <li>
    <Link to="/privacy-policy" className="hover:text-white transition">
      Privacy Policy
    </Link>
  </li>

  <li>
    <Link to="/terms" className="hover:text-white transition">
      Terms & Conditions
    </Link>
  </li>
</ul>


        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: support@kikgadgets.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KIK GADGETS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
