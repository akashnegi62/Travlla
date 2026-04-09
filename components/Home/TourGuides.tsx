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
    img: "/person1.jpg",
  },
  {
    name: "Alexis Cox",
    role: "Tourist Guide",
    img: "/person2.jpg",
  },
  {
    name: "Murray",
    role: "Tourist Guide",
    img: "/person3.jpg",
  },
  {
    name: "Crawford",
    role: "Tourist Guide",
    img: "/person4.jpg",
  },
];

const TourGuides = () => {
  return (
    <section className="bg-[#eefeff] 2xl:p-12.5 sm:p-6 py-12.5 px-3">
      <div className="relative bg-white rounded-3xl overflow-hidden xl:pt-30 pt-12.5 xl:pb-22.5 pb-4 max-xl:px-5">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="sm:mb-15 mb-7.5 max-w-150 mx-auto text-center">
            <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-2.5 text-[#1a3d3d]">
              <span className="text-[#a3e635]">Meet With</span> Tour Guide
            </h2>
            <p className="text-base text-gray-500">
              Destinations worth exploring! Here are a few popular spots
            </p>
            <div className="-mt-7 flex justify-center">
              <Image
                src="/Title-Separator.png"
                alt="Separator"
                width={470}
                height={70}
                className="w-117.5"
              />
            </div>
          </div>

          <div className="section-content">
            <div className="flex flex-wrap items-center">
              {/* Left Column: Background Text and Main Image */}
              <div className="lg:w-1/2 w-full flex items-center justify-center mb-12 lg:mb-0">
                <div className="relative text-center w-full max-w-150 xl:max-w-none">
                  <div className="pt-22.5 font-serif italic 2xl:text-[52px] sm:text-4xl text-3xl text-[#1a3d3d] pb-6 leading-tight relative z-10">
                    Meet with
                    <span className="font-bold non-italic 2xl:text-[100px] sm:text-7xl text-4xl leading-none text-white drop-shadow-[2px_5px_0px_rgba(41,137,145,0.2)] block">
                      Expert guide
                    </span>
                  </div>

                  {/* Animated Spinning Shape */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 flex justify-center items-center -top-10 opacity-30"
                  >
                    <Image
                      src="/CircleShape.png"
                      alt="Circle"
                      width={715}
                      height={715}
                    />
                  </motion.div>

                  <div className="relative z-10 flex justify-center">
                    <Image
                      src="/team-l-pic.png"
                      alt="Team"
                      width={739}
                      height={653}
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Guide Cards Grid */}
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7.5">
                  {guides.map((guide, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -10 }}
                      className="bg-white p-4 shadow-xl rounded-3xl text-center group transition-all duration-300"
                    >
                      <div className="mb-5 overflow-hidden rounded-3xl">
                        <Image
                          src={guide.img}
                          alt={guide.name}
                          width={276}
                          height={276}
                          className="rounded-3xl w-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Social Icons */}
                      <ul className="flex justify-center gap-2 mb-4">
                        {[
                          { icon: <FaXTwitter />, link: "https://x.com" },
                          {
                            icon: <FaFacebookF />,
                            link: "https://facebook.com",
                          },
                          {
                            icon: <FaInstagram />,
                            link: "https://instagram.com",
                          },
                          {
                            icon: <FaPinterestP />,
                            link: "https://pinterest.com",
                          },
                        ].map((soc, i) => (
                          <li
                            key={i}
                            className="w-10 h-10 bg-[#a3e635] rounded-full flex items-center justify-center p-1 group/soc transition-all hover:rounded-lg"
                          >
                            <Link
                              href={soc.link}
                              target="_blank"
                              className="w-full h-full bg-[#1a3d3d] text-white rounded-full flex items-center justify-center transition-all group-hover/soc:rounded-lg group-hover/soc:text-[#a3e635]"
                            >
                              {soc.icon}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-[28px] font-bold text-[#1a3d3d] mb-1">
                        <Link
                          href="/tour-detail"
                          className="hover:text-[#a3e635] transition-colors"
                        >
                          {guide.name}
                        </Link>
                      </h3>
                      <span className="text-base font-semibold text-[#fbbf24] uppercase tracking-wide inline-block mb-4">
                        {guide.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuides;
