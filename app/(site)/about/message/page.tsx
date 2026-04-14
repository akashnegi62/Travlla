"use client";
import React from "react";
import AboutHero from "@/components/About/AboutHero";
import Image from "next/image";

export default function MessagePage() {
  return (
    <main>
      <AboutHero title="Founder's Message" />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="rounded-[50px] overflow-hidden shadow-2xl border-8 border-[#f0f9f9]">
                <Image
                  src="/img/about2.jpg"
                  alt="Founder"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#a3e635] p-8 rounded-2xl hidden md:block">
                <p className="text-[#004b62] font-black text-2xl italic">
                  &quot;Travel is the only thing you buy that makes you
                  richer.&quot;
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#004b62] mb-8 italic font-serif">
                A Note from Our Founder
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Welcome to Rosewood Worldwide Travel, It&apos;s one of the
                  fastest-growing companies in the leisure and travel industry.
                  With strong partnerships across top-notch resorts, hotels,
                  clubs, and wellness centers worldwide, we are dedicated to
                  ensuring your holidays are nothing short of extraordinary.
                </p>
                <p>
                  We believe that travel shouldn&apos;t just be a checkbox on a
                  list, but a transformative experience that changes your
                  perspective forever.
                </p>
                <p className="font-serif text-3xl text-[#004b62] pt-8">
                  - Thank you for choosing us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
