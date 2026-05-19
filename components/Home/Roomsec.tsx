"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { LuBedDouble, LuUsers } from "react-icons/lu";

// --- DATA STRUCTURES (Sourced from your membership definitions) ---
const roomTypesData = [
  {
    id: "1",
    tag: "Studio Classic",
    title: "Type 1 — Studio Standard Room",
    description:
      "Enjoy our beautifully finished hotel studio standard apartment accommodation. This room type is ideal for solo travelers, business visits, or couples looking for an upscale retreat. Designed as your true home away from home, it features direct elevator access from the main lobby, secure underground transit access, an integrated 3/4 bedroom layout concept, and a private dedicated balcony viewing platform.",
    maxOccupancy: "Max 2 Adults",
    bedType: "1 King Bed (or 2 Singles)",
    amenities: [
      "Fully Air-conditioned",
      "Private Balcony & Terrace",
      "Dedicated Office Study Desk",
      "Free High-Speed Wi-Fi",
    ],
    image: "/img/room1.webp", // Replace with your public asset paths
  },
  {
    id: "2",
    tag: "Luxury Suite",
    title: "Type 2 — Master Double Suite",
    description:
      "For a higher tier of premium accommodation, choose our exceptionally spacious Master Double Studio Suite Room. The sprawling layout includes a separate, beautifully furnished living lounge equipped with a custom selection of dual and triple-seater sofas, an independent dining lounge space, premium micro-kitchen/microwave facilities, and a expansive grand bathroom suite constructed for families.",
    maxOccupancy: "Max 4 Adults",
    bedType: "2 Master King Beds (or 4 Singles)",
    amenities: [
      "Spacious Lounge & Flat-Screen TV",
      "Fully Equipped Office Kitchen",
      "Large Family Dining Layout",
      "Split Unit Air Conditioning",
    ],
    image: "/img/room2.webp",
  },
];

// Animation presets
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function RoomSec() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#8bc34a] font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#8bc34a]"></span> World-Class
            Accommodations <span className="w-5 h-[1.5px] bg-[#8bc34a]"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3d3d] tracking-tight uppercase">
            Our Elite{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1a3d3d] to-[#8bc34a]">
              Sanctuaries
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            Immerse yourself in expertly architectural suites designed to meet
            high standards of comfort, utility, and refined travel taste.
          </p>
        </div>

        {/* --- ROOM CARDS LOOP STACK --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {roomTypesData.map((room, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={room.id}
                variants={fadeInUp}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 xl:gap-14 bg-[#fcfdfe] border border-gray-100 p-6 md:p-8 rounded-[40px] shadow-xs hover:shadow-xl hover:border-gray-200/50 transition-all duration-400 items-center`}
              >
                {/* 1. Left Graphic Block Frame */}
                <div className="w-full lg:w-5/12 shrink-0 relative h-[300px] sm:h-[380px] rounded-[32px] overflow-hidden shadow-md group">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Micro Tag Badge */}
                  <div className="absolute top-4 left-4 bg-[#1a3d3d] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {room.tag}
                  </div>
                </div>

                {/* 2. Right Text Metadata Display Panel */}
                <div className="w-full lg:w-7/12 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-[#1a3d3d] tracking-tight uppercase">
                      {room.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#8bc34a] rounded-full" />
                  </div>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                    {room.description}
                  </p>

                  {/* Core High-level Highlight Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-gray-50/70 border border-gray-100 p-4 rounded-2xl">
                    <div className="flex items-center gap-2.5 text-sm font-bold text-[#1a3d3d]">
                      <div className="p-2 bg-white rounded-xl text-[#8bc34a] shadow-xs border border-gray-100">
                        <LuUsers className="w-4 h-4" />
                      </div>
                      <span>{room.maxOccupancy}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-sm font-bold text-[#1a3d3d]">
                      <div className="p-2 bg-white rounded-xl text-[#8bc34a] shadow-xs border border-gray-100">
                        <LuBedDouble className="w-4 h-4" />
                      </div>
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  {/* Amenities List Chips */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase">
                      Premium Suite Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, amIdx) => (
                        <span
                          key={amIdx}
                          className="bg-white border border-gray-200 text-[#1a3d3d] text-xs font-semibold px-3 py-1.5 rounded-xl hover:border-[#8bc34a] hover:bg-[#8bc34a]/5 transition-colors duration-200"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
