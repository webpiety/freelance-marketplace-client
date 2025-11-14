import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const MyFooter = () => {
  return (
    <div className="bg-gray-950 text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-10">
        {/* --- Brand Section --- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Freelance Marketplace
          </h2>
          <p className="text-sm leading-relaxed">
            A modern freelancing marketplace connecting skilled professionals
            with clients worldwide. Build your career, showcase your talent, and
            find meaningful projects easily.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-blue-500">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* --- Resources --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-blue-500">
            Resources
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-blue-500">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and never miss any job updates or
            freelancer tips.
          </p>
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FreelanceHub. All Rights Reserved.
      </div>
    </div>
  );
};

export default MyFooter;
