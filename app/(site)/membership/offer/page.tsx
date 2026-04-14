"use client";
import React from "react";
import AboutHero from "@/components/About/AboutHero";
import { motion } from "framer-motion";
import { FaConciergeBell, FaBuilding, FaPlane, FaUsers } from "react-icons/fa";

const offers = [
  {
    icon: <FaBuilding />,
    title: "Luxury Accommodations",
    desc: "Stay in 5-star resorts featuring multi-room suites, full kitchens, and premium amenities.",
  },
  {
    icon: <FaPlane />,
    title: "Global Exchange Network",
    desc: "Access over 4,000 affiliated resorts in 100+ countries around the world.",
  },
  {
    icon: <FaConciergeBell />,
    title: "VIP Concierge Services",
    desc: "Let our dedicated team handle your restaurant reservations, event tickets, and transport.",
  },
  {
    icon: <FaUsers />,
    title: "Community Events",
    desc: "Join exclusive member-only events, yacht parties, and curated group tours.",
  },
];

export default function OfferPage() {
  return (
    <main className="bg-white">
      <AboutHero title="What We Offer" />
      <section className="py-24 bg-[#f0f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004b62]">
              More Than Just a Room
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              We provide a comprehensive travel ecosystem designed to remove
              stress and elevate joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offers.map((offer, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-10 rounded-[40px] shadow-lg group transition-all"
              >
                <div className="w-20 h-20 bg-[#fcf8f1] rounded-2xl flex items-center justify-center text-4xl text-[#004b62] mb-6 group-hover:bg-[#a3e635] transition-colors">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#004b62] mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
