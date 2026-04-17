"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";

const tourData = [
  {
    id: 1,
    location: "Tokyo City Japan",
    price: 59,
    duration: "8 days, 3 Nights",
    rating: 4.8,
    img: "/img/vac1.jpg",
  },
  {
    id: 2,
    location: "Plateau in Slovenia",
    price: 45,
    duration: "5 days, 2 Nights",
    rating: 4.9,
    img: "/img/vac4.jpg",
  },
  {
    id: 3,
    location: "Bali, Indonesia",
    price: 60,
    duration: "10 days, 9 Nights",
    rating: 4.7,
    img: "/img/vac5.jpg",
  },
  {
    id: 4,
    location: "South Korea",
    price: 70,
    duration: "7 days, 6 Nights",
    rating: 4.8,
    img: "/img/vac2.jpg",
  },
  {
    id: 5,
    location: "Swiss Alps, Zurich",
    price: 95,
    duration: "6 days, 5 Nights",
    rating: 5.0,
    img: "/img/vac3.jpg",
  },
  {
    id: 6,
    location: "Cairo, Egypt",
    price: 40,
    duration: "4 days, 3 Nights",
    rating: 4.6,
    img: "/img/vac4.jpg",
  },
  {
    id: 7,
    location: "Paris, France",
    price: 85,
    duration: "5 days, 4 Nights",
    rating: 4.9,
    img: "/img/vac5.jpg",
  },
  {
    id: 8,
    location: "Sydney, Australia",
    price: 110,
    duration: "12 days, 11 Nights",
    rating: 4.8,
    img: "/img/vac1.jpg",
  },
];

const PopularTours = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      // Get the exact width of a single card
      const itemWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const gap = 30; // 30px gap based on Tailwind's 'gap-[30px]' used below
      const scrollAmount = itemWidth + gap; // Scroll exactly 1 item at a time

      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Animation variants for the container and children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reveal cards one by one
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="xl:pt-30 pt-12.5 px-5 lg:px-0 bg-[#eefeff] 2xl:mx-15 sm:mx-6 xl:pb-25 pb-9 overflow-hidden">
      <div className="container mx-auto max-w-350">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sm:mb-15 mb-7.5 max-w-150 mx-auto text-center"
        >
          <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-2.5 text-[#1a3d3d]">
            Explore Popular <span className="text-[#a3e635]">Tours!</span>
          </h2>
          <p className="text-base text-gray-500">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <div className="-mt-7 flex justify-center">
            <Image
              src="/img/title-seperator.png"
              alt="Separator"
              width={470}
              height={70}
              className="w-117.5 h-auto"
            />
          </div>
        </motion.div>

        <div className="section-content relative">
          {/* Scroll Area with Motion Container */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // Changed gap to a fixed 30px (gap-[30px]) to make the math perfect
            className="flex gap-7.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-24"
          >
            {tourData.map((tour) => (
              <motion.div
                key={tour.id}
                variants={itemVariants}
                /* Exact fitting CSS logic based on 'gap-[30px]':
                  - Mobile: 100% width (1 item)
                  - Tablet (md): 50% width minus half a gap (15px) (2 items)
                  - Desktop (lg): 25% width minus 3/4ths of a gap (22.5px) (4 items)
                */
                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)] shrink-0 snap-start"
              >
                <div className="relative overflow-hidden group rounded-[40px] h-105 shadow-md bg-white">
                  {/* Default State Image & Label */}
                  <div className="relative h-full w-full">
                    <Image
                      src={tour.img}
                      alt={tour.location}
                      fill
                      loading="lazy" // This is the default, but good to be explicit
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 py-6 px-8 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-full">
                      <h3 className="text-[20px] xl:text-[24px] font-bold text-white flex items-center gap-2">
                        <HiOutlineLocationMarker className="text-[#a3e635] shrink-0" />
                        <span className="truncate">{tour.location}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-5 p-5 xl:p-7 flex flex-col justify-between bg-[#1a3d3d]/90 backdrop-blur-sm rounded-[30px] border border-white/10 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-[#1a3d3d] text-white px-3 xl:px-5 py-2 rounded-r-full -ml-6 xl:-ml-8 font-bold text-xs xl:text-sm flex items-center gap-2 shadow-lg whitespace-nowrap">
                        <MdOutlineCalendarMonth className="text-[#a3e635] text-lg" />
                        {tour.duration}
                      </div>
                      <div className="text-right">
                        <span className="text-white text-2xl xl:text-3xl font-black block">
                          ${tour.price}
                        </span>
                        <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                          Per Day
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">
                        {tour.location}
                      </h3>
                      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 xl:gap-0">
                        <Link
                          href="/tour-detail"
                          className="border border-white/30 text-white px-6 py-2 rounded-full font-bold text-center hover:bg-[#a3e635] hover:text-[#1a3d3d] hover:border-[#a3e635] transition-all text-sm"
                        >
                          Book Now
                        </Link>
                        <div className="text-left xl:text-right">
                          <span className="text-white text-xs opacity-70">
                            ({tour.rating} Review)
                          </span>
                          <div className="flex text-[#a3e635] gap-0.5 mt-1 xl:justify-end">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} size={12} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full bg-[#a3e635] text-[#1a3d3d] flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
            >
              <FaChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full bg-[#a3e635] text-[#1a3d3d] flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
            >
              <FaChevronRight size={20} />
            </motion.button>
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

export default PopularTours;
