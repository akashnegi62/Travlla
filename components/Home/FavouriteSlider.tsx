"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type TopProperty = {
  id: string;
  name: string;
  location: string;
  address: string;
  description: string;
  img: string;
};

// Accept the data as a prop!
export default function FavouriteSlider({
  properties,
}: {
  properties: TopProperty[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const itemWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const gap = 20;
      const scrollAmount = itemWidth + gap;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      let scrollTo = scrollLeft;

      if (direction === "left") {
        scrollTo = scrollLeft - scrollAmount;
      } else {
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 5) {
          scrollTo = 0;
        } else {
          scrollTo = scrollLeft + scrollAmount;
        }
      }
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered || !properties || properties.length === 0) return;

    const interval = setInterval(() => {
      scroll("right");
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered, properties]);

  // If no properties are passed, don't crash
  if (!properties || properties.length === 0) return null;

  return (
    <div
      className="relative w-full z-30 mt-auto px-0 md:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => scroll("left")}
        className="group absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#8bc34a] text-white flex items-center justify-center hover:bg-white transition-all shadow-xl z-40"
      >
        <FaChevronLeft className="group-hover:text-[#8bc34a]" size={16} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="group absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#8bc34a] text-white flex items-center justify-center hover:bg-white transition-all shadow-xl z-40"
      >
        <FaChevronRight className="group-hover:text-[#8bc34a]" size={16} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6 md:px-0 pb-4 pt-4"
      >
        {properties.map((property) => (
          <motion.div
            key={property.id}
            className="w-full md:w-[calc(50%-10px)] lg:w-[calc(20%-16px)] shrink-0 snap-start group cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-[1.5px] border-[#2f7a78] rounded-[30px] p-3 bg-transparent hover:bg-[#185351] transition-all duration-500 h-full flex flex-col">
              <div className="w-full h-80 relative rounded-[20px] overflow-hidden mb-4 bg-gray-200">
                <Image
                  src={property.img}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center pb-2">
                <h3 className="text-xl md:text-[22px] font-bold text-white mb-1 transition-colors truncate px-2">
                  {property.name}
                </h3>
                <span className="text-[11px] font-bold text-white/80 tracking-widest uppercase">
                  {property.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
