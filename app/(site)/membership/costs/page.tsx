"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import { motion } from 'framer-motion';
import { FaWallet, FaSyncAlt, FaChartLine } from 'react-icons/fa';

const costs = [
  { icon: <FaWallet />, title: "Initial Investment", desc: "A one-time payment that secures your fractional ownership and points allocation for a lifetime of travel." },
  { icon: <FaSyncAlt />, title: "Annual Maintenance", desc: "A transparent yearly fee that ensures all properties are kept to the highest luxury standards, covering repairs, taxes, and insurance." },
  { icon: <FaChartLine />, title: "Exchange Fees", desc: "Minimal transaction fees applied only when you choose to exchange your home resort for an international destination within our network." },
];

export default function CostsPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Understanding Costs" />
      <section className="py-24 bg-[#fcf8f1]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[#a3e635] font-bold uppercase tracking-widest bg-[#004b62] px-4 py-1 rounded-full text-xs">Financial Transparency</span>
            <h2 className="text-4xl font-bold text-[#004b62] mt-6">No Hidden Fees. Just Great Vacations.</h2>
          </div>

          <div className="space-y-8">
            {costs.map((cost, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-white p-10 rounded-[30px] shadow-lg border-l-8 border-[#004b62]"
              >
                <div className="text-5xl text-[#a3e635] bg-[#004b62] p-6 rounded-2xl shrink-0">
                  {cost.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#004b62] mb-3">{cost.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{cost.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}