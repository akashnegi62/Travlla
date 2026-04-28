"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaCalendarAlt,
  FaUserFriends,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

const videoUrl =
  "https://www.youtube.com/embed/yeukgKerfqM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=yeukgKerfqM&playsinline=1";

const Hero = () => {
  return (
    <>
      {/* --- 1. FULL SCREEN YOUTUBE VIDEO HERO SECTION --- */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        {/* YouTube Video Background Wrapper */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            src={videoUrl}
            className="absolute top-1/2 left-1/2 h-screen w-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen"
            title="Background Video"
          />
        </div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Content Container */}
        <div className="container mx-auto px-6 lg:px-20 relative z-20 mt-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#a3e635] font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4 block"
            >
              Your Premium Travel Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter mb-8"
            >
              Best Escape <br /> Choice
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-200 text-lg md:text-xl max-w-2xl font-medium leading-relaxed opacity-90 mb-10"
            >
              Experience the Best in Travel: A Journey Beyond Your Imagination,
              Where Every Destination Becomes an Unforgettable Adventure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- 2. PLAN YOUR STAY SECTION --- */}
      <section className="relative z-30 p-20 bg-[#effefe]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden">
            {/* Toggles */}
            <div className="flex border-b border-gray-100">
              <h1 className="flex items-center gap-3 px-8 py-5 font-bold transition-all bg-white text-[#1a3d3d]">
                <FaHotel /> Plan Your Stay
              </h1>
            </div>

            {/* Form Fields */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#a3e635]" /> Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 transition-all placeholder:text-gray-300 bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#a3e635]" /> Check-in — Out
                  </label>
                  <input
                    type="text"
                    placeholder="Select Dates"
                    className="w-full text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 transition-all placeholder:text-gray-300 bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                    <FaUserFriends className="text-[#a3e635]" /> Guests & Rooms
                  </label>
                  <select className="w-full text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 bg-transparent cursor-pointer">
                    <option>2 Adults, 1 Room</option>
                    <option>1 Adult, 1 Room</option>
                    <option>2 Adults, 2 Rooms</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-black text-gray-400">
                    Membership ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ID (Optional)"
                    className="w-full text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 transition-all placeholder:text-gray-300 bg-transparent"
                  />
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <button className="group relative bg-[#a2e734] hover:bg-[#1a3d3d] text-white px-16 py-5 rounded-full font-black uppercase tracking-widest transition-all duration-500 shadow-xl flex items-center gap-3">
                  Check Rates
                  <FaSearch className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
