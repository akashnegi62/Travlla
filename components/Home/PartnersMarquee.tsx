"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface MarqueeRowProps {
  images: string[];
  baseVelocity: number;
}

const associatedPartners = Array.from(
  { length: 14 },
  (_, i) => `/img/ass_partner${i + 1}.png`,
);
const associatedBrands = Array.from(
  { length: 7 },
  (_, i) => `/img/ass_brand${i + 1}.png`,
);

const normalizeArray = (arr: string[], minLength = 12) => {
  const result = [...arr];
  while (result.length < minLength) {
    result.push(...arr);
  }
  return result;
};

function MarqueeRow({ images, baseVelocity }: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  const isHovered = useRef(false);

  useAnimationFrame((t, delta) => {
    if (isHovered.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const currentVelocity = velocityFactor.get();

    if (currentVelocity < -0.1) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0.1) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(currentVelocity);

    baseX.set(baseX.get() + moveBy);
  });

  const displayImages = normalizeArray(images);

  return (
    <div
      className="w-full overflow-hidden flex flex-col items-center group"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <div className="flex whitespace-nowrap w-full">
        <motion.div className="flex gap-4 md:gap-6 px-2 md:px-3" style={{ x }}>
          {/* Half 1 */}
          <div className="flex gap-4 md:gap-6">
            {displayImages.map((src, i) => (
              <div
                key={`set1-${i}`}
                className="relative w-36 h-20 md:w-48 md:h-28 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 hover:border-[#20b2aa] transition-colors duration-300 overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Logo"
                  fill
                  className="object-contain p-4 md:p-6"
                />
              </div>
            ))}
          </div>

          {/* Half 2 */}
          <div className="flex gap-4 md:gap-6">
            {displayImages.map((src, i) => (
              <div
                key={`set2-${i}`}
                className="relative w-36 h-20 md:w-48 md:h-28 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 hover:border-[#20b2aa] transition-colors duration-300 overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Logo"
                  fill
                  className="object-contain p-4 md:p-6"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="py-24 bg-[#f0f9f9] border-y border-gray-100/50 overflow-hidden">
      {/* --- PARTNERS SECTION --- */}
      <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3d3d] uppercase tracking-tighter">
          Our Associated{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#20b2aa] to-[#a3e635]">
            Brands
          </span>
        </h2>
        <p className="text-gray-500 mt-4 font-medium max-w-2xl mx-auto">
          We collaborate with the world&apos;s leading brands and travel
          networks to bring you unparalleled vacation experiences.
        </p>
      </div>

      <div className="w-full mb-20">
        <MarqueeRow images={associatedPartners} baseVelocity={-2} />
      </div>

      {/* --- BRANDS SECTION --- */}
      <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3d3d] uppercase tracking-tighter">
          Our Travel{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#20b2aa] to-[#a3e635]">
            Partners
          </span>
        </h2>
        <p className="text-gray-500 mt-4 font-medium max-w-2xl mx-auto">
          Partnering with exceptional hospitality and lifestyle brands to ensure
          premium quality, comfort, and unforgettable moments at every
          destination.
        </p>
      </div>

      <div className="w-full">
        <MarqueeRow images={associatedBrands} baseVelocity={-4} />
      </div>
    </section>
  );
}
