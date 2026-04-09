"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinations = [
  {
    name: "Paris",
    listings: "28 Listing",
    image: "/vac1.jpg",
  },
  {
    name: "Kashmir",
    listings: "32 Listing",
    image: "/vac2.jpg",
  },
  {
    name: "Thailand",
    listings: "20 Listing",
    image: "/vac3.jpg",
  },
  {
    name: "Maldives",
    listings: "40 Listing",
    image: "/vac4.jpg",
  },
  {
    name: "Indonesia",
    listings: "80 Listing",
    image: "/vac5.jpg",
  },
  {
    name: "Bali",
    listings: "20 Listing",
    image: "/vac1.jpg",
  },
  {
    name: "Mauritius",
    listings: "20 Listing",
    image: "/vac2.jpg",
  },
];

const Favourite = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#eefeff] 2xl:p-12.5 xl:p-9 p-0">
      <div className="relative bg-[#1a3d3d] xl:rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="lg:flex items-center max-w-405 mx-auto px-6 pb-7.5 md:p-7.5 pt-12.5 lg:px-10 lg:pt-25 lg:pb-18.75">
          <div className="max-w-125 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="sm:mb-15 mb-7.5"
            >
              <h2 className="xl:text-[46px] md:text-[40px] text-3xl mb-3.5 font-bold text-white leading-tight">
                <span className="text-[#a3e635]">Most Favorite</span> Tour
                Places!
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Choosing a destination can be exciting but also a bit
                overwhelming! Narrow it down: are you dreaming of nature,
                buzzing cities, or relaxing beaches?
              </p>
            </motion.div>

            {/* Happy Customer Stats */}
            <div className="flex mb-7.5 items-center">
              <div className="flex items-center mr-5">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="w-9 h-9 inline-flex rounded-full overflow-hidden border border-white -ml-2.5 first:ml-0"
                  >
                    <Image
                      src={`/pic${i}.jpg`}
                      alt="user"
                      width={34}
                      height={34}
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div>
                <span className="block font-black text-[22px] text-[#fbbf24]">
                  3.5k
                </span>
                <p className="uppercase font-medium text-[10px] text-white tracking-wider">
                  Happy Customer
                </p>
              </div>
            </div>

            <Link
              href="/destination-detail"
              className="inline-block bg-[#a3e635] text-[#1a3d3d] px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300"
            >
              View More Destinations
            </Link>
          </div>

          {/* Watermark Background Text */}
          <div className="hidden lg:block absolute right-10 top-20 font-black text-[120px] uppercase text-white/5 pointer-events-none select-none">
            <span className="block text-[#a3e635]/10">Top!</span>
            Destination
          </div>
        </div>

        {/* Custom Slider Section */}
        <div className="px-6 pb-15 relative">
          {/* Scroll Controls */}
          <div className="absolute lg:-top-20 lg:right-15 -top-20 right-5 flex gap-3 z-20">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#a3e635] text-[#1a3d3d] flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#a3e635] text-[#1a3d3d] flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                className="min-w-70 md:min-w-[320px] flex-1 snap-start group cursor-pointer"
                whileHover={{ flexGrow: 1.5 }} // Mimics the flex-1 to flex-2 original behavior
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <div className="mb-px border border-white/20 rounded-3xl p-3.75 duration-500 bg-[#1a3d3d] group-hover:bg-[#f8fdfd] transition-all h-full">
                  <div className="relative overflow-hidden rounded-2xl h-87.5">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center mt-5 mb-2">
                    <h3 className="text-2xl font-bold transition-colors duration-500 text-white group-hover:text-[#1a3d3d]">
                      {dest.name}
                    </h3>
                    <span className="block text-sm font-medium text-white/60 group-hover:text-gray-500">
                      {dest.listings}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Man on Rock Decoration */}
        <div className="absolute top-0 right-0 max-lg:w-[30%] hidden md:block pointer-events-none mix-blend-lighten opacity-30 lg:opacity-100">
          <Image
            src="/man-rock.png"
            alt="Decoration"
            width={450}
            height={550}
            className="object-contain"
          />
        </div>
      </div>

      {/* Tailwind CSS for hiding scrollbars */}
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
