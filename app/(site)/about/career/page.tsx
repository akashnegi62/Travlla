"use client";

import React, { useRef } from "react";
import AboutHero from "@/components/About/AboutHero";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";

const jobs = [
  { title: "Travel Consultant", type: "Full Time", loc: "New York / Remote" },
  { title: "Destination Specialist", type: "Contract", loc: "London" },
  { title: "Marketing Manager", type: "Full Time", loc: "Dubai" },
];

export default function CareerPage() {
  const formRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to the form when "Apply Now" is clicked
  const handleApplyClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main>
      <AboutHero title="Join Our Team" />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* --- OPEN POSITIONS --- */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004b62]">
              Open Positions
            </h2>
            <p className="text-gray-500 mt-4">
              We are always looking for passionate explorers to join our global
              family.
            </p>
          </div>

          <div className="space-y-6 mb-24">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="border-2 border-dashed border-gray-200 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center group hover:border-[#a3e635] transition-colors"
              >
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-[#004b62]">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 font-medium mt-1">
                    {job.loc} • {job.type}
                  </p>
                </div>
                <button
                  onClick={handleApplyClick}
                  className="bg-[#004b62] text-white px-8 py-3 rounded-full font-bold group-hover:bg-[#a3e635] group-hover:text-[#004b62] transition-colors"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* --- APPLICATION FORM --- */}
          <div ref={formRef} className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f0f9f9] p-8 md:p-12 rounded-[40px] shadow-xl border-t-8 border-[#004b62]"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-[#004b62]">
                  Submit Your Application
                </h3>
                <p className="text-gray-500 mt-2">
                  Fill out the form below to apply for a position.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label className="text-[#004b62] font-bold text-sm mb-2 ml-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full p-4 rounded-2xl bg-white border border-transparent outline-none focus:border-[#a3e635] focus:ring-2 focus:ring-[#a3e635]/20 transition-all text-[#004b62]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label className="text-[#004b62] font-bold text-sm mb-2 ml-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      className="w-full p-4 rounded-2xl bg-white border border-transparent outline-none focus:border-[#a3e635] focus:ring-2 focus:ring-[#a3e635]/20 transition-all text-[#004b62]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="flex flex-col">
                    <label className="text-[#004b62] font-bold text-sm mb-2 ml-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 234 567 8900"
                      className="w-full p-4 rounded-2xl bg-white border border-transparent outline-none focus:border-[#a3e635] focus:ring-2 focus:ring-[#a3e635]/20 transition-all text-[#004b62]"
                    />
                  </div>

                  {/* Resume Upload (Custom Styled) */}
                  <div className="flex flex-col">
                    <label className="text-[#004b62] font-bold text-sm mb-2 ml-2">
                      Upload Resume *
                    </label>
                    <div className="relative w-full p-4 rounded-2xl bg-white border border-transparent flex items-center justify-between focus-within:border-[#a3e635] focus-within:ring-2 focus-within:ring-[#a3e635]/20 transition-all group overflow-hidden">
                      <span className="text-gray-400 truncate">
                        Choose a file (PDF, DOCX)...
                      </span>
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="bg-[#f0f9f9] p-2 rounded-lg text-[#004b62] group-hover:bg-[#a3e635] transition-colors">
                        <FaUpload />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#004b62] text-white px-8 py-4 rounded-full font-bold hover:bg-[#a3e635] hover:text-[#004b62] transition-colors shadow-lg text-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
