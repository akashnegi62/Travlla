"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const tiers = [
  { name: "Silver Tier", price: "Flexible", desc: "Perfect for couples looking for an annual getaway.", features: ["7 Days Annual Travel", "Standard Resort Access", "24/7 Support"] },
  { name: "Gold Tier", price: "Popular", desc: "Designed for families seeking premium experiences.", features: ["14 Days Annual Travel", "Premium Resort Access", "Priority Booking", "Airport Transfers"], popular: true },
  { name: "Platinum Tier", price: "Exclusive", desc: "The ultimate luxury travel lifestyle without limits.", features: ["Unlimited Travel Days", "Global Luxury Villas", "Dedicated Concierge", "Exclusive VIP Events"] },
];

export default function MembershipPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Explore Membership" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#004b62] mb-4">Choose Your Travel Lifestyle</h2>
            <p className="text-gray-500 text-lg">Join a community of passionate travelers and unlock a lifetime of unforgettable vacations tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[40px] border-2 transition-all ${tier.popular ? 'bg-[#004b62] border-[#004b62] shadow-2xl scale-105 z-10' : 'bg-white border-gray-100 hover:border-[#a3e635]'}`}
              >
                {tier.popular && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#a3e635] text-[#004b62] px-6 py-1 rounded-full font-bold text-sm tracking-widest uppercase">Most Popular</div>}
                
                <h3 className={`text-3xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-[#004b62]'}`}>{tier.name}</h3>
                <p className={`text-sm mb-8 ${tier.popular ? 'text-gray-300' : 'text-gray-500'}`}>{tier.desc}</p>
                
                <div className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 ${tier.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                      <FaCheckCircle className={tier.popular ? 'text-[#a3e635]' : 'text-[#004b62]'} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={`block text-center py-4 rounded-full font-bold transition-all ${tier.popular ? 'bg-[#a3e635] text-[#004b62] hover:bg-white' : 'bg-[#f0f9f9] text-[#004b62] hover:bg-[#004b62] hover:text-white'}`}>
                  Inquire Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}