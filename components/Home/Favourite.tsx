"use client";

import React, { useRef } from "react";
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 350 : scrollLeft + 350;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white xl:p-0 p-0">
      <div className="relative bg-[#1d5c5a] overflow-hidden min-h-[900px] flex flex-col shadow-2xl pb-16 pt-16">
        {/* --- BACKGROUND DECORATIONS --- */}

        {/* Huge Centered Text */}
        <div className="absolute top-40 right-0 flex flex-col items-start z-0 pointer-events-none select-none w-full max-w-[1000px] pl-4 lg:pl-12">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f59e0b] text-[80px] md:text-[120px] lg:text-[150px] font-black leading-[0.8] tracking-tighter"
          >
            TOP!
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-[50px] md:text-[90px] lg:text-[120px] font-black leading-[0.9] tracking-tight z-0"
          >
            DESTINATION
          </motion.span>
        </div>

        {/* Rock Climber on the Right */}
        <div className="absolute top-0 right-0 z-10 w-[280px] md:w-[400px] lg:w-[500px] h-[700px] pointer-events-none">
          <Image
            src="/img/man-rock.png" // Ensure you have your climber asset
            alt="Rock Climber"
            fill
            className="object-contain object-top-right drop-shadow-2xl"
            priority
          />
        </div>

        {/* --- HEADER CONTENT (Left Side) --- */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 mb-20 lg:mb-32">
          <div className="max-w-[450px]">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[42px] font-bold text-white leading-[1.2] mb-4"
            >
              <span className="text-[#f59e0b]">Most Favorite</span> Tour Places!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-sm md:text-[14px] leading-relaxed mb-8"
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

        {/* --- CARDS SLIDER --- */}
        <div className="relative w-full z-30 mt-auto px-4 md:px-12">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="group absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center hover:bg-white transition-all shadow-xl z-40"
          >
            <FaChevronLeft className="group-hover:text-[#f59e0b]" size={16} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="group absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center hover:bg-white transition-all shadow-xl z-40"
          >
            <FaChevronRight className="group-hover:text-[#f59e0b]" size={16} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6 pb-4 pt-4"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                className="min-w-[240px] md:min-w-[260px] snap-center shrink-0 group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Bordered Card Design */}
                <div className="border-[1.5px] border-[#2f7a78] rounded-[30px] p-3 bg-transparent hover:bg-[#185351] transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="w-full h-[320px] relative rounded-[20px] overflow-hidden mb-4">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 768px) 240px, 260px"
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
