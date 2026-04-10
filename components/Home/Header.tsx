"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaClock,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const menuData = [
  { name: "Home", href: "/" },
  {
    name: "About us",
    href: "#",
    subMenu: [
      { name: "Overview", href: "/about" },
      { name: "Our Philosophy", href: "/about/philosophy" },
      { name: "Founder's Message", href: "/about/message" },
      { name: "What's New", href: "/about/news" },
      { name: "Career", href: "/about/career" },
    ],
  },
  {
    name: "Become a Member",
    href: "#",
    subMenu: [
      { name: "Explore Membership", href: "/membership" },
      { name: "Understanding Costs", href: "/costs" },
      { name: "What Is a Timeshare?", href: "/timeshare" },
      { name: "What We Offer", href: "/offer" },
    ],
  },
  {
    name: "Client",
    href: "#",
    subMenu: [
      { name: "How it works", href: "/client/how-it-works" },
      { name: "Book Tour", href: "/client/book-tour" },
      { name: "Feedback", href: "/client/feedback" },
      { name: "Activities", href: "/client/activities" },
    ],
  },
  {
    name: "Locations",
    href: "#",
    subMenu: [
      { name: "National", href: "/locations/national" },
      { name: "International", href: "/locations/international" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
  {
    name: "Members lounge",
    href: "#",
    subMenu: [
      { name: "Login", href: "https://rosewoodworldwidetravel.com/client/" },
      { name: "Book Holiday", href: "/book-holiday" },
    ],
  },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-999 transition-all duration-300 ${
          isFixed
            ? "fixed top-0 bg-white shadow-lg translate-y-0"
            : "absolute top-0 bg-transparent"
        }`}
      >
        {/* --- TOP LINE --- */}
        {!isFixed && (
          <div className="bg-[#004b62]/90 text-white py-2 text-sm border-b border-white/10">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-xs" />
                  <span className="font-bold">+91 8929863875</span>
                </div>
                <div className="hidden md:flex items-center gap-2 opacity-80">
                  <FaClock className="text-xs" />
                  <span>Tue-Sun: 10.00am - 6.00pm</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <ul className="flex gap-4 font-semibold">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-[#a3e635] transition-colors"
                    >
                      Pay Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://rosewoodworldwidetravel.com/client/"
                      className="hover:text-[#a3e635] transition-colors"
                    >
                      Sign in
                    </Link>
                  </li>
                </ul>
                <div className="hidden lg:flex items-center gap-3 text-white/80">
                  <Link href="#" className="hover:text-white">
                    <FaFacebookF />
                  </Link>
                  <Link href="#" className="hover:text-white">
                    <FaTwitter />
                  </Link>
                  <Link href="#" className="hover:text-white">
                    <FaPinterestP />
                  </Link>
                  <Link href="#" className="hover:text-white">
                    <FaInstagram />
                  </Link>
                  <Link href="#" className="hover:text-white">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MAIN NAVIGATION --- */}
        <div
          className={`transition-all duration-300 ${
            isFixed ? "py-2 bg-white" : "py-4 bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between gap-8">
            {/* Logo - Centered in height with items */}
            <div className="shrink-0 mb-5">
              <Link href="/" className="relative block w-64 h-16">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  fill
                  sizes="256px"
                  className="object-cover transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu - Aligned on the same line */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {menuData.map((item) => (
                  <li key={item.name} className="relative group px-2 py-2">
                    <Link
                      href={item.href}
                      className={`text-[15px] xl:text-[16px] font-bold flex items-center gap-1 transition-colors
                      ${isFixed ? "text-gray-700" : "text-white hover:text-white/80"} 
                      hover:text-[#a3e635] whitespace-nowrap`}
                    >
                      {item.name}
                      {item.subMenu && (
                        <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {item.subMenu && (
                      <ul className="absolute top-full left-0 w-60 bg-white shadow-2xl rounded-b-lg py-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 border-t-2 border-[#004b62]">
                        {item.subMenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="block px-6 py-2 text-[14px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#004b62] hover:pl-8 transition-all"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 text-2xl transition-colors ${isFixed ? "text-[#004b62]" : "text-white"}`}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 z-1000 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-1001 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={160}
                  height={50}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-500 text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-6">
                <ul className="space-y-2">
                  {menuData.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-gray-50 pb-2"
                    >
                      <div className="flex flex-col">
                        <Link
                          href={item.href}
                          onClick={() =>
                            !item.subMenu && setMobileMenuOpen(false)
                          }
                          className="text-lg font-bold text-[#004b62] flex justify-between items-center py-2"
                        >
                          {item.name}
                        </Link>
                        {item.subMenu && (
                          <ul className="mt-1 ml-4 space-y-2 border-l-2 border-gray-100 pl-4 mb-2">
                            {item.subMenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-gray-500 font-medium py-1 block hover:text-[#004b62]"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
