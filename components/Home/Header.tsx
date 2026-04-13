"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";

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
      { name: "Understanding Costs", href: "/membership/costs" },
      { name: "What Is a Timeshare?", href: "/membership/timeshare" },
      { name: "What We Offer", href: "/membership/offer" },
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
      { name: "Book Holiday", href: "/members/book-holiday" },
    ],
  },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

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
        className={`w-full z-999 transition-all duration-500 absolute left-0 right-0 top-0 lg:p-8 
        ${isFixed ? "fixed top-0! p-0!" : ""}`}
      >
        <div
          className={`mx-auto w-full transition-all duration-500 flex items-center justify-between 
          ${isFixed ? "bg-[#256168] rounded-b-3xl shadow-xl min-h-20 px-8" : "bg-transparent min-h-30"}`}
        >
          {/* --- LOGO --- */}
          <div className="flex items-center relative z-10 w-44 h-20">
            <Link
              href="/"
              className="table-cell align-middle relative w-full h-full mb-5"
            >
              <Image
                src={isFixed ? "/img/logo.png" : "/img/logo-black.png"} // Swap logo on scroll
                alt="Logo"
                fill
                className="object-cover duration-500"
                priority
              />
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex justify-center grow font-medium">
            <ul className="flex flex-wrap items-center">
              {menuData.map((item) => (
                <li key={item.name} className="relative group px-2 xl:px-4">
                  <Link
                    href={item.href}
                    className={`py-8 text-[15px] font-bold flex items-center gap-1 transition-colors
                    ${pathname === item.href ? "text-[#a3e635]" : isFixed ? "text-white hover:text-[#a3e635]" : "text-[#ffff] hover:text-[#a3e635]"}`}
                  >
                    <span className="inline-block whitespace-nowrap">
                      {item.name}
                    </span>
                    {item.subMenu && (
                      <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subMenu && (
                    <ul className="absolute left-0 w-64 bg-white rounded-2xl shadow-xl py-3 opacity-0 invisible translate-y-10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 border-t-2 border-[#004b62] z-50">
                      {item.subMenu.map((sub) => (
                        <li
                          key={sub.name}
                          className="border-b border-black/5 last:border-none"
                        >
                          <Link
                            href={sub.href}
                            className="block px-6 py-3 text-sm font-semibold text-[#1a3d3d] hover:text-[#004b62] hover:pl-8 transition-all duration-500"
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

          {/* --- RIGHT SIDE ACTIONS --- */}
          <div className="flex items-center justify-end h-20 xl:pl-8 z-10 ml-auto">
            <ul className="flex items-center gap-4">
              {/* Search Toggle */}
              <li>
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`flex items-center justify-center w-14 h-14 text-xl transition-colors
                  ${isFixed ? "text-white hover:text-[#a3e635]" : "text-white hover:text-[#a3e635]"}`}
                >
                  <FaSearch />
                </button>
              </li>

              {/* Hamburger Mobile Toggle */}
              <li className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex flex-col gap-1.5 p-2"
                >
                  <span
                    className={`block w-7 h-0.5 rounded-full duration-300 ${isFixed ? "bg-white" : "bg-[#1a3d3d]"}`}
                  ></span>
                  <span
                    className={`block w-7 h-0.5 rounded-full duration-300 ${isFixed ? "bg-white" : "bg-[#1a3d3d]"}`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 rounded-full duration-300 ${isFixed ? "bg-white" : "bg-[#1a3d3d]"}`}
                  ></span>
                </button>
              </li>

              {/* Info Sidebar Toggle (Desktop Only) */}
              <li className="hidden lg:block">
                <button className="w-11 h-11 bg-[#1a3d3d] flex flex-col items-center justify-center gap-1.5 rounded relative overflow-hidden group">
                  <span className="block w-7 h-0.5 bg-white group-hover:w-5 transition-all"></span>
                  <span className="block w-7 h-0.5 bg-white"></span>
                  <span className="block w-7 h-0.5 bg-white group-hover:w-4 transition-all"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* --- SEARCH FULLSCREEN OVERLAY --- */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#f0f9f9] z-1002 flex items-center justify-center p-8"
          >
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-8 top-8 w-10 h-10 bg-[#a3e635] text-[#1a3d3d] rounded flex items-center justify-center text-xl hover:bg-[#1a3d3d] hover:text-white transition-all"
            >
              <FaTimes />
            </button>
            <form className="relative flex items-center w-full max-w-[600px] bg-white rounded-full overflow-hidden shadow-2xl">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="h-[70px] px-8 text-lg text-[#1a3d3d] w-full outline-none"
              />
              <button
                type="submit"
                className="w-[70px] h-[70px] bg-[#1a3d3d] text-white flex items-center justify-center text-2xl hover:bg-[#a3e635] hover:text-[#1a3d3d] transition-colors m-2 rounded-full"
              >
                <FaSearch />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE SIDEBAR MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-1000 lg:hidden backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-[300px] bg-white z-1001 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="py-6 px-5 flex items-center justify-between border-b border-gray-100">
                <Image
                  src="/img/logo-black.png"
                  alt="Logo"
                  width={140}
                  height={40}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-gray-500 hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-4">
                  {menuData.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-gray-100 pb-3"
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          !item.subMenu && setMobileMenuOpen(false)
                        }
                        className="text-lg font-bold text-[#1a3d3d] flex justify-between items-center hover:text-[#a3e635]"
                      >
                        {item.name}
                      </Link>
                      {item.subMenu && (
                        <ul className="mt-3 ml-4 space-y-3 border-l-2 border-[#a3e635] pl-4">
                          {item.subMenu.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[15px] font-semibold text-gray-500 hover:text-[#004b62]"
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
