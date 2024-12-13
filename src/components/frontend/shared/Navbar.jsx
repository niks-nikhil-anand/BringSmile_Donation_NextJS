"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import logo from '../../../../public/logo/SmileNoBg.png'
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-6  bg-white text-black">
              <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Starting state
          animate={{ opacity: 1, scale: 1 }}  // Final state
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animation timing
          whileHover={{ scale: 1.1 }} // Hover effect
          className="flex items-center space-x-3"
        >
          <Link href={"/"}>
            <Image src={logo} alt="BringSmile Logo" width={70} height={70} />
          </Link>
        </motion.div>
        <ul className="hidden md:flex space-x-6 font-medium">
            {[
              { href: "/", label: "HOME" },
              { href: "/aboutUs", label: "ABOUT US" },
              { href: "/contactUs", label: "CONTACT US" },
              { href: "#", label: "EVENTS" },
              { href: "#", label: "CAUSES" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#FF0080" }} // Framer Motion animation
                transition={{ duration: 0.3 }} // Smooth transition
              >
                <Link
                  href={item.href}
                  className="hover:text-[#FF0080] hover:underline transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        <div className="flex items-center space-x-4">
        <motion.button
          className="hidden sm:flex items-center px-4 py-2 border border-black rounded-full transition-all duration-300"
          whileHover={{
            scale: 1.05, // Scale up on hover
            backgroundColor: "#FF0080", // Background color change on hover
            color: "white", // Text color change on hover
          }}
          whileTap={{
            scale: 0.95, // Slight shrink on tap to simulate a press
          }}
        >
          Donate Now 
          <span className="ml-2 text-red-500">❤</span>
        </motion.button>


          <motion.button
            whileHover={{ scale: 1.2 }}
            className="block md:hidden text-xl"
            onClick={handleMenuToggle}
          >
            MENU ☰
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-0 bg-white text-black z-50 p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={handleMenuToggle}
              className="text-2xl hover:text-red-500"
            >
              <IoClose />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <Link href={"/"}>
            <li className="hover:text-orange-500">HOME</li>
            </Link>
            <Link href={"/aboutUs"}>
            <li className="hover:text-orange-500">ABOUT US</li>
            </Link>
            <li className="hover:text-orange-500">UPCOMING EVENTS</li>
            <li className="hover:text-orange-500">DONATION CAMPAIGNS</li>
            <li className="hover:text-orange-500">BECOME A VOLUNTEER</li>
            <li className="text-orange-500 font-bold">CONTACT US</li>
            <li className="hover:text-orange-500">FAQ&apos;S</li>
          </ul>
          <div className="mt-auto flex flex-wrap justify-between pt-6 border-t border-gray-300 text-sm">
            <a href="#" className="hover:text-orange-500">
              Ongoing Events →
            </a>
            <Link href={"/termsAndConditions"} className="hover:text-orange-500">
              Terms & Conditions →
            </Link>
            <Link href={"/returnPolicy"} className="hover:text-orange-500">
              Refund and Returns Policy →
            </Link>
            <Link href={"/privacyPolicy"} className="hover:text-orange-500">
              Privacy Policy →
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
