"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinations = [
  { name: "Thailand", img: "/vac1.jpg" },
  { name: "Bangkok", img: "/vac2.jpg" },
  { name: "Tokyo", img: "/vac3.jpg" },
  { name: "Spain", img: "/vac4.jpg" },
  { name: "California", img: "/vac5.jpg" },
  { name: "Paris", img: "/vac1.jpg" },
  { name: "Maldives", img: "/vac1.jpg" },
  { name: "Hong Kong", img: "/vac1.jpg" },
];

const AboutDestination = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden md:pb-24 pb-10 md:pt-32 pt-16 bg-contain bg-bottom bg-repeat-x bg-[url('/Cloud-bg.png')]">
      <div className="container mx-auto px-4">
        {/* TITLE START */}
        <div className="text-center max-w-[600px] mx-auto md:mb-16 mb-8">
          <h2 className="xl:text-[46px] md:text-4xl text-3xl font-bold mb-2.5 text-[#1a3d3d]">
            <span className="text-[#a3e635]">About </span>Destination
          </h2>
          <p className="text-base text-gray-500">
            Destinations worth exploring! Here are a few About spots
          </p>
          <div className="-mt-7">
            <Image
              src="/Title-Separator.png"
              alt="Separator"
              width={470}
              height={70}
              className="w-[470px] inline-block"
            />
          </div>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center text-[#1a3d3d] hover:bg-[#a3e635] transition-all opacity-0 group-hover:opacity-100 -ml-6"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center text-[#1a3d3d] hover:bg-[#a3e635] transition-all opacity-0 group-hover:opacity-100 -mr-6"
          >
            <FaChevronRight />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-10 pb-20"
          >
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[309px] snap-start"
              >
                <div className="relative z-10 group/card">
                  {/* Image Container */}
                  <div className="rounded-3xl overflow-hidden h-[500px] relative">
                    <Image
                      src={dest.img}
                      alt={dest.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Heading - Bottom Fixed */}
                  <div className="absolute left-0 right-0 -bottom-1 z-20 px-4">
                    <Link href="/destination-detail">
                      <h3 className="text-[28px] font-bold text-[#1a3d3d] bg-white text-center py-5 rounded-3xl transition-all duration-500 group-hover/card:bg-[#1a3d3d] group-hover/card:text-white shadow-lg">
                        {dest.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Hot Balloon Animation on Hover */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 -z-1 transition-all duration-500 opacity-0 group-hover/card:opacity-100 group-hover/card:-top-16">
                    <Image
                      src="/hotballon-right.png"
                      alt="balloon"
                      width={155}
                      height={233}
                      className="w-full max-w-[120px] mx-auto block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Balloons */}
      <div className="absolute -left-28 top-1/2 w-56 opacity-30 pointer-events-none">
        <Image
          src="/hotballon-Left.png"
          alt="balloon"
          width={233}
          height={333}
        />
      </div>
      <div className="absolute -right-14 top-1/2 w-28 opacity-30 pointer-events-none">
        <Image
          src="/hotballon-right.png"
          alt="balloon"
          width={110}
          height={166}
        />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AboutDestination;
