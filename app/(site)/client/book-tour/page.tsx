"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import Booking from "@/components/Home/Booking"; // Reusing your existing Booking component
import PopularTours from "@/components/Home/PopularTours";

export default function BookTourPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Book Your Tour" />
      <div className="-mt-20 relative z-20">
        <Booking />
      </div>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004b62]">Recommended for You</h2>
          <p className="text-gray-500 mt-2">Check out these high-demand destinations</p>
        </div>
        <PopularTours />
      </section>
    </main>
  );
}