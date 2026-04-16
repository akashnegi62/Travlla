"use client";

import React, { useState, useEffect, useMemo } from "react";
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

// --- TYPES ---
interface LocationData {
  id: string | number;
  name: string;
  img?: string;
}

interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  subMenu?: SubMenuItem[];
  isMega?: boolean;
  data?: LocationData[];
}

interface HeaderClientProps {
  national: LocationData[];
  international: LocationData[];
}

export default function HeaderClient({
  national = [],
  international = [],
}: HeaderClientProps) {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const formatSlug = (name: string) => {
    if (!name) return "Unknown";
    return name
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const allLocations = [...national, ...international];
    const query = searchQuery.toLowerCase();
    return allLocations
      .filter((loc) => loc.name && loc.name.toLowerCase().includes(query))
      .slice(0, 8);
  }, [searchQuery, national, international]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const menuData: MenuItem[] = [
    { name: "HOME", href: "/" },
    {
      name: "ABOUT US",
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
      name: "MEMBERSHIP",
      href: "#",
      subMenu: [
        { name: "Explore Membership", href: "/membership" },
        { name: "Understanding Costs", href: "/membership/costs" },
        { name: "What Is a Timeshare?", href: "/membership/timeshare" },
        { name: "What We Offer", href: "/membership/offer" },
      ],
    },
    {
      name: "CLIENT",
      href: "#",
      subMenu: [
        { name: "How it works", href: "/client/how-it-works" },
        { name: "Book Tour", href: "/client/book-tour" },
        { name: "Feedback", href: "/client/feedback" },
        { name: "Activities", href: "/client/activities" },
      ],
    },
    {
      name: "DOMESTIC DESTINATIONS",
      href: "/locations/national",
      isMega: true,
      data: national,
    },
    {
      name: "INTERNATIONAL DESTINATIONS",
      href: "/locations/international",
      isMega: true,
      data: international,
    },
    {
      name: "MEMBERS LOUNGE",
      href: "#",
      subMenu: [
        { name: "Login", href: "/login" },
        { name: "Book Holiday", href: "/members/book-holiday" },
      ],
    },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`w-full z-999 transition-all duration-500 absolute left-0 right-0 top-0 lg:pt-6 xl:pt-8 px-4 lg:px-6
        ${isFixed ? "fixed top-0! p-0!" : ""}`}
      >
        <div
          className={`mx-auto w-full max-w-400 transition-all duration-500 flex items-center justify-between 
          ${isFixed ? "bg-[#256168] rounded-b-3xl shadow-xl min-h-20 px-6 lg:px-10 xl:px-14 py-3" : "bg-transparent min-h-30"}`}
        >
          {/* --- LOGO --- */}
          <div className="flex items-center relative z-10 w-32 lg:w-36 xl:w-40 h-16 shrink-0">
            <Link
              href="/"
              className="table-cell align-middle relative w-full h-full mb-2"
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
          <nav className="hidden lg:flex justify-center grow font-medium px-0">
            <ul className="flex flex-nowrap items-center justify-center gap-1 xl:gap-2">
              {menuData.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`py-6 px-1.5 lg:px-1.5 xl:px-2 2xl:px-3 text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-[12px] font-bold flex items-center gap-1 transition-colors whitespace-nowrap
                    ${pathname === item.href ? "text-[#a3e635]" : "text-white hover:text-[#a3e635]"}`}
                  >
                    <span className="inline-block uppercase tracking-wide">
                      {item.name}
                    </span>
                    {(item.subMenu || item.isMega) && (
                      <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform shrink-0" />
                    )}
                  </Link>

                  {/* Standard Submenu */}
                  {item.subMenu && !item.isMega && (
                    <ul className="absolute left-0 w-64 bg-white rounded-2xl shadow-xl py-3 opacity-0 invisible translate-y-10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 border-t-2 border-[#004b62] z-1000">
                      {item.subMenu.map((sub) => (
                        <li
                          key={sub.name}
                          className="border-b border-black/5 last:border-none"
                        >
                          <Link
                            href={sub.href}
                            className="block px-6 py-3 text-sm font-semibold text-[#1a3d3d] hover:text-[#004b62] hover:pl-8 transition-all duration-300 whitespace-normal"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* MEGA MENU */}
                  {item.isMega && item.data && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-225 bg-white shadow-2xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 border-t-4 border-[#20b2aa] z-1000">
                      <div className="grid grid-cols-4 gap-x-8 gap-y-6 max-h-100 overflow-y-auto pr-4 custom-scrollbar">
                        {item.data.map((loc) => (
                          <Link
                            key={loc.id}
                            href={`/tour-detail/${formatSlug(loc.name)}/`}
                            className="text-[13px] font-bold text-black border-b border-dotted border-[#20b2aa] pb-2 hover:text-[#256168] transition-all uppercase whitespace-normal"
                          >
                            {loc.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* --- RIGHT SIDE ACTIONS --- */}
          <div className="flex items-center justify-end shrink-0">
            <ul className="flex items-center gap-3 xl:gap-5">
              <li>
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`flex items-center justify-center p-2 text-xl transition-colors
                  ${isFixed ? "text-white hover:text-[#a3e635]" : "text-white hover:text-[#a3e635]"}`}
                >
                  <FaSearch className="lg:mr-3 2xl:mr-0" />
                </button>
              </li>

              {/* MOBILE HAMBURGER ICON ONLY - Hidden on Desktop (lg:hidden) */}
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
            className="fixed inset-0 bg-[#f0f9f9]/95 backdrop-blur-sm z-1002 flex flex-col items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={closeSearch}
              className="absolute right-4 top-4 md:right-8 md:top-8 w-10 h-10 bg-[#a3e635] text-[#1a3d3d] rounded flex items-center justify-center text-xl hover:bg-[#1a3d3d] hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
            <div className="w-full max-w-150 relative">
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
                  className="h-15 md:h-17.5 px-6 md:px-8 text-base md:text-lg text-[#1a3d3d] w-full outline-none bg-transparent"
                />
                <button
                  type="button"
                  className="w-12.5 h-12.5 md:w-15 md:h-15 bg-[#1a3d3d] text-white flex items-center justify-center text-xl md:text-2xl hover:bg-[#a3e635] hover:text-[#1a3d3d] transition-colors m-1.5 rounded-full shrink-0"
                >
                  <FaSearch />
                </button>
              </form>

              {searchQuery.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-2xl shadow-xl overflow-hidden max-h-75 overflow-y-auto z-50">
                  {searchResults.length === 0 ? (
                    <div className="p-6 text-center text-gray-500 font-medium">
                      No locations found for &quot;{searchQuery}&quot;
                    </div>
                  ) : (
                    <ul className="py-2">
                      {searchResults.map((loc, index) => (
                        <li
                          key={index}
                          className="border-b border-gray-100 last:border-none"
                        >
                          <Link
                            href={`/tour-detail/${formatSlug(loc.name)}/`}
                            onClick={closeSearch}
                            className="flex items-center gap-3 px-6 py-4 hover:bg-[#f0f9f9] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#f0f9f9] text-[#1a3d3d] group-hover:bg-[#a3e635] flex items-center justify-center transition-colors">
                              <FaMapMarkerAlt size={14} />
                            </div>
                            <span className="text-lg font-bold text-[#1a3d3d] group-hover:text-[#004b62]">
                              {loc.name}
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

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-1000 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-75 bg-white z-1001 lg:hidden flex flex-col shadow-2xl"
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

              <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                <ul className="space-y-4">
                  {menuData.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-gray-100 pb-3"
                    >
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          item.subMenu || item.isMega
                            ? toggleSubMenu(item.name)
                            : setMobileMenuOpen(false)
                        }
                      >
                        {item.subMenu || item.isMega ? (
                          <span className="text-lg font-bold text-[#1a3d3d] uppercase">
                            {item.name}
                          </span>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-lg font-bold text-[#1a3d3d] uppercase"
                          >
                            {item.name}
                          </Link>
                        )}
                        {(item.subMenu || item.isMega) && (
                          <FaChevronDown
                            className={`text-sm transition-transform duration-300 ${activeSubMenu === item.name ? "rotate-180" : ""}`}
                          />
                        )}
                      </div>

                      <AnimatePresence>
                        {activeSubMenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
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
                            {item.isMega && item.data && (
                              <ul className="mt-3 ml-4 space-y-3 border-l-2 border-[#20b2aa] pl-4 max-h-75 overflow-y-auto custom-scrollbar pr-2">
                                {item.data.map((loc) => (
                                  <li key={loc.id}>
                                    <Link
                                      href={`/tour-detail/${formatSlug(loc.name)}/`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[14px] font-bold uppercase text-gray-600 hover:text-[#256168] whitespace-normal"
                                    >
                                      {loc.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
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

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #20b2aa;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
