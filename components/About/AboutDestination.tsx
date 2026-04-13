"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinations = [
  { name: "Spain", img: "/img/vac4.jpg" },
  { name: "California", img: "/img/vac5.jpg" },
  { name: "Paris", img: "/img/vac1.jpg" },
  { name: "Maldives", img: "/img/vac2.jpg" },
  { name: "Thailand", img: "/img/vac3.jpg" },
  { name: "Bangkok", img: "/img/vac2.jpg" },
  { name: "Tokyo", img: "/img/vac3.jpg" },
  { name: "Hong Kong", img: "/img/vac1.jpg" },
];

const PopularDestination = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      // Get the exact width of a single card
      const itemWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      // Gap is 24px because we are using Tailwind's 'gap-6' (1.5rem = 24px)
      const gap = 24;
      // Scroll exactly 1 item + 1 gap at a time
      const scrollAmount = itemWidth + gap;

      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden md:pb-24 pb-12 md:pt-32 pt-16 bg-[#f0f9fa] bg-contain bg-bottom bg-repeat-x bg-[url('/img/bg-cloud.png')] z-0">
      {/* Background Decorative Balloons */}
      <div className="absolute left-0 lg:-left-10 top-1/3 w-32 md:w-56 opacity-80 pointer-events-none z-0">
        <Image
          src="/img/redballon.png"
          alt="balloon"
          width={233}
          height={333}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute right-0 lg:-right-4 top-1/2 w-20 md:w-32 opacity-80 pointer-events-none z-0">
        <Image
          src="/img/hotballon-right.png"
          alt="balloon"
          width={110}
          height={166}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
        {/* TITLE START */}
        <div className="text-center max-w-[600px] mx-auto md:mb-16 mb-10">
          <h2 className="xl:text-[46px] md:text-4xl text-3xl font-bold mb-3">
            <span className="text-[#f59e0b]">Popular </span>
            <span className="text-[#1a3d3d]">Destination</span>
          </h2>
          <p className="text-[15px] text-gray-500 mb-2">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <div className="flex justify-center">
            <Image
              src="/img/title-seperator.png"
              alt="Separator"
              width={200}
              height={20}
              className="h-auto opacity-50"
            />
          </div>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative w-full mx-auto">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-10"
          >
            {destinations.map((dest, index) => (
              <div
                key={index}
                /* Responsive sizing using exact calculations based on gap-6 (24px):
                  - Mobile: 100% width (1 item)
                  - Tablet (md): 50% width minus half a gap (12px) (2 items)
                  - Desktop (lg): 25% width minus 3/4 of a gap (18px) (4 items)
                */
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start"
              >
                <div className="relative group/card h-[450px] w-full rounded-[30px] overflow-hidden shadow-md bg-white">
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={dest.img}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover/card:scale-110"
                    />
                  </div>

                  {/* Floating White Label */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <Link href="/destination-detail" className="block">
                      <div className="bg-white text-center py-4 rounded-[20px] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-[#1a3d3d]">
                          {dest.name}
                        </h3>
                      </div>
                    </Link>
                  </div>

                  {/* Subtle Dark Gradient to make the white label pop more */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Centered Scroll Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center hover:bg-[#d98208] transition-colors shadow-lg"
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center hover:bg-[#d98208] transition-colors shadow-lg"
              aria-label="Scroll Right"
            >
              <FaChevronRight size={16} />
            </button>
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

export default PopularDestination;
