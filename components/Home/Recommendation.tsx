"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Recommendation = () => {
  const features = [
    {
      title: "Trusted travel guide",
      description:
        "Provides reliable information to help travelers plan their trips efficiently and safely.",
      icon: "/img/guide-icon.png",
    },
    {
      title: "Mission & Vision",
      description:
        "Aims to connect people to positive experience through travel, helping them see the world differently.",
      icon: "/img/mission-icon.png",
    },
  ];

  return (
    <section className="xl:pt-30 pt-12.5 bg-white pb-10">
      <div className="container mx-auto px-4">
        <div className="section-content">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-12">
            {/* Left Side: Animated Image Gallery */}
            <div className="lg:w-7/12 w-full">
              <div className="relative pt-17.5 lg:mr-6 sm:h-152.5 h-115">
                {/* Floating Airplane */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 right-0 z-20 max-sm:w-50"
                >
                  <Image
                    src="/img/airplane.png"
                    alt="airplane"
                    width={431}
                    height={166}
                    className="max-md:w-full"
                  />
                </motion.div>

                {/* Top Left Image */}
                <div className="sm:max-w-69.5 max-w-50 overflow-hidden">
                  <Image
                    src="/img/hero-recommed1.jpg"
                    alt="Rec 1"
                    width={478}
                    height={420}
                    className="w-full rounded-s-3xl rounded-e-[100px]"
                  />
                </div>

                {/* Center Circle Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="mt-3 md:w-97.5 md:h-97.5 sm:w-67.5 sm:h-67.5 w-50 h-50 md:border-20 border-8 border-white rounded-full shadow-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden"
                >
                  <Image
                    src="/img/hero-recommed2.jpg"
                    alt="Rec Center"
                    fill
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 270px, 390px"
                    className="object-cover"
                  />
                </motion.div>

                {/* Bottom Right Image */}
                <div className="absolute bottom-0 right-0 sm:max-w-69.5 max-w-50">
                  <Image
                    src="/img/hero-recommed3.jpg"
                    alt="Rec 2"
                    width={278}
                    height={420}
                    className="w-full rounded-s-3xl rounded-e-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-5/12 w-full">
              <div className="xl:mb-30 mb-7.5 relative">
                {/* Header */}
                <div className="sm:mb-15 mb-7.5">
                  <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-3.5 text-[#1a3d3d]">
                    We <span className="text-[#a3e635]">Recommend </span>
                    Beautiful Destinations Every Month
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed 2xl:pr-8">
                    Travlla is a multi-award-winning strategy and content
                    creation agency that specializes in travel marketing. They
                    have one of the world&apos;s largest online travel
                    communities.
                  </p>
                </div>

                {/* Feature List */}
                <div className="mb-12.5 space-y-5">
                  {features.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center max-w-104 py-4 px-10 bg-white border border-[#1a3d3d]/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-14 h-14 min-w-14 mr-7 flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={48}
                          height={49}
                          className="invert-[.12] sepia-[.96] saturate-[4.6] hue-rotate-176"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl text-[#1a3d3d] font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA & Customer Stats */}
                <div className="sm:flex items-center gap-6">
                  <Link
                    href="/destination-detail"
                    className="bg-[#1a3d3d] text-white px-10 py-4 rounded-full font-bold hover:bg-[#fbbf24] transition-colors"
                  >
                    Discover More
                  </Link>
                  <div className="flex items-center gap-4 max-sm:mt-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                        >
                          <Image
                            src={`/img/pic${i}.jpg`}
                            alt="user"
                            width={34}
                            height={34}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <span className="block font-black text-[22px] text-[#fbbf24] leading-none">
                        3.5k
                      </span>
                      <p className="uppercase font-medium text-[10px] text-gray-500 tracking-tighter">
                        Happy Customer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical Experience Text */}
                <div className="2xl:absolute right-0 top-50 2xl:w-22.5 max-2xl:pt-10">
                  <div className="inline-flex items-center sm:w-85 2xl:absolute left-0 text-left 2xl:-rotate-90 2xl:origin-top-left 2xl:translate-y-85">
                    <h2 className="font-black sm:text-[83px] text-5xl leading-none text-[#a3e635] drop-shadow-[0_4px_0_rgba(26,61,61,1)] mr-4">
                      25
                    </h2>
                    <span className="sm:text-[28px] text-xl font-black leading-tight text-[#1a3d3d] uppercase">
                      Years of <br className="hidden 2xl:block" /> Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
