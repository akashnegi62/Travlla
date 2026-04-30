"use client";
import AboutHero from "@/components/About/AboutHero";
import Booking from "@/components/Home/Booking";
export default function BookTourPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Book Your Tour" />
      <div className="-mt-20 relative z-20">
        <Booking />
      </div>
    </main>
  );
}
