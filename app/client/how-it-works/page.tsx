"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Choose Destination", desc: "Select from our curated list of 100+ global locations." },
  { num: "02", title: "Book Your Slot", desc: "Use our seamless booking system to secure your travel dates." },
  { num: "03", title: "Custom Itinerary", desc: "Receive a personalized travel plan from our experts." },
  { num: "04", title: "Travel & Enjoy", desc: "Pack your bags and let us handle all the logistics." },
];

export default function HowItWorks() {
  return (
    <main>
      <AboutHero title="How It Works" />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 bg-[#f0f9f9] rounded-[40px] border-2 border-transparent hover:border-[#a3e635] transition-all group"
              >
                <span className="text-6xl font-black text-white absolute top-4 right-6 opacity-20 group-hover:opacity-40 group-hover:text-[#a3e635] transition-all">
                  {step.num}
                </span>
                <h3 className="text-2xl font-bold text-[#004b62] mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}