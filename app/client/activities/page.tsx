"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Image from 'next/image';
import { motion } from 'framer-motion';

const acts = [
  { name: "Sky Diving", img: "/assets/images/trv-services/2.jpg" },
  { name: "Mountain Hiking", img: "/assets/images/trv-services/1.jpg" },
  { name: "Scuba Diving", img: "/assets/images/trv-services/3.jpg" },
  { name: "Desert Safari", img: "/assets/images/trv-services/4.jpg" },
  { name: "City Cycling", img: "/assets/images/trv-services/5.jpg" },
  { name: "Spa & Wellness", img: "/assets/images/trv-services/6.jpg" },
];

export default function ActivitiesPage() {
  return (
    <main>
      <AboutHero title="Travel Activities" />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {acts.map((act, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative h-[400px] rounded-[40px] overflow-hidden group cursor-pointer"
              >
                <Image src={act.img} alt={act.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-[#004b62]/90 to-transparent flex items-end p-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{act.name}</h3>
                    <p className="text-[#a3e635] font-semibold opacity-0 group-hover:opacity-100 transition-all">Learn More +</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}