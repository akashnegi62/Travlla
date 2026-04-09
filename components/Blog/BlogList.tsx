"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    day: "05",
    month: "June",
    author: "Joey Peterson",
    title: "The Top Travel Destinations for Photography Enthusiasts",
    img: "/vac1.jpg",
  },
  {
    id: 2,
    day: "06",
    month: "June",
    author: "Aliena Smith",
    title: "The Best Ways to Travel with Your Significant Other",
    img: "/vac2.jpg",
  },
  {
    id: 3,
    day: "07",
    month: "June",
    author: "Ronin Colun",
    title: "Top 3 Adventure Destinations for Your Next Holiday",
    img: "/vac3.jpg",
  },
  {
    id: 4,
    day: "05",
    month: "June",
    author: "Joey Peterson",
    title: "Essential Gear for Every Professional Travel Photographer",
    img: "/vac4.jpg",
  },
  {
    id: 5,
    day: "06",
    month: "June",
    author: "Aliena Smith",
    title: "Exploring the Hidden Gems of South East Asia",
    img: "/vac5.jpg",
  },
  {
    id: 6,
    day: "07",
    month: "June",
    author: "Ronin Colun",
    title: "How to Plan a Budget Friendly European Summer Trip",
    img: "/vac1.jpg",
  },
  {
    id: 7,
    day: "05",
    month: "June",
    author: "Joey Peterson",
    title: "Tips for Capturing the Perfect Sunset on Your Travels",
    img: "/vac2.jpg",
  },
  {
    id: 8,
    day: "06",
    month: "June",
    author: "Aliena Smith",
    title: "Cultural Etiquette: What to Know Before You Go",
    img: "/vac3.jpg",
  },
  {
    id: 9,
    day: "07",
    month: "June",
    author: "Ronin Colun",
    title: "The Ultimate Guide to Solo Backpacking in South America",
    img: "/vac4.jpg",
  },
];

const BlogList = () => {
  return (
    <section className="xl:pt-30 pt-12.5 xl:pb-22.5 pb-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {blogData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="relative mb-7.5 group"
            >
              {/* Image Section */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-4/4.5 xl:h-[453px]">
                <Link href="/blog-detail">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>

                {/* Date Badge */}
                <div className="w-20 h-20 bg-[#f0f9f9] text-[#1a3d3d] flex flex-col items-center justify-center rounded-md absolute right-2.5 top-2.5 z-20 uppercase shadow-md leading-none">
                  <span className="block text-4xl font-extrabold">
                    {post.day}
                  </span>
                  <span className="text-xs font-bold mt-1">{post.month}</span>
                </div>

                {/* Text Content Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a3d3d] via-transparent to-transparent z-10 opacity-90" />

                <div className="p-7.5 pt-15 absolute z-20 bottom-0 left-0 w-full">
                  <div className="text-lg font-medium text-[#a3e635] italic font-serif mb-3">
                    By {post.author}
                  </div>
                  <h3 className="md:text-[28px] text-[22px] font-bold text-white leading-tight">
                    <Link
                      href="/blog-detail"
                      className="hover:text-[#a3e635] transition-colors duration-500"
                    >
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PAGINATION --- */}
        <div className="mt-12">
          <ul className="flex justify-center items-center gap-2">
            <li>
              <Link
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 text-[#1a3d3d] hover:bg-[#1a3d3d] hover:text-white transition-all duration-500"
              >
                <FaAngleLeft />
              </Link>
            </li>
            {[1, 2, 3].map((num) => (
              <li key={num}>
                <Link
                  href="#"
                  className={`w-11 h-11 flex items-center justify-center rounded-xl font-bold transition-all duration-500 border ${
                    num === 1
                      ? "bg-[#1a3d3d] text-white border-[#1a3d3d]"
                      : "bg-white text-[#1a3d3d] border-transparent hover:border-gray-200"
                  }`}
                >
                  {num}
                </Link>
              </li>
            ))}
            <li className="text-[#1a3d3d] px-2 font-bold tracking-widest">
              ...
            </li>
            <li>
              <Link
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 text-[#1a3d3d] hover:bg-[#1a3d3d] hover:text-white transition-all duration-500"
              >
                <FaAngleRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
