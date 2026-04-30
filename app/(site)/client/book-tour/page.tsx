"use client";
import AboutHero from "@/components/About/AboutHero";
import Booking from "@/components/Home/Booking";
import BookingTour from "@/components/Home/BookingTour";
export default function BookTourPage() {
  return (
    <main className="bg-white">
      <AboutHero title="Book Your Tour" />
      <BookingTour />
      <Booking />
    </main>
  );
}
