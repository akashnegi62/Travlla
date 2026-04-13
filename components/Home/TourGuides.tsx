"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const guides = [
  {
    name: "Murphy",
    role: "Tourist Guide",
    img: "/img/person1.jpg",
  },
  {
    name: "Alexis Cox",
    role: "Tourist Guide",
    img: "/img/person2.jpg",
  },
  {
    name: "Murray",
    role: "Tourist Guide",
    img: "/img/person3.jpg",
  },
  {
    name: "Crawford",
    role: "Tourist Guide",
    img: "/img/person4.jpg",
  },
];

const TourGuides = () => {
  return (
    <section className="bg-[#fbfcfc] py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-[1300px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* --- LEFT COLUMN: Rotating Background, Text, & Hero Image --- */}
          <div className="lg:w-1/2 w-full flex justify-center items-center relative mt-10 lg:mt-0">
            {/* Container for the layered composition */}
            <div className="relative lg:h-[70vh] lg:w-full w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] flex flex-col items-center justify-start pt-16 sm:pt-24">
              {/* 1. Animated Rotating Background Image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 flex justify-center items-center origin-center"
              >
                <Image
                  src="/img/circle-shape.png"
                  alt="Background Circle"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* 2. Text Content (Layered over the circle, above the girl) */}
              <div className="text-center z-10 relative -translate-y-4 sm:-translate-y-8">
                <h3 className="font-serif italic text-[30px] lg:text-[40px] sm:text-[56px] text-[#004b62] font-bold mb-1 leading-none">
                  Meet with
                </h3>
                <h2
                  className="text-[40px] lg:text-[6vw] sm:text-[80px] text-white font-bold drop-shadow-md tracking-tight leading-none"
                  style={{
                    fontFamily: "cursive, 'Brush Script MT', sans-serif",
                  }}
                >
                  Expert guide
                </h2>
              </div>

              {/* 3. Hero Image (Girl sitting - layered on top of the bottom half) */}
              <div className="absolute lg:-bottom-50 -bottom-10 sm:-bottom-16 w-[110%] flex justify-center z-20 pointer-events-none">
                <Image
                  src="/img/tour-bg.png" // Assumes this is the girl with landmarks
                  alt="Expert Guide"
                  width={739}
                  height={653}
                  className="w-full h-[30vh] lg:h-[65vh] object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Guide Cards Grid --- */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-4 pb-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-[40px] text-center flex flex-col items-center"
                >
                  {/* Guide Image */}
                  <div className="w-full h-[260px] md:h-[280px] overflow-hidden rounded-[30px] mb-6 relative">
                    <Image
                      src={guide.img}
                      alt={guide.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  {/* Social Icons */}
                  <ul className="flex justify-center gap-3 mb-5">
                    {[
                      { icon: <FaXTwitter size={14} />, link: "https://x.com" },
                      {
                        icon: <FaFacebookF size={14} />,
                        link: "https://facebook.com",
                      },
                      {
                        icon: <FaInstagram size={14} />,
                        link: "https://instagram.com",
                      },
                      {
                        icon: <FaPinterestP size={14} />,
                        link: "https://pinterest.com",
                      },
                    ].map((soc, i) => (
                      <li key={i}>
                        <Link
                          href={soc.link}
                          target="_blank"
                          className="w-9 h-9 rounded-full border-[2.5px] border-[#f59e0b] bg-[#004b62] text-white flex items-center justify-center hover:bg-[#f59e0b] transition-colors shadow-sm"
                        >
                          {soc.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Name and Role */}
                  <h3 className="text-[22px] font-bold text-[#004b62] mb-1">
                    <Link
                      href="/tour-detail"
                      className="hover:text-[#f59e0b] transition-colors"
                    >
                      {guide.name}
                    </Link>
                  </h3>
                  <span className="text-[13px] font-bold text-[#f59e0b] uppercase tracking-wide">
                    {guide.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuides;
