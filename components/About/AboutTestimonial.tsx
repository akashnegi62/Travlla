"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Amelia Warner",
    role: "Tourist",
    img: "/pic1.jpg",
    text: "Once the travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.",
  },
  {
    id: 2,
    name: "Kavin Martin",
    role: "Traveler",
    img: "/pic2.jpg",
    text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.",
  },
  {
    id: 3,
    name: "Antonio",
    role: "Tourist",
    img: "/pic3.jpg",
    text: "Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.",
  },
];

const AboutTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1,
    );
  };

  const current = testimonialData[activeIndex];

  return (
    <section className="sm:py-24 py-12 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-150 mx-auto mb-4">
          <h2 className="text-4xl font-bold text-[#1a3d3d]">
            Our Client <span className="text-[#a3e635]">Says!</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <div className="flex justify-center mt-2">
            <Image
              src="/Title-Separator.png"
              alt="separator"
              width={470}
              height={70}
              className="w-87.5"
            />
          </div>
        </div>

        {/* --- MAIN STAGE (Large Text & Airplane) --- */}
        <div className="relative flex flex-col items-center">
          {/* Large Gradient Text Background */}
          <div className="relative text-center w-full">
            <h1
              className="text-[60px] md:text-[120px] lg:text-[180px] font-black uppercase tracking-widest select-none leading-none
              bg-linear-to-b from-[#066168] via-[#fbbf24]/50 to-white bg-clip-text text-transparent opacity-30"
            >
              Testimonial
            </h1>
            {/* Airplane Takeoff Graphic */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-125 z-10"
            >
              <Image
                src="/airplane.png"
                alt="airplane"
                width={493}
                height={116}
              />
            </motion.div>
          </div>

          {/* --- CONTENT AREA (Grid with Image and Text) --- */}
          <div className="relative w-full max-w-6xl mx-auto -mt-10 lg:-mt-20 flex flex-col lg:flex-row items-center gap-12 z-20 px-6">
            {/* 1. Left: Main Active User Image */}
            <div className="relative group shrink-0">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl w-[320px] h-112.5 md:w-93.75 md:h-122.25"
              >
                <Image
                  src={current.img}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Decorative Background Circles (Yellow & Teal) */}
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-87.5 h-87.5 rounded-full bg-[#a3e635] opacity-10 -z-1" />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-75 h-75 rounded-full bg-[#1a3d3d] -z-2 hidden md:block" />
            </div>

            {/* 2. Middle: Vertical Thumbnails (The "Steps" layout from image) */}
            <div className="flex flex-row lg:flex-col gap-5 justify-center">
              {testimonialData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-16 h-16 rounded-2xl overflow-hidden border-4 transition-all duration-300
                  ${activeIndex === idx ? "border-[#a3e635] scale-110 shadow-lg translate-x-2" : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  <Image
                    src={item.img}
                    alt="thumb"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* 3. Right: Review Text Content */}
            <div className="flex-1 text-left lg:pl-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-serif italic text-[#1a3d3d] mb-1">
                        {current.name}
                      </h2>
                      <span className="text-xl font-bold text-[#a3e635]">
                        {current.role}
                      </span>
                    </div>
                    <div className="opacity-20 shrink-0">
                      <Image
                        src="/Quote.png"
                        alt="quote"
                        width={70}
                        height={58}
                        className="invert-[.1] sepia-[.9] saturate-[4] hue-rotate-170"
                      />
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-[#1a3d3d] leading-relaxed mb-8 font-medium">
                    &quot;{current.text}&quot;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#fbbf24] text-xl">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    {/* Arrows for Desktop */}
                    <div className="flex gap-3">
                      <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#fbbf24] hover:bg-[#fbbf24] hover:text-white transition-all"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#fbbf24] hover:bg-[#fbbf24] hover:text-white transition-all"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Background Floating Balloon (Far Right) */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/3 -right-10 opacity-60 w-32 hidden xl:block"
      >
        <Image
          src="/hotballon-right.png"
          alt="balloon"
          width={110}
          height={166}
        />
      </motion.div>
    </section>
  );
};

export default AboutTestimonials;
