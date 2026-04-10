"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width dynamically
  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollRef.current) {
        const card = scrollRef.current.querySelector(
          "[data-card]",
        ) as HTMLElement;
        if (card) {
          const gap = 32; // gap-8 = 32px
          setCardWidth(card.offsetWidth + gap);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current && cardWidth > 0) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex < tourCategories.length - 1) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardWidth > 0) {
      const offset = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  });

  const canScrollLeft = activeIndex > 0;
  const canScrollRight = activeIndex < tourCategories.length - 2;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/img/tour-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay for better readability */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent z-0" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
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
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-8 px-4"
            >
              {tourCategories.map((cat, index) => {
                const position = index - activeIndex;
                // position 0: Active/In View
                // position 1: Next/Second (peeking in)
                // others: Off-screen

                return (
                  <motion.div
                    key={cat.id}
                    data-card
                    className="min-w-[calc(50%-16px)] snap-start shrink-0"
                    style={{ transformOrigin: "center center" }}
                    animate={{
                      scale: position === 0 ? 1 : position === 1 ? 0.92 : 0.85,
                      rotate: position === 0 ? 0 : position === 1 ? 4 : -4,
                      opacity: position === 0 || position === 1 ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Polaroid Style Card */}
                    <div className="bg-white rounded-4xl p-4 shadow-2xl">
                      <div className="relative h-[420px] rounded-3xl overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.label}
                          fill
                          className="object-cover"
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
