import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-floral-400 to-floral-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg">🌸</span>
              </div>
              <span className="text-xl font-serif font-semibold">
                Bloom & Blossom
              </span>
            </div>
            <p className="text-sage-200 mb-6 max-w-md">
              Bringing beauty and joy to every occasion with our carefully curated selection of fresh flowers. 
              From romantic bouquets to celebratory arrangements, we make every moment special.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-floral-400" />
                <span className="text-sage-200">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-floral-400" />
                <span className="text-sage-200">hello@bloomandblossom.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-floral-400" />
                <span className="text-sage-200">123 Flower Street, Garden City, GC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sage-200 hover:text-floral-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sage-200 hover:text-floral-400 transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sage-200 hover:text-floral-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sage-200 hover:text-floral-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sage-200 hover:text-floral-400 transition-colors duration-200">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sage-200 mb-4">
              Subscribe to our newsletter for exclusive offers and flower care tips.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-sage-700 border border-sage-600 rounded-lg text-white placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-floral-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-floral-500 hover:bg-floral-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-300 text-sm">
            © 2024 Bloom & Blossom. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-sage-300 hover:text-floral-400 transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-sage-300 hover:text-floral-400 transition-colors duration-200">
              Terms of Service
            </button>
            <button className="text-sage-300 hover:text-floral-400 transition-colors duration-200">
              Shipping Info
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 