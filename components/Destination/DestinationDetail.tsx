"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";

// --- Data ---
const destinations = [
  { name: "Paris", img: "/vac1.jpg" },
  { name: "Maldives", img: "/vac2.jpg" },
  { name: "Hong Kong", img: "/vac3.jpg" },
  { name: "Thailand", img: "/vac4.jpg" },
  { name: "Bangkok", img: "/vac5.jpg" },
  { name: "Tokyo", img: "/vac1.jpg" },
  { name: "Spain", img: "/vac2.jpg" },
  { name: "California", img: "/vac3.jpg" },
];

const brands = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.png",
  "/brand1.png",
];

const tours = [
  {
    id: 1,
    location: "Plateau in Slovenia",
    price: 59,
    duration: "8 days, 3 Nights",
    img: "/vac1.jpg",
  },
  {
    id: 2,
    location: "Bali, Indonesia",
    price: 59,
    duration: "8 days, 3 Nights",
    img: "/vac2.jpg",
  },
  {
    id: 3,
    location: "Tokyo City Japan",
    price: 59,
    duration: "8 days, 3 Nights",
    img: "/vac3.jpg",
  },
  {
    id: 4,
    location: "South Korea",
    price: 59,
    duration: "8 days, 3 Nights",
    img: "/vac4.jpg",
  },
];

const DestinationDetail = () => {
  const tourScrollRef = useRef<HTMLDivElement>(null);

  const scrollTours = (direction: "left" | "right") => {
    if (tourScrollRef.current) {
      const scrollAmount = direction === "left" ? -490 : 490;
      tourScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      {/* --- 1. DESTINATION GRID SECTION --- */}
      <section className="bg-contain bg-bottom bg-repeat-x xl:pb-24 xl:pt-30 pt-12.5 bg-[url('/assets/images/background/Cloud-bg.png')]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-7.5">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5"
              >
                <div className="relative z-10 group">
                  <div className="rounded-[40px] overflow-hidden shadow-lg h-[500px] relative">
                    <Image
                      src={dest.img}
                      alt={dest.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute left-0 right-0 -bottom-1 px-4 z-20">
                    <Link href="/destination-detail">
                      <h3 className="text-[28px] font-bold text-[#1a3d3d] bg-white text-center py-5 rounded-3xl transition-all duration-500 group-hover:bg-[#1a3d3d] group-hover:text-white shadow-xl">
                        {dest.name}
                      </h3>
                    </Link>
                  </div>
                  {/* Floating Balloon on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-1 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-top-12">
                    <Image
                      src="/assets/images/destinations/hotballon-right.png"
                      alt="balloon"
                      width={120}
                      height={180}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <ul className="flex justify-center items-center gap-2 mt-12 pb-10">
            <li className="w-11 h-11 flex items-center justify-center rounded-xl border border-[#1a3d3d]/10 hover:bg-[#1a3d3d] hover:text-white transition-all cursor-pointer">
              <FaAngleLeft />
            </li>
            <li className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#1a3d3d] text-white font-bold cursor-pointer">
              1
            </li>
            <li className="w-11 h-11 flex items-center justify-center rounded-xl border border-transparent hover:border-[#1a3d3d]/20 cursor-pointer">
              2
            </li>
            <li className="w-11 h-11 flex items-center justify-center rounded-xl border border-[#1a3d3d]/10 hover:bg-[#1a3d3d] hover:text-white transition-all cursor-pointer">
              <FaAngleRight />
            </li>
          </ul>
        </div>
      </section>

      {/* --- 2. BRANDS TRUST SECTION --- */}
      <section className="p-5 bg-[#f0f9f9]">
        <div className="py-10 bg-white border-4 border-dashed border-[#f0f9f9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 items-center gap-8">
              <div className="xl:col-span-3 col-span-12">
                <h2 className="font-black leading-none xl:text-[46px] md:text-4xl text-3xl max-xl:text-center text-[#1a3d3d]">
                  <span className="font-serif italic text-[#a3e635] block text-5xl mb-2">
                    1K+{" "}
                  </span>
                  Brands Trust Us
                </h2>
              </div>
              <div className="xl:col-span-9 col-span-12">
                <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20">
                  {brands.map((logo, i) => (
                    <Image
                      key={i}
                      src={logo}
                      alt="brand"
                      width={150}
                      height={50}
                      className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. POPULAR TOURS SLIDER --- */}
      <section className="xl:pt-30 pt-16 bg-[#fcf8f1] xl:pb-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="sm:mb-15 mb-8 max-w-[600px] mx-auto text-center">
            <h2 className="text-4xl lg:text-[46px] font-bold text-[#1a3d3d]">
              Explore Popular <span className="text-[#a3e635]">Tours!</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Destinations worth exploring! Here are a few popular spots
            </p>
            <Image
              src="/Title-Separator.png"
              alt="sep"
              width={470}
              height={70}
              className="mx-auto"
            />
          </div>

          <div className="relative group">
            <div
              ref={tourScrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-16"
            >
              {tours.map((tour, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] md:min-w-[461px] snap-center"
                >
                  <div className="relative overflow-hidden group/card rounded-[40px] h-[420px]">
                    <Image
                      src={tour.img}
                      alt={tour.location}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />

                    {/* Default Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/20 backdrop-blur-md group-hover/card:opacity-0 transition-opacity">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <HiOutlineLocationMarker className="text-[#a3e635]" />{" "}
                        {tour.location}
                      </h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-5 p-8 flex flex-col justify-between bg-[#1a3d3d]/80 backdrop-blur-sm rounded-3xl opacity-0 translate-y-10 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 border border-white/10">
                      <div className="flex justify-between items-start">
                        <div className="bg-[#1a3d3d] text-white px-5 py-2 rounded-r-full -ml-8 flex items-center gap-2 font-bold text-sm">
                          <MdOutlineCalendarMonth className="text-[#a3e635] text-lg" />{" "}
                          {tour.duration}
                        </div>
                        <div className="text-right text-white">
                          <span className="text-3xl font-black block">
                            ${tour.price}
                          </span>
                          <span className="text-xs opacity-70 uppercase">
                            Per Day
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {tour.location}
                        </h3>
                        <div className="flex items-center justify-between">
                          <Link
                            href="#"
                            className="border border-white/30 text-white px-6 py-2 rounded-full font-bold hover:bg-[#a3e635] hover:text-[#1a3d3d] transition-all"
                          >
                            Book Now
                          </Link>
                          <div className="text-right">
                            <span className="text-white text-xs opacity-70">
                              (4.8 Review)
                            </span>
                            <div className="flex text-[#a3e635] gap-0.5 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={12} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Navigation Controls */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={() => scrollTours("left")}
                className="w-14 h-14 rounded-full bg-[#a3e635] text-[#1a3d3d] flex items-center justify-center hover:bg-white transition-all shadow-xl"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollTours("right")}
                className="w-14 h-14 rounded-full bg-[#a3e635] text-[#1a3d3d] flex items-center justify-center hover:bg-white transition-all shadow-xl"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DestinationDetail;
