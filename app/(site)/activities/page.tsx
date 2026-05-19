"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { LucideArrowUpRight } from "lucide-react";
import AboutHero from "@/components/About/AboutHero";

// --- DATA STRUCTURES ---
const firstThreeActivities = [
  {
    title: "Jet Skiing",
    description:
      "Jet skiing combines speed and fun, letting you ride across lakes, rivers, or oceans. Perfect for beginners and pros alike, it's a thrilling way to explore.",
    video: "/video/Jet Skiing.mp4",
  },
  {
    title: "Bungy Jumping",
    description:
      "Take the leap of faith with bungy jumping! Feel the ultimate adrenaline rush as you dive from incredible heights and experience the pure thrill of freefall.",
    video: "/video/Bungy Jumping.mp4",
  },
  {
    title: "Surfing",
    description:
      "Ride the waves and feel the rush of surfing! Whether you're a pro or a beginner, surfing offers unmatched excitement and connection with the ocean.",
    video: "/video/Surfing.mp4",
  },
];

const lastThreeActivities = [
  {
    title: "Desert Safari",
    description:
      "A desert safari is a thrilling adventure that offers a unique blend of excitement, cultural experiences, and breathtaking golden dune landscapes.",
    video: "/video/Desert Safari.mp4",
  },
  {
    title: "Paragliding",
    description:
      "Soar through the skies and enjoy breathtaking views with paragliding. Perfect for adventure seekers wanting to embrace total freedom of flight.",
    video: "/video/Paragliding.mp4",
  },
  {
    title: "River Rafting",
    description:
      "Dive into the excitement of river rafting! Navigate wild rapids, bond with your team, and enjoy stunning natural canyon landscapes along the way.",
    video: "/video/rafting.mp4",
  },
];

const scubaSpotlight = {
  title: "Scuba Diving",
  description:
    "Discover the underwater world with scuba diving! Plunge into crystal-clear waters and explore vibrant coral reefs, exotic marine life, and hidden shipwrecks. Whether you're an experienced diver or a curious beginner, scuba diving offers an unparalleled adventure.",
  extendedDescription:
    "From the Great Barrier Reef in Australia to the cenotes of Mexico, the best diving spots around the globe await your exploration. Experience the serenity and thrill of being submerged in a different world.",
  video: "/video/Scuba Diving.mp4",
};

const skydivingSpotlight = {
  title: "Skydiving",
  description:
    "Experience the ultimate rush of human flight! Leap from thousands of feet in the air and freefall at thrilling speeds before floating peacefully under a canopy with birds-eye views of the world below.",
  extendedDescription:
    "Whether it's your first tandem jump or your hundredth solo dive, the sheer adrenaline and unmatched perspective of skydiving will stay with you forever. Define your limits, then push past them.",
  video: "/video/Skydiving.mp4",
};

