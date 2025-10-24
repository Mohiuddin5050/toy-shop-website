import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-pink-400">SKToyShop</h2>
          <p className="text-gray-300 leading-relaxed">
            Discover fun and creative toys for every kid’s imagination.  
            Safe, colorful, and locally made with love ❤️
          </p>
        </div>

        
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold mb-2 text-pink-300">Quick Links</h3>
          <Link to="/terms" className="hover:text-pink-400 transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-pink-400 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/about" className="hover:text-pink-400 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-pink-400 transition-colors">
            Contact
          </Link>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pink-300">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition-transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="text-pink-400">SKToyShop</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
