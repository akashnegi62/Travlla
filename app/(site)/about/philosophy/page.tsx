"use client";
import React from "react";
import Image from "next/image";
import AboutHero from "@/components/About/AboutHero";
import { motion } from "framer-motion";

export default function PhilosophyPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Our Philosophy" />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-350">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            {/* LEFT COLUMN: Aerial Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-5/12 h-150 lg:h-212.5 relative rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <Image
                src="/img/vac1.jpg" // Assuming you have an aerial beach shot here
                alt="Tropical beach view with boats"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* RIGHT COLUMN: Content */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-12">
              {/* Block 1: Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-[#004b62] mb-4">
                  Our Philosophy Is Simple.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create{" "}
                  <strong className="text-[#1a3d3d]">
                    ENRICHING EXPERIENCES FOR TRAVELLERS
                  </strong>{" "}
                  by combining an unbeatable mix of{" "}
                  <strong className="text-[#1a3d3d]">
                    EXCEPTIONAL SERVICE
                  </strong>{" "}
                  and <strong className="text-[#1a3d3d]">QUALITY</strong> at{" "}
                  <strong className="text-[#1a3d3d]">GREAT VALUE</strong>.
                </p>
              </motion.div>

              {/* Block 2: Commitment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-[#004b62] mb-4">
                  Our Commitment Is Firm.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To establish{" "}
                  <strong className="text-[#1a3d3d]">
                    LASTING RELATIONSHIPS
                  </strong>{" "}
                  with our guests by exceeding their expectations the first time
                  and every time by delivering consistently{" "}
                  <strong className="text-[#1a3d3d]">
                    OUTSTANDING QUALITY
                  </strong>{" "}
                  of{" "}
                  <strong className="text-[#1a3d3d]">
                    SERVICE, EXPERIENCE,
                  </strong>{" "}
                  and <strong className="text-[#1a3d3d]">VALUE</strong>.
                </p>
              </motion.div>

              {/* Block 3: Specialities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-[#004b62] mb-4">
                  Our Specialities
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Ample Years of Experience{" "}
                  <span className="text-[#a3e635] font-bold mx-1">|</span>
                  97% Satisfied Travellers{" "}
                  <span className="text-[#a3e635] font-bold mx-1">|</span>
                  Luxurious holidays at affordable price{" "}
                  <span className="text-[#a3e635] font-bold mx-1">|</span>
                  100% Ground Support{" "}
                  <span className="text-[#a3e635] font-bold mx-1">|</span>
                  24×7 Flexible to Your Requirements{" "}
                  <span className="text-[#a3e635] font-bold mx-1">|</span>A Team
                  of Highly Experienced Professionals{" "}
                  <span className="text-[#a3e635] font-bold mx-1">|</span>
                  Delivering Beyond Expectations
                </p>
              </motion.div>

              {/* Block 4: Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              >
                <div className="bg-[#f0f9f9] border border-gray-200 rounded-[30px] p-8 text-center hover:border-[#a3e635] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-5xl font-black text-[#004b62] mb-2">
                    6,805
                  </h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                    Project Completed
                  </p>
                </div>

                <div className="bg-[#f0f9f9] border border-gray-200 rounded-[30px] p-8 text-center hover:border-[#a3e635] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-5xl font-black text-[#004b62] mb-2">
                    9,760
                  </h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                    Happy Customers
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
