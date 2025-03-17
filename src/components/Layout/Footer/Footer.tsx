import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GTour</h3>
            <p className="mb-4">
              Your trusted partner for unforgettable travel experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-red-500 transition-colors" />
              <Twitter className="cursor-pointer hover:text-red-500 transition-colors" />
              <Instagram className="cursor-pointer hover:text-red-500 transition-colors" />
              {/* <YouTube className="cursor-pointer hover:text-red-500 transition-colors" /> */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 GTour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
