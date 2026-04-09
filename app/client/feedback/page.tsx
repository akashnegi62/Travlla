"use client";
import React from 'react';
import AboutHero from "@/components/About/AboutHero";
import AboutTestimonials from "@/components/Home/Testimonials";

export default function FeedbackPage() {
  return (
    <main>
      <AboutHero title="Client Feedback" />
      <AboutTestimonials />
      <section className="py-20 bg-[#fcf8f1]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-12 rounded-[50px] shadow-2xl">
            <h2 className="text-3xl font-bold text-[#004b62] mb-8 text-center">Share Your Experience</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#a3e635]" />
                <input type="email" placeholder="Email" className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#a3e635]" />
              </div>
              <textarea placeholder="Your Message" rows={5} className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#a3e635]"></textarea>
              <button className="w-full bg-[#004b62] text-white py-4 rounded-full font-bold hover:bg-[#a3e635] hover:text-[#004b62] transition-all">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}