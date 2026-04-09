"use client";
import React from "react";
import AboutHero from "@/components/About/AboutHero";
import { motion } from "framer-motion";
import { FaLeaf, FaHandshake, FaGlobeAmericas } from "react-icons/fa";

const values = [
  {
    icon: <FaLeaf />,
    title: "Sustainable Travel",
    desc: "Protecting the places we love for future generations.",
  },
  {
    icon: <FaHandshake />,
    title: "Authentic Connections",
    desc: "Building bridges between cultures through local immersion.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global Excellence",
    desc: "Maintaining the highest standards across all 7 continents.",
  },
];

export default function PhilosophyPage() {
  return (
    <main>
      <AboutHero title="Our Philosophy" />
      <section className="py-24 bg-[#fcf8f1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[40px] shadow-xl text-center border-b-4 border-[#a3e635]"
              >
                <div className="text-5xl text-[#004b62] mb-6 flex justify-center">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#004b62] mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
