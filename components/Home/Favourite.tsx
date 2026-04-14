"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinations = [
  { name: "Mauritius", listings: "20 Listing", image: "/img/vac2.jpg" },
  { name: "Paris", listings: "28 Listing", image: "/img/vac1.jpg" },
  { name: "Kashmir", listings: "32 Listing", image: "/img/vac2.jpg" },
  { name: "Thailand", listings: "20 Listing", image: "/img/vac3.jpg" },
  { name: "Maldives", listings: "40 Listing", image: "/img/vac4.jpg" },
  { name: "Indonesia", listings: "80 Listing", image: "/img/vac5.jpg" },
  { name: "Bali", listings: "20 Listing", image: "/img/vac1.jpg" },
];

const Favourite = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      // Get exact width of a single card + the 20px gap
      const itemWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const gap = 20;
      const scrollAmount = itemWidth + gap;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      let scrollTo = scrollLeft;

      if (direction === "left") {
        scrollTo = scrollLeft - scrollAmount;
      } else {
        // If we reached the end (adding a 5px buffer for rounding issues), rewind to 0
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 5) {
          scrollTo = 0;
        } else {
          scrollTo = scrollLeft + scrollAmount;
        }
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // --- AUTO-SWIPE LOGIC ---
  useEffect(() => {
    // If the user is hovering over the slider, pause the interval
    if (isHovered) return;

    const interval = setInterval(() => {
      scroll("right");
    }, 3000); // Swipes every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-white xl:p-0 p-0">
      <div className="relative bg-[#256168] overflow-hidden min-h-225 flex flex-col shadow-2xl pb-16 pt-16">
        {/* --- BACKGROUND DECORATIONS --- */}
        {/* Rock Climber on the Right */}
        <div className="absolute top-0 -right-20 sm:right-0 z-10 w-70 md:w-100 lg:w-125 h-175 pointer-events-none opacity-50 lg:opacity-100 mix-blend-normal">
          <Image
            src="/img/man-rock.png" // Ensure you have your climber asset
            alt="Rock Climber"
            fill
            className="object-contain object-top-right drop-shadow-2xl"
            priority
          />
        </div>

        {/* --- HEADER CONTENT (Left Side) --- */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 mb-8 lg:mb-32">
          <div className="max-w-112.5 md:max-w-150 lg:max-w-112.5">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[50px] lg:text-[42px] font-bold text-white leading-[1.2] mb-4"
            >
              <span className="text-[#f59e0b]">Most Favorite</span> Tour Places!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-sm md:text-lg lg:text-[14px] leading-relaxed mb-8"
            >
              Choosing a destination can be exciting but also a bit overwhelming
              with so many amazing places out there! Let&apos;s narrow it down a
              little. Are you dreaming of peaceful nature, buzzing cities,
              historical wonders, or relaxing beaches?
            </motion.p>

            {/* Happy Customer Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full overflow-hidden border-[3px] border-[#1d5c5a] relative"
                  >
                    <Image
                      src={`/img/pic${i}.jpg`}
                      alt="user"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="block font-black text-xl text-[#a3e635] leading-none mb-1">
                  3.5k
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-90">
                  Happy Customer
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/destination-detail"
                className="inline-block bg-[#8bc34a] text-[#004b62] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-colors shadow-lg"
              >
                View More Destinations
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Huge Text: Relative on Mobile so it stacks, Absolute on Desktop so it floats */}
        <div className="relative lg:absolute lg:top-40 lg:left-1/2 flex flex-col items-start z-0 pointer-events-none select-none w-full max-w-250 px-6 md:px-12 lg:pl-12 mt-6 lg:mt-0 mb-10 lg:mb-0">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f59e0b] text-[10vw] md:text-[10vw] lg:text-[6vw] font-black leading-[0.8] tracking-tighter"
          >
            TOP!
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-[10vw] md:text-[10vw] lg:text-[6vw] font-black leading-[0.9] tracking-tight z-0"
          >
            DESTINATION
          </motion.span>
        </div>

        {/* --- CARDS SLIDER --- */}
        <div
          className="relative w-full z-30 mt-auto px-0 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="group absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center hover:bg-white transition-all shadow-xl z-40"
          >
            <FaChevronLeft className="group-hover:text-[#f59e0b]" size={16} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="group absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center hover:bg-white transition-all shadow-xl z-40"
          >
            <FaChevronRight className="group-hover:text-[#f59e0b]" size={16} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6 md:px-0 pb-4 pt-4"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                /* Exact fitting CSS logic based on 'gap-5' (20px):
                  - Mobile: 100% width (1 item)
                  - Tablet (md): 50% width minus half a gap (2 items)
                  - Desktop (lg): 20% width minus 4/5ths of a gap (5 items)
                */
                className="w-full md:w-[calc(50%-10px)] lg:w-[calc(20%-16px)] shrink-0 snap-start group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Bordered Card Design */}
                <div className="border-[1.5px] border-[#2f7a78] rounded-[30px] p-3 bg-transparent hover:bg-[#185351] transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="w-full h-80 relative rounded-[20px] overflow-hidden mb-4">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center pb-2">
                    <h3 className="text-xl md:text-[22px] font-bold text-white mb-1 transition-colors">
                      {dest.name}
                    </h3>
                    <span className="text-[11px] font-bold text-white/80">
                      {dest.listings}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default Favourite;
