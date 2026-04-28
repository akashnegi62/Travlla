"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    date: "05",
    month: "June",
    author: "Joey Peterson",
    title: "The Top Travel Destinations for Photography Enthusiasts",
    image: "/img/vac1.jpg",
  },
  {
    id: 2,
    date: "06",
    month: "June",
    author: "Aliena Smith",
    title: "The Best Ways to Travel with Your Significant Other",
    image: "/img/vac2.jpg",
  },
  {
    id: 3,
    date: "07",
    month: "June",
    author: "Ronin Colun",
    title: "Top 3 Adventure Destinations for Your Next Holiday",
    image: "/img/vac3.jpg",
  },
];

const LatestNews = () => {
  return (
    <section className="relative bg-[#1a3d3d] xl:pt-30 pt-12.5 xl:pb-22.5 pb-5 bg-cover bg-no-repeat">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/pattern.png"
          alt=""
          fill
          priority // Fixes NO_LCP by preloading the background
          quality={75}
          className="object-contain"
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-wrap items-center mb-15">
          <div className="xl:w-1/3 lg:w-1/2 w-full text-left">
            <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-3.5 text-white">
              Explore <span className="text-[#a3e635]">Latest News</span>
            </h2>
            <div className="text-[#f0fafa] opacity-80 max-lg:mb-7.5 leading-relaxed">
              Maybe for a travel blog, wildlife site, or web development project
              here are a few sample templates you can use to simulate real-time
              news updates.
            </div>
          </div>
          <div className="xl:w-2/3 lg:w-1/2 w-full lg:text-right text-left">
            <Link
              href="/blogs"
              className="inline-block bg-[#a3e635] text-[#1a3d3d] px-10 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg"
            >
              See More Articles
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                {/* Image Container */}
                <div className="relative z-0 rounded-2xl overflow-hidden aspect-4/5 lg:h-113.25">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Date Badge */}
                  <div className="absolute top-2.5 right-2.5 z-20 w-20 h-20 bg-[#f0fafa] text-[#1a3d3d] flex flex-col items-center justify-center rounded-md uppercase leading-none shadow-xl">
                    <span className="block text-4xl font-extrabold mb-1">
                      {post.date}
                    </span>
                    <span className="text-xs font-bold">{post.month}</span>
                  </div>

                  {/* Text Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />

                  {/* Content Area */}
                  <div className="absolute bottom-0 left-0 w-full p-7.5 z-20">
                    <div className="text-lg font-medium text-[#a3e635] mb-3.75 italic font-serif">
                      By {post.author}
                    </div>
                    <h3 className="md:text-[28px] text-[22px] font-bold text-white leading-tight">
                      <Link
                        href="/blog-detail"
                        className="hover:text-[#a3e635] transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h3>
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

export default LatestNews;
