"use client";
import React from "react";
import AboutHero from "@/components/About/AboutHero";
import LatestNews from "@/components/Home/LatestNews";

export default function NewsPage() {
  return (
    <main>
      <AboutHero title="What's New" />
      <div className="bg-[#f0f9f9] py-10">
        <div className="container mx-auto px-4 text-center">
          <span className="bg-[#a3e635] text-[#004b62] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
            Updates
          </span>
          <h2 className="text-4xl font-bold text-[#004b62] mt-4">
            Stay tuned for latest updates
          </h2>
        </div>
      </div>
      <LatestNews />
    </main>
  );
}
