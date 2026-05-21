"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { LuSmartphone, LuSparkles } from "react-icons/lu";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageFloat: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, -15, 0], // Smooth floating loop
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
      // Quick entrance for the initial reveal
      opacity: { duration: 0.8 },
      scale: { duration: 0.8 },
    },
  },
};

export default function AppSec() {
  return (
    <section className="bg-[#eef9f8] py-20 lg:py-28 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* --- LEFT SIDE: TEXT CONTENT & APP CODES --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#8bc34a]/10 text-[#1a3d3d] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
              <LuSparkles className="w-3.5 h-3.5 text-[#8bc34a]" />
              Your Travel Companion
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a3d3d] tracking-tight leading-tight uppercase">
              Pocket Your Next <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1a3d3d] to-[#8bc34a]">
                Great Adventure
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Manage your custom itineraries, discover local hidden activity
              spots, book certified guided tours, and get real-time flight
              updates effortlessly. Our upcoming mobile application puts luxury
              holiday curation right at your fingertips.
            </p>

            {/* --- APP STORE BUTTONS --- */}
            <div className="pt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start items-center">
              {/* App Store Badge */}
              <div className="group relative w-52 bg-[#1a3d3d] text-white p-3 rounded-2xl flex items-center gap-3 border border-transparent shadow-md select-none">
                <FaApple className="text-3xl shrink-0 transition-colors group-hover:text-[#8bc34a]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wide">
                    Coming Soon on
                  </p>
                  <p className="text-base font-bold tracking-tight">
                    App Store
                  </p>
                </div>
                {/* Subtle outer glow effect */}
                <div className="absolute inset-0 border border-[#8bc34a]/0 rounded-2xl group-hover:border-[#8bc34a]/30 group-hover:scale-102 transition-all duration-300 pointer-events-none" />
              </div>

              {/* Google Play Badge */}
              <div className="group relative w-52 bg-[#1a3d3d] text-white p-3 rounded-2xl flex items-center gap-3 border border-transparent shadow-md select-none">
                <FaGooglePlay className="text-2xl shrink-0 transition-colors group-hover:text-[#8bc34a]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wide">
                    Coming Soon on
                  </p>
                  <p className="text-base font-bold tracking-tight">
                    Google Play
                  </p>
                </div>
                {/* Subtle outer glow effect */}
                <div className="absolute inset-0 border border-[#8bc34a]/0 rounded-2xl group-hover:border-[#8bc34a]/30 group-hover:scale-102 transition-all duration-300 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: PHONE MOCKUP --- */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Ambient Backlight Accent Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#8bc34a]/10 blur-3xl -z-10" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageFloat}
              className="relative w-[280px] h-[560px] md:w-[310px] md:h-[620px] drop-shadow-2xl bg-neutral-900 rounded-[48px] p-3 border-[6px] border-[#1a3d3d]"
            >
              {/* Dynamic Speaker Notch Display */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-800 absolute right-4" />
              </div>

              {/* Internal Mockup Content Image Screen */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-neutral-900">
                <Image
                  src="/img/app.webp" // Put an app preview mockup or destination screenshot image here
                  alt="App Preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 310px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
