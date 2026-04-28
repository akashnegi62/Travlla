"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Choose Destination",
    description:
      "All you have to do is, first select your preferred destination and proceed",
    icon: "/img/destination.png",
  },
  {
    id: "02",
    title: "Make Payment",
    description:
      "You are important to us. We pay attention to the quality of every service we provide to you.",
    icon: "/img/pay-icon.png",
  },
  {
    id: "03",
    title: "Ready For Travelling",
    description:
      "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
    icon: "/img/travel-icon.png",
  },
];

const Booking = () => {
  return (
    <section className="section-full xl:pt-30 pt-12.5 xl:pb-22.5 pb-5 bg-[#eefeff]">
      <div className="container mx-auto px-4">
        {/* TITLE START */}
        <div className="sm:mb-15 mb-7.5 text-center max-w-150 mx-auto">
          <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-2.5 text-[#1a3d3d]">
            Easy Steps <span className="text-[#a3e635]">For Bookings</span>
          </h2>
          <p className="text-base text-gray-600">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <div className="-mt-7 flex justify-center">
            <Image
              src="/img/title-seperator.png"
              alt="Separator"
              width={470}
              height={70}
              className="w-117.5 h-auto"
            />
          </div>
        </div>
        {/* TITLE END */}

        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 mb-7.5">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-[#1a3d3d]/10 lg:p-10 p-5 shadow-xl rounded-3xl rounded-se-[200px] group hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-baseline justify-between mb-6.25">
                  {/* Step Number */}
                  <div className="lg:w-20 lg:h-20 w-16 h-16 items-center justify-center flex bg-[#1a3d3d] rounded-2xl lg:text-[42px] text-3xl text-white font-black">
                    {step.id}
                  </div>

                  {/* Icon Circle */}
                  <div className="lg:w-25 lg:h-25 w-20 h-20 bg-[#8bc34a] rounded-[50px] flex items-center justify-center -mr-5">
                    <div className="lg:w-22.5 lg:h-22.5 w-18.75 h-18.75 bg-white rounded-[50px] flex items-center justify-center">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={48}
                        height={48}
                        className="grayscale group-hover:grayscale-0 transition-all duration-500 w-12 h-auto"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2.5 text-[#1a3d3d]">
                  {step.title}
                </h3>
                <p className="text-[#1a3d3d]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="my-7.5 bg-[#8bc34a] xl:h-46 rounded-2xl overflow-hidden bg-[url('/img/cloud-bg.png')] bg-no-repeat bg-contain bg-bottom lg:flex items-center justify-between lg:py-12.5 lg:px-15 p-3.75 pt-7.5 max-lg:text-center"
          >
            <div className="2xl:text-[50px] xl:text-4xl text-2xl 2xl:leading-18.5 leading-normal text-[#1a3d3d] flex-1 mx-5 font-[kau] italic max-lg:mb-3.75">
              <span className="text-white font-[kau] text-lg leading-6 block pb-2.5 non-italic">
                Get Special Offer
              </span>
              Tours and Trip Packages, Globally
            </div>

            <div>
              <Link
                href="/destination-detail"
                className="inline-block bg-white text-[#1a3d3d] px-10 py-4 rounded-full font-bold hover:bg-[#1a3d3d] hover:text-white transition-all duration-300"
              >
                Discover More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
