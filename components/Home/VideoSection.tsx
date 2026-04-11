"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate, useInView } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Awards Winning",
    value: "3600",
    suffix: "+",
    icon: "/img/count-icon1.png",
  },
  {
    id: 2,
    title: "Happy Traveler",
    value: "7634",
    suffix: "+",
    icon: "/img/count-icon2.png",
  },
  {
    id: 3,
    title: "Tours success",
    value: "2.5",
    suffix: "K",
    icon: "/img/count-icon3.png",
  },
  {
    id: 4,
    title: "Our Experience",
    value: "25",
    suffix: "+",
    icon: "/img/count-icon4.png",
  },
];

// Sub-component for the highly performant counting animation
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const endValue = parseFloat(value);
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, endValue, {
        duration: 2.5, // 2.5 seconds animation
        ease: "easeOut",
        onUpdate: (latest) => {
          // Update the DOM directly for maximum performance (zero React re-renders)
          if (ref.current) {
            ref.current.textContent = isDecimal
              ? latest.toFixed(1)
              : Math.round(latest).toString();
          }
        },
      });
    }
  }, [isInView, endValue, isDecimal]);

  // Use a standard span and set initial value to 0
  return <span ref={ref}>0</span>;
};

const VideoSection = () => {
  return (
    <section>
      {/* --- VIDEO PORTION --- */}
      <div className="xl:h-[660px] lg:h-[500px] h-[300px] relative overflow-hidden bg-cover bg-center">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
          <Link
            href="https://www.youtube.com/watch?v=0O2aH4XLbto"
            target="_blank"
            className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/50"
          >
            {/* Ripple Effect Animation */}
            <motion.span
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-white rounded-full"
            />

            <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/30 backdrop-blur-md rounded-full text-white text-xl md:text-2xl shadow-xl transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="ml-1" />
            </div>
          </Link>
        </div>
      </div>

      {/* --- COUNTER PORTION --- */}
      <div className="bg-[#1a3d3d] py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-dashed border-white/20 p-5 lg:p-8 flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-5 transition-colors hover:border-[#a3e635]/50 group"
              >
                <div className="w-12 md:w-16 min-w-[48px]">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={60}
                    height={60}
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm lg:text-lg text-white/80 mb-1 lg:mb-2 uppercase tracking-wider">
                    {stat.title}
                  </h4>
                  <div className="text-[#a3e635] font-black text-3xl lg:text-[42px] leading-none flex items-center justify-center xl:justify-start">
                    {/* Integrated Counter Component */}
                    <Counter value={stat.value} />
                    <b className="ml-0.5">{stat.suffix}</b>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
