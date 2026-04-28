"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneVolume, FaEnvelope, FaHouse } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className="xl:py-30 py-12.5 px-5 bg-white">
      <div className="max-w-350 mx-auto bg-white rounded-[60px] xl:p-15 p-5 shadow-[0px_4px_80px_rgba(6,97,104,0.15)] relative">
        {/* --- GOOGLE MAP --- */}
        <div className="w-full md:h-150 mb-15">
          <div className="overflow-hidden rounded-[40px] shadow-sm">
            <iframe
              className="w-full h-100 md:h-150"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241263496584!2d-73.9878436240248!3d40.757974771387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1712571234567!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-12 lg:gap-10">
          {/* --- LEFT: CONTACT FORM --- */}
          <div className="2xl:col-span-6 lg:col-span-5 col-span-12">
            <div className="bg-[#FFF8EB] xl:py-15 xl:px-12.5 sm:p-10 p-6 rounded-[40px]">
              <div className="sm:mb-12 mb-8">
                <h2 className="xl:text-[46px] md:text-4xl text-3xl font-bold mb-2.5 text-[#1a3d3d]">
                  <span className="text-[#a3e635]">Reach</span> & Get in Touch!
                </h2>
                <div className="text-base text-gray-600">
                  We&apos;d love to hear from you. Our friendly team is always
                  here to chat.
                </div>
              </div>

              <form className="space-y-5">
                {/* Name Input */}
                <div className="relative group">
                  <input
                    required
                    type="text"
                    id="dzname"
                    placeholder=" "
                    className="block w-full sm:h-18.5 h-13.75 rounded-full border border-[#1a3d3d]/10 px-10 text-[#1a3d3d] bg-white outline-none focus:border-[#a3e635] transition-all peer"
                  />
                  <label
                    htmlFor="dzname"
                    className="absolute text-gray-400 left-10 top-1/2 -translate-y-1/2 duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:scale-75 peer-focus:-translate-y-8.75 peer-focus:text-[#a3e635] origin-left pointer-events-none"
                  >
                    Enter Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="emailaddress"
                    placeholder=" "
                    className="block w-full sm:h-18.5 h-13.75 rounded-full border border-[#1a3d3d]/10 px-10 text-[#1a3d3d] bg-white outline-none focus:border-[#a3e635] transition-all peer"
                  />
                  <label
                    htmlFor="emailaddress"
                    className="absolute text-gray-400 left-10 top-1/2 -translate-y-1/2 duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:scale-75 peer-focus:-translate-y-8.75 peer-focus:text-[#a3e635] origin-left pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="Subject"
                    placeholder=" "
                    className="block w-full sm:h-18.5 h-13.75 rounded-full border border-[#1a3d3d]/10 px-10 text-[#1a3d3d] bg-white outline-none focus:border-[#a3e635] transition-all peer"
                  />
                  <label
                    htmlFor="Subject"
                    className="absolute text-gray-400 left-10 top-1/2 -translate-y-1/2 duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:scale-75 peer-focus:-translate-y-8.75 peer-focus:text-[#a3e635] origin-left pointer-events-none"
                  >
                    Subject
                  </label>
                </div>

                {/* Message TextArea */}
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder=" "
                    className="block w-full min-h-40 rounded-3xl border border-[#1a3d3d]/10 py-8 px-10 text-[#1a3d3d] bg-white outline-none focus:border-[#a3e635] transition-all peer"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute text-gray-400 left-10 top-8 duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#a3e635] origin-left pointer-events-none"
                  >
                    Write here
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#1a3d3d] text-white px-10 py-4 rounded-full font-bold hover:bg-[#8bc34a] transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* --- RIGHT: CONTACT DETAILS --- */}
          <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
            <div className="relative z-1 lg:pt-20 pt-12 lg:pl-12">
              <div className="sm:mb-15 mb-10">
                <h2 className="xl:text-[46px] md:text-4xl text-3xl font-bold mb-4 text-[#1a3d3d]">
                  Contact Us<span className="text-[#a3e635]"> Detail</span>
                </h2>
                <div className="text-base text-gray-500 leading-relaxed max-w-lg">
                  Travlla is a multi-award-winning strategy and content creation
                  agency that specializes in travel marketing.
                </div>
              </div>

              <ul className="space-y-10">
                {/* Phone */}
                <li className="flex items-center gap-6 max-sm:flex-col max-sm:text-center">
                  <div className="bg-[#45869D] w-24 h-24 min-w-24 rounded-[40px] flex items-center justify-center p-4">
                    <div className="bg-white w-full h-full rounded-[30px] flex items-center justify-center shadow-lg text-[#45869D] text-3xl">
                      <FaPhoneVolume />
                    </div>
                  </div>
                  <div>
                    <span className="text-lg text-gray-400 block">Phone</span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a3d3d]">
                      <a
                        href="tel:1236540214"
                        className="hover:text-[#a3e635] transition-colors"
                      >
                        +91 8929863875
                      </a>
                    </h3>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-center gap-6 max-sm:flex-col max-sm:text-center">
                  <div className="bg-[#CE8594] w-24 h-24 min-w-24 rounded-[40px] flex items-center justify-center p-4">
                    <div className="bg-white w-full h-full rounded-[30px] flex items-center justify-center shadow-lg text-[#CE8594] text-3xl">
                      <FaEnvelope />
                    </div>
                  </div>
                  <div>
                    <span className="text-lg text-gray-400 block">Email</span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a3d3d]">
                      <a
                        href="mailto:travllainfo@gmail.com"
                        className="hover:text-[#a3e635] transition-colors"
                      >
                        info@RosewoodWorldwideTravel.com
                      </a>
                    </h3>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-center gap-6 max-sm:flex-col max-sm:text-center">
                  <div className="bg-[#047881] w-24 h-24 min-w-24 rounded-[40px] flex items-center justify-center p-4">
                    <div className="bg-white w-full h-full rounded-[30px] flex items-center justify-center shadow-lg text-[#047881] text-3xl">
                      <FaHouse />
                    </div>
                  </div>
                  <div>
                    <span className="text-lg text-gray-400 block">Address</span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a3d3d]">
                      Awfis, Hitech City , Siddiq Nagar, Hyderabad
                    </h3>
                  </div>
                </li>
              </ul>

              <div className="mt-16 max-sm:text-center">
                <h3 className="font-serif italic text-xl md:text-3xl text-[#1a3d3d]">
                  Let&apos;s{" "}
                  <span className="text-[#a3e635] non-italic font-bold">
                    Talk
                  </span>{" "}
                  About You!
                </h3>
              </div>

              {/* Decorative Side Image (Visible only on very large screens) */}
              <div className="absolute -bottom-10 -right-10 w-64 hidden 2xl:block opacity-80 -z-10">
                <Image
                  src="/img/about3.png"
                  alt="decoration"
                  width={260}
                  height={488}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
