"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Property {
  id: string | number;
  name: string;
  description: string;
  img_1: string;
  location: string;
}

const CategoriesClient = ({ properties }: { properties: Property[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [mobileCardWidth, setMobileCardWidth] = useState(0);
  const [desktopCardWidth, setDesktopCardWidth] = useState(0);

  // Calculate card widths
  useEffect(() => {
    const updateCardWidths = () => {
      const mobileCard = mobileScrollRef.current?.querySelector(
        "[data-card]",
      ) as HTMLElement;
      if (mobileCard) setMobileCardWidth(mobileCard.offsetWidth + 16);

      const desktopCard = desktopScrollRef.current?.querySelector(
        "[data-card]",
      ) as HTMLElement;
      if (desktopCard) setDesktopCardWidth(desktopCard.offsetWidth + 32);
    };

    setTimeout(updateCardWidths, 200);
    window.addEventListener("resize", updateCardWidths);
    return () => window.removeEventListener("resize", updateCardWidths);
  }, [properties]);

  // Sync index with scroll
  const handleScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    width: number,
  ) => {
    if (!ref.current || width === 0) return;
    const newIndex = Math.round(ref.current.scrollLeft / width);
    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < properties.length
    ) {
      setActiveIndex(newIndex);
    }
  };

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

  const current = properties[activeIndex];
  const canScrollLeft = activeIndex > 0;
  const canScrollRight = activeIndex < properties.length - 1;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/tour-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        {/* MOBILE & TABLET VIEW */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          <div className="w-full space-y-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-[#1a3d3d] line-clamp-1 px-4">
                  {current.name}
                </h2>
                <p className="text-sm text-[#1a3d3d]/80 leading-relaxed px-4 line-clamp-3">
                  {current.description}
                </p>
                <Link
                  href={`/property/${current.id}`}
                  className="inline-flex items-center gap-2 bg-[#8bc34a] text-white px-6 py-3 rounded-full font-bold shadow-lg"
                >
                  View Details <FaChevronRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full max-w-85 sm:max-w-105 relative mx-auto mt-4">
            <div
              ref={mobileScrollRef}
              onScroll={() => handleScroll(mobileScrollRef, mobileCardWidth)}
              className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
            >
              {properties.map((item, index) => (
                <motion.div
                  key={item.id}
                  data-card
                  className="min-w-full snap-center shrink-0"
                  animate={{
                    scale: index === activeIndex ? 1 : 0.95,
                    opacity: index === activeIndex ? 1 : 0.5,
                  }}
                >
                  <div className="bg-white rounded-3xl p-3 shadow-2xl">
                    <div className="relative h-87.5 sm:h-105 rounded-2xl overflow-hidden">
                      <Image
                        src={item.img_1}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center py-4 text-[#1a3d3d]">
                      {item.location.length > 15
                        ? `${item.location.substring(0, 15)}..`
                        : item.location}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#8bc34a] text-white flex items-center justify-center shadow-xl z-20 disabled:opacity-30 cursor-pointer"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#8bc34a] text-white flex items-center justify-center shadow-xl z-20 disabled:opacity-30 cursor-pointer"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-[#1a3d3d] leading-tight">
                    {current.name}
                  </h2>
                  <p className="text-lg text-[#1a3d3d]/80 leading-relaxed line-clamp-4">
                    {current.description}
                  </p>
                  <Link
                    href={`/property/${current.id}`}
                    className="inline-flex items-center gap-2 bg-[#8bc34a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:-translate-y-1 transition-transform"
                  >
                    Explore Now <FaChevronRight size={16} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:w-2/3 relative">
              <div
                ref={desktopScrollRef}
                onScroll={() =>
                  handleScroll(desktopScrollRef, desktopCardWidth)
                }
                className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-8 px-4"
              >
                {properties.map((item, index) => {
                  const pos = index - activeIndex;
                  return (
                    <motion.div
                      key={item.id}
                      data-card
                      className="min-w-[calc(50%-16px)] snap-start shrink-0"
                      animate={{
                        scale: pos === 0 ? 1 : pos === 1 ? 0.92 : 0.85,
                        rotate: pos === 0 ? 0 : pos === 1 ? 4 : -4,
                        opacity: pos === 0 || pos === 1 ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-white rounded-4xl p-4 shadow-2xl">
                        <div className="relative h-105 rounded-3xl overflow-hidden">
                          <Image
                            src={item.img_1}
                            alt={item.name}
                            fill
                            priority
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-center py-5 text-[#1a3d3d]">
                          {item.location.length > 15
                            ? `${item.location.substring(0, 15)}..`
                            : item.location}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#8bc34a] text-white flex items-center justify-center shadow-xl z-20 disabled:opacity-30"
              >
                <FaChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 rounded-full bg-[#8bc34a] text-white flex items-center justify-center shadow-xl z-20 disabled:opacity-30"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 text-right">
          <span className="text-white font-bold text-xl block mb-3 drop-shadow-md">
            Wonderful Place For You
          </span>
          <h2 className="font-black text-6xl md:text-8xl lg:text-[100px] leading-none uppercase text-[#8bc34a] tracking-tighter drop-shadow-lg">
            TOP PROPERTIES
          </h2>
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

export default CategoriesClient;
