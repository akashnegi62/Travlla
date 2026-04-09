"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Kavin Martin",
    role: "Traver",
    image: "/client1.jpg",
    text: "I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.",
  },
  {
    id: 2,
    name: "Amelia Warner",
    role: "Tourist",
    image: "/client1.jpg",
    text: "I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.",
  },
  {
    id: 3,
    name: "Kavin Martin",
    role: "Traver",
    image: "/client1.jpg",
    text: "I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.",
  },
  {
    id: 4,
    name: "Amelia Warner",
    role: "Tourist",
    image: "/client1.jpg",
    text: "I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Moving by clientWidth ensures we jump exactly one full view (2 items)
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      className="xl:pt-30 pt-12.5 xl:pb-25 pb-10 bg-center bg-no-repeat bg-[#f0fafa] relative overflow-hidden"
      style={{ backgroundImage: "url('/Map.png')" }}
    >
      {/* Background Decorative Hot Balloon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute md:left-10 left-5 top-1/4 md:w-56 w-24 opacity-50 z-0 pointer-events-none"
      >
        <Image
          src="/hotballon-Left.png"
          alt="Balloon"
          width={230}
          height={300}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="sm:mb-15 mb-8 max-w-150 mx-auto text-center">
          <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-2 text-[#1a3d3d]">
            Our Client <span className="text-[#fbbf24]">Says!</span>
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

        <div className="section-content relative max-w-6xl mx-auto">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-10"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-full md:min-w-[50%] snap-start px-6"
              >
                <div className="bg-transparent mt-0">
                  {/* Image and Rating */}
                  <div className="mb-7 relative w-[306px] max-md:mx-auto group">
                    <div className="rounded-[40px] rounded-es-none overflow-hidden h-[297px] shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={306}
                        height={297}
                        className="object-cover group-hover:scale-110 transition-transform duration-700 h-full w-full"
                      />
                    </div>
                    {/* Stars Badge */}
                    <div className="inline-flex items-center bg-[#1a3d3d] rounded-2xl rounded-ss-none absolute left-0 -bottom-2 py-1.5 px-4 shadow-md">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[#fbbf24] text-sm mr-1"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Body */}
                  <div className="info text-left">
                    <div className="flex items-start justify-between mb-6">
                      <div className="left-part">
                        <h4 className="text-3xl font-bold text-[#1a3d3d] mb-1">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-[#fbbf24] uppercase tracking-wide">
                          {item.role}
                        </span>
                      </div>
                      <div className="right-part opacity-20">
                        <Image
                          src="/Quote.png"
                          alt="Quote"
                          width={60}
                          height={50}
                          className="invert-[.12] sepia-[.96] saturate-[4.6] hue-rotate-176"
                        />
                      </div>
                    </div>
                    <p className="text-lg text-[#1a3d3d] leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons: Bottom Center as per image */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#fbbf24] text-white flex items-center justify-center hover:bg-[#1a3d3d] transition-all shadow-lg"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#fbbf24] text-white flex items-center justify-center hover:bg-[#1a3d3d] transition-all shadow-lg"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
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

export default Testimonials;
