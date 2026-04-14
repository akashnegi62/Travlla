"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TimesharePage() {
  return (
    <main className="bg-white">
      <AboutHero title="What Is a Timeshare?" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:w-1/2">
              <div className="relative rounded-[40px] overflow-hidden h-[500px] shadow-2xl">
                <Image src="/img/pic1.jpg" alt="Timeshare concept" fill className="object-cover" />
              </div>
            </motion.div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#004b62] mb-6">A Smarter Way to Vacation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A timeshare, or vacation ownership, allows you to purchase the use of a resort accommodation for a specific period every year. Instead of paying unpredictable hotel rates, you lock in your future vacations at today&apos;s prices.
              </p>
              <ul className="space-y-4 text-[#004b62] font-semibold text-lg">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#a3e635]" /> Guaranteed Annual Vacations</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#a3e635]" /> High-Quality Luxury Resorts</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#a3e635]" /> Shareable with Friends & Family</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#004b62] rounded-[50px] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/img/map.png')] bg-cover bg-center" />
            <h2 className="text-3xl font-bold mb-6 relative z-10">The Points System Advantage</h2>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg relative z-10">
              Modern vacation ownership uses a flexible points-based system. Use your points to book weekend getaways, full weeks, or save them up for the trip of a lifetime anywhere in our global network.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}