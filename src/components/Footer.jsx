import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/logo.png"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React from 'react'


export default function Footer() {
  return (
    <footer className="bg-cyan-600 text-white py-10 md:px-10 lg:px-30">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-5">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Kingkong Logo" className="w-[15%] " />
            <h2 className="font-bold text-lg">Kingkong</h2>
          </div>
          <p className="mt-4 text-sm">
            We don't just move cargo; we craft bespoke solutions designed
            specifically for your business.
          </p>
          <p className="mt-6 text-xs">© 2025 copyright HM Webix</p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><HashLink smooth to="/services#gssa" className="hover:underline">GSSA/GSA</HashLink></li>
            <li><HashLink smooth to="/services#csa" className="hover:underline">CSA</HashLink></li>
            <li><HashLink smooth to="/services#cargo" className="hover:underline">Cargo Charter</HashLink></li>
            <li><HashLink smooth to="/services#lam" className="hover:underline">Land Air Mode</HashLink></li>
            <li><HashLink smooth to="/services#rvg" className="hover:underline">Redoc Via Getway</HashLink></li>
            <li><HashLink smooth to="/services#special" className="hover:underline">Special Cargo Handling</HashLink></li>

          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><HashLink smooth to="/about#who" className="hover:underline">Who are we?</HashLink></li>
            <li><HashLink smooth to="/about#amch" className="hover:underline">Amcham Member</HashLink></li>
            <li><HashLink smooth to="/about#our" className="hover:underline">Our Office</HashLink></li>
            <li><HashLink smooth to="/about#man" className="hover:underline">Management Team</HashLink></li>
            <li><HashLink smooth to="/about#gen" className="hover:underline">General Manager</HashLink></li>
          </ul>
        </div>

        {/* Office & Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Office</h3>
          <p className="text-sm">
            3rd Floor, The Helix Office, No. 107-113, <br />
            12251 Preah Monivong Blvd (93), <br />
            Phnom Penh, Kingdom of Cambodia
          </p>
          <h3 className="font-semibold text-lg mt-4 mb-2">Contact Us</h3>
          <p className="text-sm">
            <a href={`mailto:kingkongavs@pnh.kingkong-gp.com`}>kingkongavs@pnh.kingkong-gp.com</a>
          </p>
          <p className="text-sm">+855 67 777 444</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 text-xl">  
            <a href="https://www.facebook.com/profile.php?id=100063691085168" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/108311701" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="https://t.me/kingkongcambodia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTelegramPlane />
            </a>   
          </div>
        </div>
      </div>
    </footer>
  );
}
