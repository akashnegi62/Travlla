"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import AboutHero from "@/components/About/AboutHero";
import { LuClock3, LuX } from "react-icons/lu";

// --- EXPANDED LUXURY ITINERARIES DATA ---
const itineraryData = [
  {
    id: "1",
    country: "United Arab Emirates",
    title: "Dubai — Desert Dreams & City Glamour",
    description:
      "Explore Jumeirah Mosque, Gold Souk, Dubai Mall, Spice Souk, and the historic Bastakiya Square. Drive past Atlantis, The Palm, and end with an unforgettable desert safari experience.",
    duration: "5 Nights / 6 Days",
    badge: "✈️ 5 Nights",
    image: "/img/iterary1.jpg",
    slug: "Dubai",
    youtubeId: "v_Uv6Z8O8_As",
  },
  {
    id: "2",
    country: "India",
    title: "Goa — Sun, Sand & Soul",
    description:
      "Goa offers much more than its famous party scene. Rich legacy, history, culture, and sun-soaked beaches make it a perfect destination for every kind of traveller seeking joy.",
    duration: "4 Nights / 5 Days",
    badge: "🏝️ 4 Nights",
    image: "/img/iterary2.jpg",
    slug: "Goa",
    youtubeId: "5_6N3E7x6Z8",
  },
  {
    id: "3",
    country: "Indonesia",
    title: "Bali — Enchanting Island of Gods",
    description:
      "Bali's enchanting beauty, rich culture, and serene beaches create an unforgettable experience. Whether you seek adventure or relaxation, Bali has it all for you.",
    duration: "6 Nights / 7 Days",
    badge: "🌺 6 Nights",
    image: "/img/iterary3.jpg",
    slug: "Bali",
    youtubeId: "2b9txCAt_I0",
  },
  {
    id: "4",
    country: "Thailand",
    title: "Thailand — Tropical Temples & Turquoise Islands",
    description:
      "Immerse yourself in Bangkok's ornate grand palaces, taste traditional street food treasures, and escape to Phuket's white-sand horizons and Phang Nga Bay limestone wonders.",
    duration: "6 Nights / 7 Days",
    badge: "🇹🇭 6 Nights",
    image: "/img/iterary4.webp",
    slug: "Thailand",
    youtubeId: "wG8Uen8Xf0o",
  },
  {
    id: "5",
    country: "India (Kashmir)",
    title: "Kashmir — Heaven on Earth & Alpine Wonders",
    description:
      "Relax on a luxury Shikara cruise over Dal Lake, wander through historic Mughal terrace gardens, and breathe in the snow-dusted peak vistas of Gulmarg and Pahalgam valleys.",
    duration: "5 Nights / 6 Days",
    badge: "🏔️ 5 Nights",
    image: "/img/iterary5.webp",
    slug: "Kashmir",
    youtubeId: "v_T3_U_bM9I",
  },
  {
    id: "6",
    country: "India (Himachal)",
    title: "Shimla — The Regal Queen of Hills",
    description:
      "Stroll the historic pedestrian Mall Road, visit colonial Jakhoo Temple structures, and journey down to Kufri's panoramic pine woodlands for a perfect Himalayan getaway.",
    duration: "3 Nights / 4 Days",
    badge: "🌲 3 Nights",
    image: "/img/iterary6.webp",
    slug: "Shimla",
    youtubeId: "yE_eonA1wX0",
  },
  {
    id: "7",
    country: "India (Uttarakhand)",
    title: "Nainital — Emerald Lakes & Misty Ridges",
    description:
      "Set sail on the historic, pear-shaped Naini Lake, experience breathtaking views from Snow View Point tramways, and uncover peaceful nature trails across surrounding cloud-kissed peaks.",
    duration: "3 Nights / 4 Days",
    badge: "⛵ 3 Nights",
    image: "/img/iterary7.webp",
    slug: "Nainital",
    youtubeId: "mNAsW0f9v0g",
  },
];

// Animation Configs
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function ItineraryPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <main className="bg-[#effefe] min-h-screen">
      {/* --- HERO TITLE REUSE COMPONENT --- */}
      <AboutHero title="Exclusive Itineraries" />

      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* --- TOP ROW INTRO SECTION --- */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-[#8bc34a] font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#8bc34a]"></span> Curated
              Signature Journeys{" "}
              <span className="w-5 h-[1.5px] bg-[#8bc34a]"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3d3d] tracking-tight uppercase">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1a3d3d] to-[#8bc34a]">
                Vast Horizons
              </span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto">
              From pristine island shores to snowy mountain sanctuaries,
              handpick a dynamic itinerary crafted to turn travel into a
              masterpiece.
            </p>
          </div>

          {/* --- DYNAMIC CARD MESH GRID --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {itineraryData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group bg-[#fcfdfe] border border-gray-100 rounded-[32px] overflow-hidden shadow-xs hover:shadow-xl hover:border-gray-200/60 transition-all duration-400 flex flex-col h-full"
              >
                {/* Image & Video Accent Core Frame */}
                <div className="relative h-72 w-full overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30" />

                  {/* Top Float Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1a3d3d] text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wide shadow-sm">
                    {item.badge}
                  </div>

                  {/* Play Core Overlay Widget */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button
                      onClick={() => setActiveVideoId(item.youtubeId)}
                      aria-label={`Play preview video for ${item.title}`}
                      className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#8bc34a]/90 group-hover:border-[#8bc34a] transition-all duration-300 shadow-lg cursor-pointer z-10"
                    >
                      <FaPlay className="text-white text-xs ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[#8bc34a] font-bold text-xs uppercase tracking-wider">
                      <HiOutlineLocationMarker className="text-sm shrink-0" />
                      <span>{item.country}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1a3d3d] tracking-tight group-hover:text-[#8bc34a] transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Meta Partition Row */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold">
                      <LuClock3 className="w-3.5 h-3.5 text-[#8bc34a]" />
                      <span>{item.duration}</span>
                    </div>

                    <Link href={`/tour-detail/${item.slug}/`}>
                      <span className="inline-block border border-gray-200 text-[#1a3d3d] font-bold text-xs px-4 py-2 rounded-full group-hover:bg-[#8bc34a] group-hover:text-white group-hover:border-[#8bc34a] transition-all duration-300 cursor-pointer">
                        Explore Details →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- VIDEO POPUP OVERLAY SCREEN MODAL --- */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-9999 flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 text-white p-2 rounded-full border border-white/20 hover:bg-[#8bc34a] hover:border-[#8bc34a] transition-colors duration-200"
              >
                <LuX className="w-5 h-5" />
              </button>

              {/* Responsive 16:9 Cinema Container */}
              <div className="relative pt-[56.25%] w-full bg-neutral-900">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
