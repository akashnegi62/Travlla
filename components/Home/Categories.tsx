"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tourCategories = [
  {
    id: 1,
    title: "Hiking",
    description:
      "Here are the people who we believe most changed the stories that defined the past year.",
    image: "/img/vac2.jpg",
    label: "Hiking",
  },
  {
    id: 2,
    title: "Wildlife Tourism",
    description:
      "Observing animals in their natural habitats like tiger safaris has become a popular and educational form of travel.",
    image: "/img/vac1.jpg",
    label: "Wildlife",
  },
  {
    id: 3,
    title: "Adventure Tours",
    description:
      "For those who seek the thrill. Paragliding, white-water rafting, and bungee jumping in exotic locations.",
    image: "/img/vac3.jpg",
    label: "Adventure Tours",
  },
  {
    id: 4,
    title: "Cultural Tours",
    description:
      "Explore history and local traditions through our curated cultural experiences across the globe.",
    image: "/img/vac4.jpg",
    label: "Cultural Tours",
  },
  {
    id: 5,
    title: "Beach Vacations",
    description:
      "Relax on pristine beaches and enjoy crystal-clear waters at the world's most beautiful coastal destinations.",
    image: "/img/vac5.jpg",
    label: "Beach & Island",
  },
];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [mobileCardWidth, setMobileCardWidth] = useState(0);
  const [desktopCardWidth, setDesktopCardWidth] = useState(0);

  // Calculate card widths
  useEffect(() => {
    const updateCardWidths = () => {
      // Mobile card width
      const mobileCard = mobileScrollRef.current?.querySelector(
        "[data-card]",
      ) as HTMLElement;
      if (mobileCard) {
        setMobileCardWidth(mobileCard.offsetWidth + 16); // gap-4 = 16px
      }

      // Desktop card width
      const desktopCard = desktopScrollRef.current?.querySelector(
        "[data-card]",
      ) as HTMLElement;
      if (desktopCard) {
        setDesktopCardWidth(desktopCard.offsetWidth + 32); // gap-8 = 32px
      }
    };

    // Delay to ensure DOM is ready
    setTimeout(updateCardWidths, 100);
    window.addEventListener("resize", updateCardWidths);
    return () => window.removeEventListener("resize", updateCardWidths);
  }, []);

  // Mobile scroll handler
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const handleMobileScroll = () => {
      if (mobileCardWidth > 0) {
        const scrollLeft = container.scrollLeft;
        const newIndex = Math.round(scrollLeft / mobileCardWidth);
        if (
          newIndex !== activeIndex &&
          newIndex >= 0 &&
          newIndex < tourCategories.length
        ) {
          setActiveIndex(newIndex);
        }
      }
    };

    container.addEventListener("scroll", handleMobileScroll);
    return () => container.removeEventListener("scroll", handleMobileScroll);
  }, [activeIndex, mobileCardWidth]);

  // Desktop scroll handler
  useEffect(() => {
    const container = desktopScrollRef.current;
    if (!container) return;

    const handleDesktopScroll = () => {
      if (desktopCardWidth > 0) {
        const scrollLeft = container.scrollLeft;
        const newIndex = Math.round(scrollLeft / desktopCardWidth);
        if (
          newIndex !== activeIndex &&
          newIndex >= 0 &&
          newIndex < tourCategories.length
        ) {
          setActiveIndex(newIndex);
        }
      }
    };

    container.addEventListener("scroll", handleDesktopScroll);
    return () => container.removeEventListener("scroll", handleDesktopScroll);
  }, [activeIndex, desktopCardWidth]);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const isMobile = window.innerWidth < 1024;
      const container = isMobile
        ? mobileScrollRef.current
        : desktopScrollRef.current;
      const cardWidth = isMobile ? mobileCardWidth : desktopCardWidth;

      if (container && cardWidth > 0) {
        const offset = direction === "left" ? -cardWidth : cardWidth;
        container.scrollBy({ left: offset, behavior: "smooth" });
      }
    },
    [mobileCardWidth, desktopCardWidth],
  );

  const canScrollLeft = activeIndex > 0;
  const canScrollRight = activeIndex < tourCategories.length - 1;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/img/tour-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        {/* MOBILE & TABLET VIEW - Stack layout */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Header Section */}
          <div className="w-full space-y-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4"
              >
                <h2 className="text-4xl font-bold text-[#1a3d3d]">
                  {tourCategories[activeIndex].title}
                </h2>

                <p className="text-base text-[#1a3d3d]/80 leading-relaxed px-4">
                  {tourCategories[activeIndex].description}
                </p>

                <Link
                  href="/tour-detail"
                  className="inline-flex items-center gap-2 bg-[#7ec850] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1a3d3d] transition-all duration-300 shadow-lg"
                >
                  View More
                  <FaChevronRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FIXED: Mobile/Tablet Slider Wrapper - Constrained max-width so it never stretches out of proportion on tablets */}
          <div className="w-full max-w-[340px] sm:max-w-[420px] relative mx-auto mt-4">
            <div
              ref={mobileScrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
            >
              {tourCategories.map((cat, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={cat.id}
                    data-card
                    // FIXED: Replaced calc() with min-w-full so it exactly fits the constrained wrapper
                    className="min-w-full snap-center shrink-0"
                    animate={{
                      scale: isActive ? 1 : 0.95,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Polaroid Style Card */}
                    <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-2xl">
                      {/* FIXED: Added responsive height so it's taller on tablets but looks proportionate */}
                      <div className="relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.label}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 420px"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center py-4 text-[#1a3d3d]">
                        {cat.label}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* FIXED Navigation Arrows: Overlapping exactly on the card border using translate-x */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#fbbf24] text-white flex items-center justify-center hover:bg-[#f59e0b] transition-all shadow-xl z-20 ${
                !canScrollLeft ? "opacity-30 cursor-not-allowed" : ""
              }`}
              aria-label="Previous"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#fbbf24] text-white flex items-center justify-center hover:bg-[#f59e0b] transition-all shadow-xl z-20 ${
                !canScrollRight ? "opacity-30 cursor-not-allowed" : ""
              }`}
              aria-label="Next"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          {/* Mobile/Tablet Bottom Section */}
          <div className="text-center w-full mt-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1a3d3d] font-bold text-lg block mb-2"
            >
              Wonderful Place For You
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black text-5xl sm:text-6xl uppercase text-[#fbbf24] select-none tracking-tighter"
            >
              TOUR CATEGORIES
            </motion.h2>
          </div>
        </div>

        {/* DESKTOP VIEW - Original layout */}
        <div className="hidden lg:flex flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/3 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl lg:text-6xl font-bold text-[#1a3d3d] leading-tight">
                    {tourCategories[activeIndex].title}
                  </h2>

                  <p className="text-lg text-[#1a3d3d]/80 leading-relaxed max-w-md">
                    {tourCategories[activeIndex].description}
                  </p>

                  <Link
                    href="/tour-detail"
                    className="inline-flex items-center gap-2 bg-[#7ec850] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1a3d3d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    View More
                    <FaChevronRight size={16} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SLIDER */}
            <div className="lg:w-2/3 relative">
              <div
                ref={desktopScrollRef}
                className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-8 px-4"
              >
                {tourCategories.map((cat, index) => {
                  const position = index - activeIndex;

                  return (
                    <motion.div
                      key={cat.id}
                      data-card
                      className="min-w-[calc(50%-16px)] snap-start shrink-0"
                      style={{ transformOrigin: "center center" }}
                      animate={{
                        scale:
                          position === 0 ? 1 : position === 1 ? 0.92 : 0.85,
                        rotate: position === 0 ? 0 : position === 1 ? 4 : -4,
                        opacity: position === 0 || position === 1 ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* Polaroid Style Card */}
                      <div className="bg-white rounded-4xl p-4 shadow-2xl">
                        <div className="relative h-105 rounded-3xl overflow-hidden">
                          <Image
                            src={cat.image}
                            alt={cat.label}
                            fill
                            className="object-cover"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 380px"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-center py-5 text-[#1a3d3d]">
                          {cat.label}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#fbbf24] text-white flex items-center justify-center hover:bg-[#f59e0b] transition-all shadow-xl z-20 ${
                  !canScrollLeft ? "opacity-30 cursor-not-allowed" : ""
                }`}
                aria-label="Previous"
              >
                <FaChevronLeft size={18} />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 rounded-full bg-[#fbbf24] text-white flex items-center justify-center hover:bg-[#f59e0b] transition-all shadow-xl z-20 ${
                  !canScrollRight ? "opacity-30 cursor-not-allowed" : ""
                }`}
                aria-label="Next"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-20 text-right">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-bold text-xl md:text-2xl block mb-3 drop-shadow-md"
            >
              Wonderful Place For You
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black text-6xl md:text-8xl lg:text-[100px] leading-none uppercase text-[#fbbf24] select-none tracking-tighter drop-shadow-lg"
            >
              TOUR CATEGORIES
            </motion.h2>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Categories;
