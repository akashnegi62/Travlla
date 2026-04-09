"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

const internationalData = [
  { id: 1, name: "Paris, France", img: "/assets/images/destinations/style1/pic7.jpg", desc: "Experience the city of lights and world-class art." },
  { id: 2, name: "Bali, Indonesia", img: "/assets/images/destinations/style1/pic8.jpg", desc: "Tropical paradise with lush jungles and beaches." },
  { id: 3, name: "Tokyo, Japan", img: "/assets/images/destinations/style1/pic6.jpg", desc: "A perfect blend of tradition and high-tech future." },
  { id: 4, name: "Swiss Alps", img: "/assets/images/destinations/style1/pic4.jpg", desc: "Majestic mountains and serene lake-side villages." },
  { id: 5, name: "Dubai, UAE", img: "/assets/images/destinations/style1/pic2.jpg", desc: "The ultimate luxury shopping and desert adventure." },
  { id: 6, name: "New York, USA", img: "/assets/images/destinations/style1/pic3.jpg", desc: "The city that never sleeps and iconic landmarks." },
];

export default function InternationalPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Global Destinations" />
      
      <section className="py-24 bg-[#f0f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-4 text-[#fbbf24] text-4xl">
                <FaGlobe className="animate-spin-slow" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3d3d] uppercase tracking-tighter">Around The World</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We bring the finest international travel experiences directly to you with premium service.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {internationalData.map((loc) => (
              <motion.div 
                key={loc.id}
                whileHover={{ x: 10 }}
                className="flex flex-col md:flex-row bg-white rounded-[50px] overflow-hidden shadow-2xl group"
              >
                <div className="md:w-1/2 relative h-75 md:h-auto overflow-hidden">
                  <Image src={loc.img} alt={loc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#1a3d3d] mb-4">{loc.name}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{loc.desc}</p>
                  <Link href="/book-tour" className="text-[#fbbf24] font-black uppercase text-sm tracking-widest hover:text-[#1a3d3d] transition-colors">
                    Book This Trip →
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