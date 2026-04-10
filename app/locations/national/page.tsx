"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker } from "react-icons/hi";

const nationalData = [
  { id: 1, name: "Goa Beaches", img: "/img/location/loc1.webp", count: "12 Tours" },
  { id: 2, name: "Himachal Hills", img: "/img/location/loc2.webp", count: "08 Tours" },
  { id: 3, name: "Kerala Backwaters", img: "/img/location/loc3.webp", count: "15 Tours" },
  { id: 4, name: "Rajasthan Heritage", img: "/img/location/loc4.webp", count: "10 Tours" },
  { id: 5, name: "Leh Ladakh", img: "/img/location/loc5.webp", count: "05 Tours" },
  { id: 6, name: "Andaman Islands", img: "/img/location/loc6.webp", count: "07 Tours" },
];

export default function NationalPage() {
  return (
    <main className="bg-white">
      <AboutHero title="National Destinations" />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#fbbf24] font-bold uppercase tracking-widest">Incredible India</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d3d] mt-2">Explore Your Homeland</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {nationalData.map((loc, i) => (
              <motion.div 
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-112.5 rounded-[40px] overflow-hidden shadow-xl"
              >
                <Image
                  src={loc.img}
                  alt={loc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a3d3d] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="flex items-center gap-2 text-[#fbbf24] mb-2 font-bold">
                    <HiOutlineLocationMarker />
                    <span>{loc.count}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{loc.name}</h3>
                  <Link href="/tour-detail" className="inline-block bg-white text-[#1a3d3d] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#fbbf24] transition-colors">
                    Explore Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}