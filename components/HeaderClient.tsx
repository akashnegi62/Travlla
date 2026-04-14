"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaSearch,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  subMenu?: SubMenuItem[];
}

const menuData: MenuItem[] = [
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
      { name: "Login", href: "/login" },
      { name: "Book Holiday", href: "/members/book-holiday" },
    ],
  },
];

// 1. Accept the locations array as a prop from the Server Component
export default function HeaderClient({ locations }: { locations: string[] }) {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // --- SEARCH STATE ---
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMenu = (name: string) => {
    setActiveSubMenu(activeSubMenu === name ? null : name);
  };

  // 2. INSTANT LOCAL SEARCH
  // Filters the passed-in locations array instantly on every keystroke
  useEffect(() => {
    if (!searchQuery.trim()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = locations.filter((loc) =>
      loc.toLowerCase().includes(query),
    );

    // Limit to top 8 results so the dropdown doesn't get too massive
    setSearchResults(results.slice(0, 8));
  }, [searchQuery, locations]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <header
        className={`w-full z-[999] transition-all duration-500 absolute left-0 right-0 top-0 lg:p-8 px-5
        ${isFixed ? "fixed !top-0 !p-0" : ""}`}
      >
        <div
          className={`mx-auto w-[95%] transition-all duration-500 flex items-center justify-between 
          ${isFixed ? "bg-[#256168] rounded-b-3xl shadow-xl min-h-[80px] px-4 py-5 lg:px-8" : "bg-transparent min-h-[120px]"}`}
        >
          {/* --- LOGO --- */}
          <div className="flex items-center relative z-10 w-36 lg:w-44 h-20 shrink-0">
            <Link
              href="/"
              className="table-cell align-middle relative w-full h-full mb-5"
            >
              <Image
                src="/img/newlogo.png"
                alt="Logo"
                fill
                className="object-contain duration-500"
                priority
              />
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex justify-center grow font-medium">
            <ul className="flex flex-wrap items-center justify-center">
              {menuData.map((item) => (
                <li key={item.name} className="relative group px-1 xl:px-4">
                  <Link
                    href={item.href}
                    className={`py-8 text-[13px] xl:text-[15px] font-bold flex items-center gap-1 transition-colors
                    ${pathname === item.href ? "text-[#a3e635]" : "text-white hover:text-[#a3e635]"}`}
                  >
                    <span className="inline-block whitespace-nowrap">
                      {item.name}
                    </span>
                    {item.subMenu && (
                      <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>

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
          <div className="flex items-center justify-end h-20 xl:pl-8 z-10 shrink-0">
            <ul className="flex items-center gap-2 xl:gap-4">
              <li>
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`flex items-center justify-center w-10 lg:w-14 h-14 text-xl transition-colors
                  ${isFixed ? "text-white hover:text-[#a3e635]" : "text-white hover:text-[#a3e635]"}`}
                >
                  <FaSearch />
                </button>
              </li>

              <li className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex flex-col gap-1.5 p-2"
                >
                  <span className="block bg-white w-7 h-0.5 rounded-full duration-300"></span>
                  <span className="block bg-white w-7 h-0.5 rounded-full duration-300"></span>
                  <span className="block bg-white w-5 h-0.5 rounded-full duration-300"></span>
                </button>
              </li>

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

      {/* --- SEARCH OVERLAY --- */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#f0f9f9]/95 backdrop-blur-sm z-[1002] flex flex-col items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={closeSearch}
              className="absolute right-4 top-4 md:right-8 md:top-8 w-10 h-10 bg-[#a3e635] text-[#1a3d3d] rounded flex items-center justify-center text-xl hover:bg-[#1a3d3d] hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            <div className="w-full max-w-[600px] relative">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex items-center w-full bg-white rounded-full overflow-hidden shadow-2xl border-2 border-transparent focus-within:border-[#a3e635] transition-colors"
              >
                <input
                  type="text"
                  placeholder="Search destinations (e.g. Goa, Paris)..."
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-[60px] md:h-[70px] px-6 md:px-8 text-base md:text-lg text-[#1a3d3d] w-full outline-none bg-transparent"
                />
                <button
                  type="button"
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#1a3d3d] text-white flex items-center justify-center text-xl md:text-2xl hover:bg-[#a3e635] hover:text-[#1a3d3d] transition-colors m-1.5 rounded-full shrink-0"
                >
                  <FaSearch />
                </button>
              </form>

              {/* Instant Search Results Dropdown */}
              {searchQuery.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-2xl shadow-xl overflow-hidden max-h-[300px] overflow-y-auto z-50">
                  {searchResults.length === 0 ? (
                    <div className="p-6 text-center text-gray-500 font-medium">
                      No locations found for &quot;{searchQuery}&quot;
                    </div>
                  ) : (
                    <ul className="py-2">
                      {searchResults.map((location, index) => (
                        <li
                          key={index}
                          className="border-b border-gray-100 last:border-none"
                        >
                          <Link
                            href={`/tour-detail/${location}`}
                            onClick={closeSearch}
                            className="flex items-center gap-3 px-6 py-4 hover:bg-[#f0f9f9] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#f0f9f9] text-[#1a3d3d] group-hover:bg-[#a3e635] flex items-center justify-center transition-colors">
                              <FaMapMarkerAlt size={14} />
                            </div>
                            <span className="text-lg font-bold text-[#1a3d3d] group-hover:text-[#004b62]">
                              {location}
                            </span>
                            <span className="ml-auto text-sm text-gray-400 group-hover:text-[#1a3d3d] font-medium">
                              View Details →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ... [KEEP YOUR EXISTING MOBILE SIDEBAR CODE HERE EXACTLY AS IT WAS] ... */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[1000] lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-[300px] bg-white z-[1001] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="py-6 px-5 flex items-center justify-between border-b border-gray-100">
                <Image
                  src="/img/newlogo.png"
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
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          item.subMenu
                            ? toggleSubMenu(item.name)
                            : setMobileMenuOpen(false)
                        }
                      >
                        {item.subMenu ? (
                          <span className="text-lg font-bold text-[#1a3d3d]">
                            {item.name}
                          </span>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-lg font-bold text-[#1a3d3d]"
                          >
                            {item.name}
                          </Link>
                        )}
                        {item.subMenu && (
                          <FaChevronDown
                            className={`text-sm transition-transform duration-300 ${activeSubMenu === item.name ? "rotate-180" : ""}`}
                          />
                        )}
                      </div>
                      <AnimatePresence>
                        {item.subMenu && activeSubMenu === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 ml-4 space-y-3 border-l-2 border-[#a3e635] pl-4 overflow-hidden"
                          >
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
                          </motion.ul>
                        )}
                      </AnimatePresence>
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
