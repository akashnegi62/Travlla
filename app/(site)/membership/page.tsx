"use client";
import React from "react";
import AboutHero from "@/components/About/AboutHero";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- DATA STRUCTURES ---
const roomTypes = [
  {
    title: "TYPE 1 - STUDIO STANDARD ROOM.",
    description:
      "Enjoy our beautifully finished hotel studio standard apartment accommodation. This room type is ideal for solo travelers, business visits or couples. For short term or for longer stays, the Studio is your home away from home, with direct elevator access from the lobby and underground secure carts, 3/4 bedroom area and a dedicated balcony.",
    features: [
      "Total Occupancy - Max 2 adults for 2 adults",
      "1 King Double Bed (or 2 singles)",
      "Fully Air-conditioned (split AC)",
      "Balcony & Terrace area",
      "Split AC",
      "Free Wi-Fi",
      "Office & Study Desk",
    ],
    image: "/img/room1.webp",
  },
  {
    title: "TYPE 2 - 2 MASTER DOUBLE STUDIO ROOM | SUITE ROOM:",
    description:
      "For a higher level of accommodation, choose our spacious 2 Bedroom Suite. The layout includes a living room with a selection of two and three-seater sofas, separate dining area, full bathroom facility and all families.",
    features: [
      "Total Occupancy - Max 4 adults",
      "2 Master King Double Beds (can split into 4 singles)",
      "Separate Living Area (lounge)",
      "Kitchen & Microwave facilities",
      "Large Dining Table",
      "Spacious Lounge with large Flat-Screen TV",
      "Separate Bathroom",
      "Air conditioning",
      "Free Wi-Fi",
      "Office kitchen:",
    ],
    image: "/img/room2.webp",
  },
];

// Re-mapped pricing lists into the structured privileged key card layout values from your screenshot
const privilegedKeys = [
  {
    title: "EBONY",
    tagline: "Your year-round access to unforgettable family gateways",
    bgClass: "bg-[#050708] text-white",
    waveColor: "rgba(255,255,255,0.08)",
    textColor: "text-gray-400",
    benefits: [
      "7N/8D holidays every year across 52 weeks",
      "Complimentary breakfast for 2 per room per night, up to 10 years",
      "Priority access to signature experiences",
      "Access to international resorts",
    ],
  },
  {
    title: "IVORY",
    tagline: "Experience destinations during the peak of their popularity",
    bgClass: "bg-[#eae6dc] text-[#1a3d3d]",
    waveColor: "rgba(26,61,61,0.06)",
    textColor: "text-gray-600",
    benefits: [
      "7N/8D holidays every year across 46 weeks",
      "Complimentary breakfast for 2 per room per night, up to 10 years",
      "Priority access to signature experiences",
      "Access to international resorts",
    ],
  },
  {
    title: "JADE",
    tagline: "Enjoy your favourite destinations during quieter seasons",
    bgClass: "bg-[#165251] text-white",
    waveColor: "rgba(255,255,255,0.08)",
    textColor: "text-emerald-100/70",
    benefits: [
      "7N/8D holidays every year across 24 weeks",
      "Complimentary breakfast for 2 per room per night, up to 10 years",
      "Priority access to signature experiences",
      "Access to international resorts",
    ],
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function MembershipPage() {
  return (
    <main className="bg-[#fafafa] text-[#1a3d3d]">
      <AboutHero title="Explore Membership" />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* --- ROOM TYPES SECTION --- */}
          <div className="space-y-16 max-w-6xl mx-auto">
            {roomTypes.map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-10 items-start"
              >
                <div className="lg:w-7/12">
                  <h2 className="text-2xl font-black text-[#1a3d3d] mb-4 uppercase">
                    {room.title}
                  </h2>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-6 font-medium">
                    {room.description}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] text-gray-800 font-medium">
                    {room.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-5/12 w-full">
                  <div className="relative h-75 w-full rounded-[20px] overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src={room.image}
                      alt="Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="my-20 border-gray-200" />

          {/* --- NEW REDESIGNED PRIVILEGED KEYS CONTAINER --- */}
          <section className="space-y-12 pb-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1a3d3d]">
                Your Key to Unlock Privileged Experiences
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-semibold">
                Select from EBONY, IVORY, and JADE Keys and enter a world of
                seamless vacations
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {privilegedKeys.map((keyCard, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-[32px] p-8 md:p-10 min-h-[520px] overflow-hidden flex flex-col justify-between shadow-xl border border-black/5 ${keyCard.bgClass}`}
                >
                  {/* Absolute SVG Fine Line Abstract Pattern Overlay to match your reference image */}
                  <div className="absolute inset-0 pointer-events-none opacity-80 z-0">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 100,-50 C 200,100 300,200 500,250 M 130,-50 C 230,120 330,220 530,270 M 160,-50 C 260,140 360,240 560,290 M 190,-50 C 290,160 390,260 590,310 M 220,-50 C 320,180 420,280 620,330"
                        fill="none"
                        stroke={keyCard.waveColor}
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  {/* Top Typography Header Info */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <h3 className="text-3xl font-black tracking-wider uppercase font-mono">
                        {keyCard.title}
                      </h3>
                      <p className="text-[11px] font-bold tracking-widest uppercase opacity-75 mt-0.5">
                        Key
                      </p>
                    </div>

                    <p
                      className={`text-sm leading-relaxed font-semibold ${keyCard.textColor}`}
                    >
                      {keyCard.tagline}
                    </p>
                  </div>

                  {/* Core Benefits List Block */}
                  <div className="relative z-10 space-y-6 pt-8 flex-1 flex flex-col justify-end">
                    <div>
                      <h4 className="text-base font-extrabold tracking-wide uppercase mb-3">
                        Benefits
                      </h4>
                      <ul className="space-y-3.5 text-xs font-medium opacity-90">
                        {keyCard.benefits.map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 leading-relaxed"
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8bc34a] mt-1.5 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>
    </main>
  );
}
