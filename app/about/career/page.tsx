"use client";
import React from "react";
import AboutHero from "@/components/About/AboutHero";
import { motion } from "framer-motion";

const jobs = [
  { title: "Travel Consultant", type: "Full Time", loc: "New York / Remote" },
  { title: "Destination Specialist", type: "Contract", loc: "London" },
  { title: "Marketing Manager", type: "Full Time", loc: "Dubai" },
];

export default function CareerPage() {
  return (
    <main>
      <AboutHero title="Join Our Team" />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004b62]">
              Open Positions
            </h2>
            <p className="text-gray-500 mt-4">
              We are always looking for passionate explorers to join our global
              family.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="border-2 border-dashed border-gray-200 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center group hover:border-[#a3e635] transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#004b62]">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 font-medium">
                    {job.loc} • {job.type}
                  </p>
                </div>
                <button className="bg-[#004b62] text-white px-8 py-3 rounded-full font-bold group-hover:bg-[#a3e635] group-hover:text-[#004b62] transition-colors mt-4 md:mt-0">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
