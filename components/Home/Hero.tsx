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
    <section className="relative overflow-hidden 2xl:h-237.5 lg:h-192 h-auto bg-[#1a3d3d]">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/tour-bg.jpg')" }}
      />

      {/* Main Content Wrap */}
      <div className="relative z-10 lg:m-8.75 lg:rounded-3xl bg-black/40 2xl:h-220 lg:h-175 flex items-center">
        <div className="container mx-auto lg:flex items-center justify-between relative w-full pt-20 lg:pt-0">
          {/* Left Text Content */}
          <div className="max-w-250 z-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="xl:text-5xl text-2xl text-white font-[kau] italic block mb-2"
            >
              Discover
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="4xl:text-[150px] 2xl:text-[120px] lg:text-[100px] md:text-[90px] text-5xl font-[kau] text-white mb-5"
            >
              The World
            </motion.h1>

            <p className="xl:text-2xl text-lg text-white italic mb-10 opacity-90">
              The Safety of our customers at all stages
            </p>

            <div className="mb-12">
              <Link
                href="/contact"
                className="bg-[#a3e635] text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Search Bar */}
            <div className="lg:w-162.5 w-full bg-white rounded-2xl lg:rounded-full p-4 lg:p-2 shadow-2xl flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-1 px-5 border-r border-gray-100 w-full">
                <label className="text-xs font-bold text-gray-400 uppercase block">
                  Location
                </label>
                <select className="bg-transparent text-gray-800 font-bold outline-none w-full">
                  <option>New Zealand</option>
                  <option>Paris</option>
                  <option>Bali</option>
                </select>
              </div>
              <div className="flex-1 px-5 border-r border-gray-100 w-full">
                <label className="text-xs font-bold text-gray-400 uppercase block">
                  Date
                </label>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Date</span>
                  <FaCalendarAlt className="text-gray-300" />
                </div>
              </div>
              <div className="flex-1 px-5 w-full">
                <label className="text-xs font-bold text-gray-400 uppercase block">
                  Traveler
                </label>
                <div className="flex items-center justify-between">
                  <span className="font-bold">1</span>
                  <div className="flex gap-2 text-gray-300">
                    <FaMinus size={10} /> <FaPlus size={10} />
                  </div>
                </div>
              </div>
              <button className="bg-[#fbbf24] p-5 rounded-xl lg:rounded-full text-white hover:bg-[#a3e635] transition-colors w-full lg:w-auto">
                <FaSearch />
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-6">
              <span className="text-white text-xs uppercase tracking-[0.2em] font-bold relative after:content-[''] after:inline-block after:w-16 after:h-px after:bg-white after:ml-4 after:align-middle">
                Follow Us
              </span>
              <div className="flex gap-4">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaLinkedinIn} />
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaXTwitter} />
              </div>
            </div>
          </div>

          {/* Right Images Content */}
          <div className="hidden lg:block relative flex-1 min-h-150">
            {/* Plane Graphic */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-20 right-[40%] z-10 w-full"
            >
              <Image
                src="/Plane-With-Line.png"
                alt="Plane"
                width={770}
                height={291}
                priority
              />
            </motion.div>

            {/* Main Traveler Image */}
            <div className="relative z-12 ml-30 w-full">
              <Image
                src="/right-pic.png"
                alt="Travel"
                width={819}
                height={702}
                priority
              />
            </div>

            {/* Floating Discount Badge */}
            <motion.div
              animate={{ rotate: [-15, -12, -15], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 top-1/2 -translate-y-1/2 text-white z-20 text-right"
            >
              <span className="block text-2xl italic font-light">
                Get Up To
              </span>
              <span className="block text-[80px] font-black italic leading-[0.8] my-2">
                45%
              </span>
              <span className="block text-2xl font-bold uppercase tracking-wider">
                Discount
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cloud Animations */}
      <div className="absolute z-99 top-10 w-full overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{ x: [-200, 1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Image src="/Cloud1.png" alt="Cloud" width={168} height={131} />
        </motion.div>
      </div>
      <div className="absolute z-99 top-40 w-full overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{ x: [-200, 1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Image src="/Cloud1.png" alt="Cloud" width={168} height={131} />
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon }: { Icon: IconType }) => (
  <a
    href="#"
    className="text-white hover:text-[#fbbf24] transition-all transform hover:-translate-y-1 duration-300 text-xl"
  >
    <Icon />
  </a>
);

export default Hero;
