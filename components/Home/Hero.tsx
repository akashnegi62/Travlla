"use client";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import BookingTour from "@/components/Home/BookingTour";

const Hero = () => {
  return (
    <>
      {/* --- 1. FULL SCREEN YOUTUBE VIDEO HERO SECTION --- */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        {/* Video Background Wrapper */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-h-screen min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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

            <a href="#booknow">
              <motion.button className="group relative bg-[#a2e734] hover:bg-[#1a3d3d] text-white px-16 py-5 rounded-full font-black uppercase tracking-widest transition-all duration-500 shadow-xl flex items-center gap-3">
                Book Now
                <FaSearch className="group-hover:rotate-90 transition-transform duration-500" />
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. PLAN YOUR STAY SECTION --- */}
      <BookingTour />
    </>
  );
};

export default Hero;
