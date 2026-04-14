/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

// --- DATA FROM IMAGE ---
const roomTypes = [
  {
    title: "TYPE 1 - STUDIO STANDARD ROOM.",
    description: "Enjoy our beautifully finished hotel studio standard apartment accommodation. This room type is ideal for solo travelers, business visits or couples. For short term or for longer stays, the Studio is your home away from home, with direct elevator access from the lobby and underground secure carts, 3/4 bedroom area and a dedicated balcony.",
    features: [
      "Total Occupancy - Max 2 adults for 2 adults",
      "1 King Double Bed (or 2 singles)",
      "Fully Air-conditioned (split AC)",
      "Balcony & Terrace area",
      "Split AC",
      "Free Wi-Fi",
      "Office & Study Desk"
    ],
    image: "/assets/images/tour/style1/pic1.jpg" // Replace with actual room image
  },
  {
    title: "TYPE 2 - 2 MASTER DOUBLE STUDIO ROOM | SUITE ROOM:",
    description: "For a higher level of accommodation, choose our spacious 2 Bedroom Suite. The layout includes a living room with a selection of two and three-seater sofas, separate dining area, full bathroom facility and all families.",
    features: [
      "Total Occupancy - Max 4 adults",
      "2 Master King Double Beds (can split into 4 singles)",
      "Separate Living Area (lounge)",
      "Kitchen & Microwave facilities",
      "Large Dining Table",
      "Spacious Lounge with large Flat-Screen TV",
      "Separate Bathroom",
      "Air conditioning",
      "Free Wi-Fi",
      "Office kitchen:"
    ],
    image: "/assets/images/tour/style1/pic2.jpg" // Replace with actual room image
  }
];

const t1Pricing = [
  { tier: "BRONZE TOUR", price: "4.5", color: "bg-[#c58356]" },
  { tier: "SILVER TOUR", price: "6.5", color: "bg-[#b3b3b3]" },
  { tier: "GOLD TOUR", price: "7.8", color: "bg-[#fbbf24]", popular: true },
];

const t2Pricing = [
  { tier: "BRONZE TOUR", price: "5.5", color: "bg-[#c58356]" },
  { tier: "SILVER TOUR", price: "7.5", color: "bg-[#b3b3b3]" },
  { tier: "GOLD TOUR", price: "9.8", color: "bg-[#fbbf24]", popular: true },
];

export default function MembershipPage() {
  return (
    <main className="bg-[#fafafa]">
      <AboutHero title="Explore Membership" />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* --- ROOM TYPES SECTION --- */}
          <div className="space-y-16">
            {roomTypes.map((room, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-10 items-start"
              >
                <div className="lg:w-7/12">
                  <h2 className="text-2xl font-black text-[#1a3d3d] mb-4 uppercase">{room.title}</h2>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-6 font-medium">
                    {room.description}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] text-gray-800 font-medium">
                    {room.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-5/12 w-full">
                  <div className="relative h-[300px] w-full rounded-[20px] overflow-hidden shadow-xl border-4 border-white">
                    <Image src={room.image} alt="Room" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="my-16 border-gray-300" />

          {/* --- PRICING TABLES SECTION --- */}
          
          {/* T1 Category */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#1a3d3d] mb-6 border-l-4 border-[#a3e635] pl-3">
              T 1 Category | Regular 25 Years Price List |
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t1Pricing.map((plan, i) => (
                <PricingCard key={i} plan={plan} />
              ))}
            </div>
          </div>

          {/* T2 Category */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#1a3d3d] mb-6 border-l-4 border-[#a3e635] pl-3">
              T 2 Category | Regular 25 Years Price List |
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t2Pricing.map((plan, i) => (
                <PricingCard key={i} plan={plan} />
              ))}
            </div>
          </div>

          <hr className="my-16 border-gray-300" />

          {/* --- FOOTER INFORMATION SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Info */}
            <div className="flex gap-4 items-start">
              <FaInfoCircle className="text-gray-400 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#1a3d3d] text-lg mb-2">Special Superior Category Accommodation</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                  After many requests is for professionals to have something designed to their accommodation for 25 years. This new SUPERIOR Suite will now meet all your needs:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[13px] text-gray-600">
                  <li>Occupancy: 4 Adults</li>
                  <li>King beds: or Twin beds</li>
                  <li>A flat screen LCD TV</li>
                  <li>Safety deposit</li>
                  <li>Free Wi-Fi</li>
                  <li>Shared kitchen</li>
                </ul>
              </div>
            </div>

            {/* Right Info */}
            <div className="flex gap-4 items-start">
              <FaInfoCircle className="text-gray-400 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#1a3d3d] text-lg mb-2">Special Information:</h4>
                <p className="text-gray-600 text-[13px] leading-relaxed text-justify">
                  Prior many requests a future of Hatsmaced Worldwide Travel maritimelite with and on exclaunting of froize 1000 exapect worstfilings. Albsaroir inaculions and five aommodated decices of your uoer past comment praions prime. An it to becomee toarh. Bustiness and moases are enter your house hving from home. I Chaos: fited a noide range of worshooe oeors, snell betters, better, much more facilitiess the widdite and, thus can orceet your high steditoords and air filter special intreads.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENT: PRICING CARD ---
const PricingCard = ({ plan }: { plan: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden relative border border-gray-100"
  >
    {/* Diagonal Ribbon for Gold */}
    {plan.popular && (
      <div className="absolute -top-1 -right-1 overflow-hidden w-24 h-24 z-10">
        <div className="absolute top-4 -right-8 bg-[#8bc34a] text-white text-[10px] font-bold uppercase py-1 w-32 text-center rotate-45 shadow-md">
          Book Now
        </div>
      </div>
    )}

    {/* Header */}
    <div className={`${plan.color} py-4 text-center`}>
      <h4 className="text-white font-bold text-lg uppercase tracking-wider">{plan.tier}</h4>
    </div>

    {/* Body */}
    <div className="p-8 text-center flex flex-col items-center">
      <div className="mb-6 border-b pb-6 w-full border-gray-100">
        <span className="text-[40px] font-black text-[#1a3d3d]">{plan.price}</span>
        <span className="text-lg font-bold text-[#1a3d3d] ml-1">Lakh</span>
      </div>

      <ul className="space-y-4 text-[15px] font-semibold text-gray-700 w-full">
        <li className="border-b border-gray-100 pb-3">Unlimited Bookings</li>
        <li className="border-b border-gray-100 pb-3">Priority Profile</li>
        <li className="border-b border-gray-100 pb-3">Manage Booking</li>
      </ul>

      <p className="mt-6 mb-8 text-[13px] font-bold text-gray-800">
        Maintenance: ₹10,000/- + GST %
      </p>

      <button className="bg-[#4a8a8e] hover:bg-[#1a3d3d] text-white px-8 py-2.5 rounded-md font-bold text-sm transition-colors shadow-md w-max">
        BUY NOW
      </button>
    </div>
  </motion.div>
);