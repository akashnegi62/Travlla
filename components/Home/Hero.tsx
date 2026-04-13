"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaCalendarAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen lg:h-225 bg-[#0f4c4c]">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg-curve.jpg')" }}
      />

      {/* Main Content Wrap */}
      <div className="relative z-10 lg:m-8 lg:rounded-[40px] bg-black/20 min-h-[80] lg:h-[calc(100%-64px)] flex items-center pt-24 pb-12 lg:pt-35 lg:pl-20">
        <div className="container mx-auto px-6 lg:flex items-center justify-between relative w-full">
          {/* Left Text Content */}
          <div className="w-full lg:max-w-150 z-20 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-5xl text-white font-[kau] italic block mb-2"
            >
              Discover
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-[120px] font-[kau] text-white mb-6 leading-tight"
            >
              The World
            </motion.h1>

            <p className="text-lg lg:text-xl text-white italic mb-10 opacity-90">
              The Safety of our customers at all stages
            </p>

            <div className="mb-16">
              <Link
                href="/contact"
                className="bg-[#84cc16] text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 inline-block"
              >
                Get In Touch
              </Link>
            </div>

            {/* Search Bar / Booking Card */}
            <div className="w-full max-w-112.5 lg:max-w-175 mx-auto lg:mx-0 bg-white rounded-4xl p-6 lg:p-3 shadow-2xl flex flex-col lg:flex-row items-center gap-2">
              <div className="w-full flex-1 px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-100 text-left">
                <label className="text-sm font-bold text-[#0f4c4c] block mb-1">
                  Location
                </label>
                <select className="bg-transparent text-gray-500 font-medium outline-none w-full appearance-none cursor-pointer">
                  <option>New Zealand</option>
                  <option>Paris</option>
                  <option>Bali</option>
                </select>
              </div>

              <div className="w-full flex-1 px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-100 text-left">
                <label className="text-sm font-bold text-[#0f4c4c] block mb-1">
                  Date
                </label>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Date</span>
                  <FaCalendarAlt className="text-gray-300" />
                </div>
              </div>

              <div className="w-full flex-1 px-4 py-2 text-left">
                <label className="text-sm font-bold text-[#0f4c4c] block mb-1">
                  Traveler
                </label>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-700">1</span>
                  <div className="flex gap-4 text-gray-400">
                    <button className="hover:text-black">
                      <FaMinus size={12} />
                    </button>
                    <button className="hover:text-black">
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>
              </div>

              <button className="bg-[#84cc16] w-full lg:w-20 h-16 lg:h-16 rounded-2xl lg:rounded-full flex items-center justify-center text-white hover:bg-[#0f4c4c] transition-all group">
                <FaSearch className="text-2xl group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <span className="text-white text-xs uppercase tracking-[0.3em] font-bold flex items-center">
                FOLLOW US
                <span className="hidden sm:inline-block w-12 h-px bg-white/50 ml-4"></span>
              </span>
              <div className="flex gap-5">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaLinkedinIn} />
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaXTwitter} />
              </div>
            </div>
          </div>

          {/* Right Images Content */}
          <div className="relative mt-12 lg:mt-0 flex-1 flex justify-center items-center">
            {/* Plane Graphic - Hidden on small mobile to reduce clutter */}
            <motion.div
              animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-0 right-1/2 z-0 opacity-20 lg:opacity-100 hidden sm:block"
            >
              <Image
                src="/img/plane-line.png"
                alt="Plane"
                width={500}
                height={50}
              />
            </motion.div>

            {/* Main Traveler Image */}
            <div className="relative z-10 w-full max-w-125 lg:max-w-none">
              <Image
                src="/img/hero.png"
                alt="Traveler"
                width={700}
                height={600}
                className="w-full h-[80vh] object-contain"
                priority
              />

              {/* Floating Discount Badge - Centered under image on mobile */}
              <motion.div
                animate={{ rotate: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 lg:top-50 text-white text-center lg:text-right"
              >
                <span className="block text-xl lg:text-2xl italic font-light">
                  Get Up To
                </span>
                <span className="block text-7xl lg:text-7xl font-black italic leading-none my-1">
                  45%
                </span>
                <span className="block text-xl lg:text-2xl font-bold uppercase tracking-widest">
                  Discount
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Clouds */}
      <Cloud delay={0} top="10%" />
      <Cloud delay={0} top="30%" />
    </section>
  );
};

const SocialIcon = ({ Icon }: { Icon: IconType }) => (
  <a
    href="#"
    className="text-white hover:text-[#84cc16] transition-all duration-300 text-xl"
  >
    <Icon />
  </a>
);

const Cloud = ({ delay, top }: { delay: number; top: string }) => (
  <div
    className="absolute w-full pointer-events-none z-50"
    style={{ top }}
  >
    <motion.div
      initial={{ x: "-20%" }}
      animate={{ x: "1000%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear", delay }}
      className="inline-block"
    >
      <Image
        src="/img/cloud.png"
        alt="Cloud"
        width={200}
        height={100}
        className="w-auto h-auto"
      />
    </motion.div>
  </div>
);

export default Hero;