// Pinterest Images (Mixed heights for masonry effect)
const pinterestImages = [
  {
    id: 1,
    src: "/img/1.jpg",
    alt: "Hot Air Balloons",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    src: "/img/2.jpg",
    alt: "Surfing",
    aspect: "aspect-square",
  },
  {
    id: 3,
    src: "/img/3.jpg",
    alt: "Horse Archery",
    aspect: "aspect-[3/4]",
  },
  { id: 4, src: "/img/4.jpg", alt: "Golfing", aspect: "aspect-[4/3]" },
  {
    id: 5,
    src: "/img/5.jpg",
    alt: "Waterfall Zipline",
    aspect: "aspect-[2/3]",
  },
  { id: 6, src: "/img/6.jpg", alt: "Quad Biking", aspect: "aspect-square" },
  { id: 7, src: "/img/7.jpg", alt: "Hot Air Balloons", aspect: "aspect-[4/5]" },
  { id: 8, src: "/img/8.jpg", alt: "Surfing", aspect: "aspect-square" },
  { id: 9, src: "/img/9.jpg", alt: "Horse Archery", aspect: "aspect-[3/4]" },
  { id: 10, src: "/img/10.jpg", alt: "Hot Air Balloons", aspect: "aspect-[4/5]" },
  { id: 11, src: "/img/11.jpg", alt: "Surfing", aspect: "aspect-square" },
  { id: 12, src: "/img/12.jpg", alt: "Horse Archery", aspect: "aspect-[3/4]" },
  { id: 13, src: "/img/13.jpg", alt: "Hot Air Balloons", aspect: "aspect-[4/5]" },
  { id: 14, src: "/img/14.jpg", alt: "Surfing", aspect: "aspect-square" },
  { id: 15, src: "/img/15.jpg", alt: "Horse Archery", aspect: "aspect-[3/4]" },
  { id: 16, src: "/img/16.jpg", alt: "Hot Air Balloons", aspect: "aspect-[4/5]" },
  { id: 17, src: "/img/17.jpg", alt: "Surfing", aspect: "aspect-square" },
  { id: 18, src: "/img/18.jpg", alt: "Horse Archery", aspect: "aspect-[3/4]" },
  { id: 19, src: "/img/19.jpg", alt: "Hot Air Balloons", aspect: "aspect-[4/5]" },
  { id: 20, src: "/img/20.jpg", alt: "Surfing", aspect: "aspect-square" },
  { id: 21, src: "/img/21.jpg", alt: "Horse Archery", aspect: "aspect-[3/4]" },
  { id: 22, src: "/img/22.jpg", alt: "Hot Air Balloons", aspect: "aspect-[4/5]" },
];

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ActivitiesPage() {
  return (
    <div className="bg-[#effefe] text-[#1b3c3d] min-h-screen font-sans overflow-x-hidden">
      {/* 1. Hero Page Header */}
      <AboutHero title="Activities" />

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* 2. Page Top Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/20 pb-8">
          <div>
            <p className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-2">
              Experience luxury, adventure, and culture like never before.
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Curated Adventures
            </h2>
          </div>
          <Link href="/itineraries">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 border border-white/20 hover:border-[#a3e635] px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              Explore Itineraries
              <LucideArrowUpRight className="w-4 h-4 group-hover:text-[#a3e635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* 3. FIRST GRID LIST (3 Cards) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {lastThreeActivities.map((activity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group flex flex-col justify-between bg-white border border-black/10 rounded-2xl overflow-hidden hover:border-black/20 hover:bg-black/4 transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <video
                  src={activity.video}
                  autoPlay
                  loop
                  muted
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-black group-hover:text-[#a3e635] transition-colors">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2 line-clamp-3 font-medium">
                    {activity.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#a3e635] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Read Details <LucideArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* 4. PREMIUM SPOTLIGHT 1: Scuba Diving */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/2 border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-md"
        >
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex bg-[#a3e635]/10 text-[#a3e635] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              Spotlight Experience
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {scubaSpotlight.title}
            </h3>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              <p>{scubaSpotlight.description}</p>
              <p>{scubaSpotlight.extendedDescription}</p>
            </div>
            <div className="pt-2">
              <button className="bg-[#a3e635] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#baf251] transition-colors text-sm shadow-lg shadow-[#a3e635]/10">
                Book Adventure Now
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden group shadow-2xl">
            <video
              src={scubaSpotlight.video}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.section>

        {/* 5. SECOND GRID LIST (Next 3 Cards) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {firstThreeActivities.map((activity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group flex flex-col justify-between bg-white border border-black/10 rounded-2xl overflow-hidden hover:border-black/20 hover:bg-black/4 transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <video
                  src={activity.video}
                  autoPlay
                  loop
                  muted
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-black group-hover:text-[#a3e635] transition-colors">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2 line-clamp-3 font-medium">
                    {activity.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#a3e635] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Read Details <LucideArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* 6. PREMIUM SPOTLIGHT 2: Skydiving */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/2 border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-md"
        >
          {/* Flipped alignment for visual variety */}
          <div className="lg:col-span-7 lg:order-1 order-2 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden group shadow-2xl">
            <video
              src={skydivingSpotlight.video}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-5 lg:order-2 order-1 space-y-6">
            <div className="inline-flex bg-[#a3e635]/10 text-[#a3e635] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              High Adrenaline Experience
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {skydivingSpotlight.title}
            </h3>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              <p>{skydivingSpotlight.description}</p>
              <p>{skydivingSpotlight.extendedDescription}</p>
            </div>
            <div className="pt-2">
              <button className="bg-[#a3e635] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#baf251] transition-colors text-sm shadow-lg shadow-[#a3e635]/10">
                Book Flight Now
              </button>
            </div>
          </div>
        </motion.section>

        {/* 7. REDESIGNED "Reasons to Choose Us": Pure Image Pinterest Masonry Layout */}
        <section className="space-y-12 pt-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Good Reasons to Choose Us
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              We believe in responsible tourism and are committed to sustainable
              travel practices. Our partnerships with eco-friendly resorts
              ensure your luxury holiday positively impacts destinations.
            </p>
          </div>

          {/* Pinterest Columns Masonry Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {pinterestImages.map((image) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-white/5 shadow-md bg-white/1"
              >
                <div className={`relative w-full ${image.aspect}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
