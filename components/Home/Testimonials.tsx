"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Esther Howard",
    role: "World Traveller, USA",
    image: "/img/client1.webp", // The image of the girl in the hat
    text: "Booking flights has never been easier! I love how intuitive and user-friendly this website is. Saved so much time and hassle booking my last-minute flight. Highly recommend!",
  },
  {
    id: 2,
    name: "Amelia Warner",
    role: "Tourist, UK",
    image: "/img/client2.webp",
    text: "I was very impressed with the service. The team was helpful and the platform was very easy to navigate. I will definitely be using this again for my next trip.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="py-20 bg-[#eff9f9] relative overflow-hidden">
      {/* Background World Map Pattern (Optional) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/img/bg-testimonial.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* --- TOP HEADING SECTION --- */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-[#1a3d3d] leading-tight max-w-lg">
            Our Clients Say
          </h2>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Image Section */}
          <div className="lg:col-span-4">
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    priority
                    className="object-cover rounded-[40px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Testimonial Card Section */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Review Header: Stats and Stars */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div className="text-xl font-bold text-[#1a3d3d]">
                ({index + 1}/{testimonials.length * 524}){" "}
                <span className="text-gray-400 font-medium">Reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-[#8bc34a]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="font-bold text-[#1a3d3d]">4.7/5.0</span>
              </div>
            </div>

            {/* The Actual Card */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative"
            >
              <div className="text-[#7ec84f] text-5xl mb-6 opacity-80">
                <FaQuoteLeft />
              </div>

              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 font-medium italic">
                &quot;{current.text}&quot;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-[#1a3d3d] mb-1">
                    {current.name}
                  </h4>
                  <span className="text-[#7ec84f] font-bold text-sm uppercase tracking-widest">
                    {current.role}
                  </span>
                </div>

                {/* Navigation Buttons (Bottom Right of Card area) */}
                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    className="w-14 h-14 rounded-full border-2 border-gray-100 text-gray-400 flex items-center justify-center hover:bg-[#7ec84f] hover:text-white hover:border-[#7ec84f] transition-all"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="w-14 h-14 rounded-full bg-[#7ec84f] text-white flex items-center justify-center hover:shadow-lg hover:bg-[#1a3d3d] transition-all"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
