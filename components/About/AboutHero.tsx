"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type AboutHeroProps = {
  title?: string;
};

const AboutHero = ({ title = "About Us" }: AboutHeroProps) => {
  return (
    <section className="relative bg-cover bg-center w-full bg-white bg-[url('/img/bg.jpg')] overflow-hidden">
      {/* Background Overlay */}
      <div className="opacity-100 absolute left-0 top-0 size-full"></div>

      <div className="flex w-full lg:h-[640px] md:h-[540px] h-[400px] pb-10 items-baseline mx-auto">
        <div className="relative md:mt-60 mt-45 flex items-center justify-center w-full flex-col z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="lg:text-[60px] md:text-[52px] text-[28px] font-bold text-[#1a3d3d] relative">
              {title}
            </h2>
          </motion.div>

          {/* BREADCRUMB ROW */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ul className="inline-block">
              <li className="text-base pr-7.5 relative inline-block font-semibold text-[#1a3d3d] after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-[#1a3d3d] after:text-[26px] after:font-normal">
                <Link
                  href="/"
                  className="hover:text-[#a3e635] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="relative inline-block text-base font-semibold text-[#1a3d3d]">
                {title}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* --- ANIMATED ELEMENTS --- */}

      {/* Moving Clouds */}
      <div className="h-50 w-full absolute top-[200px] left-0 z-1">
        <motion.div
          animate={{ x: ["-100%", "1000%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block whitespace-nowrap"
        >
          <Image
            src="/img/big-cloud.png"
            alt="Cloud"
            width={500}
            height={190}
            className="opacity-60"
            style={{ height: "auto" }}
          />
        </motion.div>
      </div>

      {/* Airplane - Sliding in from right and subtly floating */}
      <div className="absolute w-1/2 right-0 -top-25 lg:-top-25 bottom-0 z-1">
        <motion.div
          animate={{ x: ["-100%", "-20%"], y: ["-20%", "0%"] }}
          transition={{ duration: 10, ease: "linear" }}
          className="mt-60"
        >
          <Image
            src="/img/airplane.png"
            alt="Airplane"
            width={378}
            height={146}
            className="w-auto lg:h-30 h-10"
          />
        </motion.div>
      </div>

      {/* Small Hot Balloon (Left side of the right cluster) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[45px] bottom-[65px] z-1"
      >
        <Image
          src="/img/redballon.png"
          alt="Balloon Small"
          width={84}
          height={121}
          className="md:w-[84px] w-[40px] h-auto"
          style={{ height: "auto" }}
        />
      </motion.div>

      {/* Large Hot Balloon (Far Right) */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute md:-right-[60px] -right-[40px] top-[165px] z-1"
      >
        <Image
          src="/img/hotballon-right.png"
          alt="Balloon Large"
          width={230}
          height={333}
          className="md:w-[230px] w-[80px] h-auto"
          style={{ height: "auto" }}
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
