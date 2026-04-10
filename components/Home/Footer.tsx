"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineMail, HiOutlineHome } from "react-icons/hi";
import { IconType } from "react-icons/lib";

const instaGallery = [
  "/img/vac1.jpg",
  "/img/vac2.jpg",
  "/img/vac3.jpg",
  "/img/vac4.jpg",
  "/img/vac5.jpg",
  "/img/vac1.jpg",
  "/img/vac2.jpg",
  "/img/vac3.jpg",
  "/img/vac4.jpg",
];

const Footer = () => {
  return (
    <>
      {/* --- INSTAGRAM SECTION --- */}
      <div className="bg-[#fcf8f1] text-center xl:pt-20 xl:pb-35 pt-12.5 pb-35 border-b-4 border-[#1a3d3d] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1a3d3d]">
            Follow Instagram
          </h3>
          <ul className="flex flex-wrap justify-center xl:gap-5 gap-2.5">
            {instaGallery.map((img, idx) => (
              <li
                key={idx}
                className="xl:w-[9.43%] lg:w-[15%] sm:w-[18%] w-[30%]"
              >
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-[#1a3d3d] group aspect-square"
                >
                  <Image
                    src={img}
                    alt="insta"
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 10vw"
                    className="object-cover duration-500 group-hover:opacity-30 group-hover:blur-[3px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Recreating the cross-line effect */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <div className="absolute w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <FaInstagram className="text-white text-2xl relative z-10 scale-50 group-hover:scale-100 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- CAR ANIMATION (Marquee) --- */}
        <div className="absolute left-0 bottom-0 w-full overflow-hidden pointer-events-none z-10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "500%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="relative w-72 h-32"
          >
            <Image
              src="/img/car.png"
              alt="Car"
              width={248}
              height={135}
              className="absolute bottom-0"
            />
            {/* Spinning Tyres */}
            <div className="absolute left-[10%] bottom-0 w-10 h-10">
              <Image
                src="/img/car-tyre.png"
                alt="tyre"
                width={43}
                height={43}
                className="animate-spin"
              />
            </div>
            <div className="absolute right-[22%] bottom-0 w-10 h-10">
              <Image
                src="/img/car-tyre.png"
                alt="tyre"
                width={50}
                height={50}
                className="animate-spin"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Tree Pic */}
        <div className="absolute right-0 bottom-0 z-0 w-48 opacity-40 md:opacity-100">
          <Image src="/img/island.png" alt="Tree" width={220} height={146} />
        </div>
      </div>

      {/* --- MAIN FOOTER --- */}
      <footer
        className="bg-[#fcf8f1] text-[#1a3d3d] bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/img/light-bg.png')",
        }}
      >
        <div className="container mx-auto px-4 xl:pt-32 pt-16 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12">
            {/* About Widget */}
            <div className="xl:col-span-1 lg:col-span-2">
              <div className="mb-8">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={160}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Travlla is a multi-award-winning strategy and content creation
                agency that specializes in travel marketing.
              </p>
              <ul className="flex gap-2">
                <SocialLink href="#" Icon={FaXTwitter} />
                <SocialLink href="#" Icon={FaFacebookF} />
                <SocialLink href="#" Icon={FaInstagram} />
                <SocialLink href="#" Icon={FaPinterest} />
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-8">Explore</h3>
              <ul className="space-y-3 font-semibold text-gray-700">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/faq">FAQ&apos;s</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/team">Team</FooterLink>
                <FooterLink href="/news">News & Articles</FooterLink>
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="text-xl font-bold mb-8">Destinations</h3>
              <ul className="space-y-3 font-semibold text-gray-700">
                <FooterLink href="#">Tokyo</FooterLink>
                <FooterLink href="#">France</FooterLink>
                <FooterLink href="#">Dubai</FooterLink>
                <FooterLink href="#">Kenya</FooterLink>
                <FooterLink href="#">Vietnam</FooterLink>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-8">Legal</h3>
              <ul className="space-y-3 font-semibold text-gray-700">
                <FooterLink href="#">Terms & Condition</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Help</FooterLink>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 xl:col-span-1">
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3d3d]/10 flex items-center justify-center text-xl">
                    <HiOutlinePhone />
                  </div>
                  <span className="text-2xl font-bold">123 654 0214</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3d3d]/10 flex items-center justify-center text-xl">
                    <HiOutlineMail />
                  </div>
                  <span className="font-bold">travllainfo@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3d3d]/10 flex items-center justify-center text-xl">
                    <HiOutlineHome />
                  </div>
                  <span className="font-bold">55/11 ronin tower New York</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Bar */}
          <div className="mt-20 bg-[#1a3d3d] rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#a3e635] mb-2">
                <span className="text-white">Subscribe</span> Now!
              </h2>
              <p className="text-white/70">
                Sign up to searing weekly newsletter to get the latest updates.
              </p>
            </div>
            <div className="w-full lg:max-w-md bg-[#f0fafa] p-1.5 rounded-full flex items-center">
              <input
                type="email"
                placeholder="Email address..."
                className="flex-1 bg-transparent px-6 outline-none text-[#1a3d3d] font-semibold"
              />
              <button className="w-14 h-14 bg-[#1a3d3d] text-white rounded-full flex items-center justify-center text-xl hover:bg-[#fbbf24] transition-colors">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-[#1a3d3d]/10 text-center text-sm font-bold text-gray-500">
            © 2026 <span className="text-[#a3e635] uppercase">Travlla</span> All
            Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

// Helper Components
const SocialLink = ({ href, Icon }: { href: string; Icon: IconType }) => (
  <li className="w-10 h-10 bg-[#a3e635] rounded-full flex items-center justify-center group hover:rounded-lg transition-all duration-300">
    <Link
      href={href}
      className="w-8 h-8 bg-[#1a3d3d] text-white rounded-full flex items-center justify-center group-hover:rounded-lg group-hover:text-[#a3e635] transition-all"
    >
      <Icon className="transition-transform group-hover:rotate-360" />
    </Link>
  </li>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="hover:text-[#a3e635] transition-colors block py-1"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
