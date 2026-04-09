"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Destinations", href: "/destination" },
  { name: "Tours", href: "/tour" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full z-999 transition-all duration-500 ${isFixed ? "top-0 bg-[#1a3d3d] py-2 rounded-b-3xl shadow-2xl" : "lg:top-8 top-0 px-0 lg:px-8 bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between min-h-20">
          <Link href="/" className="relative z-10 w-40 h-12">
            <Image
              src="/logo-dark.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center grow justify-center">
            <ul className="flex items-center">
              {menuItems.map((item) => (
                <li key={item.name} className="relative group px-5 py-6">
                  <Link
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${pathname === item.href ? "text-[#a3e635]" : "text-white hover:text-[#fbbf24]"}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 relative z-10 text-white">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-3 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaSearch size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar - Fixed useEffect error by using onClick closeMenus */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenus}
              className="fixed inset-0 bg-black/60 z-1000 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed top-0 left-0 h-full w-75 bg-white z-1001 lg:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <Image
                  src="/logo-dark.png"
                  alt="Logo"
                  width={120}
                  height={40}
                />
                <button
                  onClick={closeMenus}
                  className="text-[#1a3d3d] p-2 bg-gray-100 rounded-full"
                >
                  <FaXmark />
                </button>
              </div>
              <ul className="space-y-6 flex-1 overflow-y-auto">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="text-xl font-black text-[#1a3d3d] uppercase"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            className="fixed inset-0 bg-[#1a3d3d] z-1002 flex items-center justify-center p-6"
          >
            <button
              onClick={closeMenus}
              className="absolute top-10 right-10 w-12 h-12 bg-[#a3e635] rounded-full flex items-center justify-center"
            >
              <FaXmark size={24} />
            </button>
            <form className="w-full max-w-3xl border-b-2 border-[#a3e635] flex items-center">
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent py-8 text-4xl text-white outline-none italic font-serif"
              />
              <FaSearch className="text-[#a3e635] text-3xl" />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
