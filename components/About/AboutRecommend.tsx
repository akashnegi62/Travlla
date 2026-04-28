"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutRecommend = () => {
  const features = [
    {
      title: "Trusted travel guide",
      desc: "Provides reliable information to help travelers plan their trips efficiently and safely.",
      icon: "/img/guide-icon.png",
    },
    {
      title: "Mission & Vision",
      desc: "Aims to connect people to positive experience through travel, helping them see the world differently.",
      icon: "/img/mission-icon.png",
    },
  ];

  return (
    <section className="xl:pt-[120px] pt-[50px] bg-white pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          {/* LEFT COLUMN: IMAGE COMPOSITION */}
          <div className="lg:w-7/12 w-full mb-12 lg:mb-0">
            <div className="relative mr-6">
              {/* Main Traveler Image & Background Circle */}
              <div
                className="2xl:max-w-[376px] max-w-[320px] relative z-10 
                before:absolute sm:before:w-[390px] sm:before:h-[390px] before:w-[320px] before:h-[320px] 
                before:left-0 before:top-[90px] before:bg-[#fcf8f1] before:rounded-full before:-z-10 
                max-md:-left-12 max-sm:left-0"
              >
                <Image
                  src="/img/about3.png"
                  alt="Main Traveler"
                  width={376}
                  height={672}
                  className="w-full h-auto"
                />
              </div>

              {/* Bottom Right Circle (Large) */}
              <div
                className="mt-6 2xl:w-[390px] 2xl:h-[390px] xl:w-[360px] xl:h-[360px] md:w-[300px] md:h-[300px] w-[280px] h-[280px] 
                border-20 border-[#f0fafa] rounded-full absolute xl:right-7 lg:left-80  md:-right-6 -right-24 
                xl:bottom-[70px] bottom-[60px] z-20 max-sm:hidden overflow-hidden shadow-lg"
              >
                <Image
                  src="/img/hero-recommed2.jpg"
                  alt="Destination"
                  fill
                  sizes="(max-width: 768px) 280px, 390px"
                  className="object-cover rounded-full"
                />
              </div>

              {/* Top Right Circle (Small) */}
              <div
                className="mt-6 w-[200px] h-[200px] border-10 border-white rounded-full 
                shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] absolute 2xl:left-[360px] xl:left-[310px] 
                md:left-[290px] left-[250px] 2xl:top-0 xl:-top-[80px] md:-top-[15px] -top-[5px] z-30 
                max-sm:hidden overflow-hidden"
              >
                <Image
                  src="/img/hero-recommed3.jpg"
                  alt="Mountain"
                  fill
                  sizes="200px"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="lg:w-5/12 w-full">
            <div className="xl:mb-[120px] mb-7 relative">
              {/* Title Section */}
              <div className="sm:mb-15 mb-7">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="xl:text-[46px] md:text-[40px] text-3xl font-bold text-[#1a3d3d] mb-4 leading-tight"
                >
                  We <span className="text-[#8bc34a]">Recommend </span>
                  Beautiful Destinations Every Month
                </motion.h2>
                <p className="lg:mb-12 mb-7 2xl:pr-8 text-gray-500 leading-relaxed text-base">
                  Travlla is a multi-award-winning strategy and content creation
                  agency that specializes in travel marketing. They have one of
                  the world&apos;s largest and most influential online travel
                  communities, helping brands and tourism.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="mb-12 space-y-5">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center xl:max-w-[416px] py-4 px-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="min-w-[55px] h-[55px] mr-7 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={48}
                        height={49}
                        className="max-w-[48px]"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(12%) sepia(96%) saturate(4615%) hue-rotate(176deg) brightness(92%) contrast(95%)",
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-[22px] text-[#1a3d3d] font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA and Stats Row */}
              <div className="sm:flex items-center gap-6">
                <div>
                  <Link
                    href="/destination-detail"
                    className="inline-block bg-[#1a3d3d] text-white px-10 py-4 rounded-full font-bold hover:bg-[#8bc34a] transition-all duration-300 shadow-lg"
                  >
                    Discover More
                  </Link>
                </div>

                <div className="flex items-center max-sm:pt-4">
                  <div className="flex items-center mr-5">
                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="w-9 h-9 inline-flex rounded-full overflow-hidden border-2 border-white -ml-2.5 first:ml-0 shadow-sm"
                      >
                        <Image
                          src={`/img/pic${i}.jpg`}
                          alt="customer"
                          width={34}
                          height={34}
                        />
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="block font-black text-[22px] text-[#8bc34a] leading-none">
                      3.5k
                    </span>
                    <p className="uppercase font-medium text-[10px] text-gray-400 tracking-wider">
                      Happy Customer
                    </p>
                  </div>
                </div>
              </div>

              {/* VERTICAL EXPERIENCE BADGE */}
              <div className="2xl:absolute right-0 bottom-50 2xl:w-[90px] max-2xl:pt-10">
                <div className="inline-flex items-center sm:w-[340px] 2xl:absolute left-0 text-left 2xl:-rotate-90 2xl:origin-top-left 2xl:translate-y-[340px] 2xl:pl-[106px]">
                  <h2 className="font-bold sm:text-[83px] text-5xl leading-none text-[#8bc34a] drop-shadow-[0_4px_0_rgba(26,61,61,1)] mr-4">
                    25
                  </h2>
                  <span className="sm:text-[28px] text-xl font-black leading-[1.2] text-[#1a3d3d] uppercase">
                    Years of <br className="hidden 2xl:block" /> Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRecommend;
