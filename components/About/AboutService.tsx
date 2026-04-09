"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { title: "Tour Guide", img: "/vac1.jpg" },
  { title: "Entertainment", img: "/vac2.jpg" },
  { title: "Safe Flight", img: "/vac3.jpg" },
  { title: "Texi & Metro", img: "/vac4.jpg" },
  { title: "Delicious Food", img: "/vac5.jpg" },
  { title: "Spa & Massages", img: "/vac1.jpg" },
  { title: "Interesting Rest", img: "/vac2.jpg" },
  { title: "Pickup & Drop", img: "/vac3.jpg" },
];

const AboutService = () => {
  return (
    <section className="bg-[#1a3d3d] lg:py-[120px] py-[50px] px-5">
      <div className="container mx-auto">
        {/* --- TITLE START --- */}
        <div className="text-center max-w-[600px] mx-auto md:mb-15 mb-7.5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:text-[46px] md:text-4xl text-3xl font-bold mb-2.5 text-white"
          >
            <span className="text-[#a3e635]">Our Amazing </span>Services
          </motion.h2>
          <p className="text-base text-[#f0f9f9] opacity-80">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <div className="-mt-7 flex justify-center">
            <Image
              src="/Title-Separator.png"
              alt="Separator"
              width={470}
              height={70}
              className="w-[470px] inline-block"
            />
          </div>
        </div>
        {/* --- TITLE END --- */}
      </div>

      {/* --- SERVICES GRID CONTAINER --- */}
      <div className="bg-[#f0f9f9] max-w-[1760px] mx-auto sm:p-[60px] p-7 rounded-[60px] mb-15">
        <div className="grid grid-cols-12 justify-center gap-7.5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12"
            >
              <div className="bg-white rounded-3xl p-[15px] text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-[#f0f9f9]/20 hover:shadow-none hover:bg-[#1a3d3d] group transition-all duration-500 max-sm:w-[85%] max-sm:mx-auto">
                <div className="mb-5 overflow-hidden rounded-2xl">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={356}
                    height={356}
                    className="rounded-xl w-full group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div>
                  <h2 className="md:text-[28px] text-[22px] font-bold">
                    <Link
                      href="/service-detail"
                      className="text-[#1a3d3d] group-hover:text-[#a3e635] duration-500"
                    >
                      {service.title}
                    </Link>
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM DECORATIVE TEXT --- */}
      <div className="container mx-auto">
        <div className="relative text-right z-10">
          <span className="text-white font-serif italic md:text-[28px] text-xl block mb-1">
            Wonderful Services For You
          </span>
          <h2 className="lg:text-[80px] md:text-[46px] sm:text-3xl text-2xl uppercase font-black text-[#a3e635] leading-none opacity-90 select-none">
            Services We Offer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
