import Booking from "@/components/Home/Booking";
import Categories from "@/components/Home/Categories";
import Favourite from "@/components/Home/Favourite";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import PopularTours from "@/components/Home/PopularTours";
import Recommendation from "@/components/Home/Recommendation";
import Testimonials from "@/components/Home/Testimonials";
import TourGuides from "@/components/Home/TourGuides";
import VideoSection from "@/components/Home/VideoSection";
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#eefeff] overflow-hidden">
      <Hero />
      <Booking />
      <Favourite />
      <Recommendation />
      <Categories />
      <TourGuides />
      <Testimonials />
      <VideoSection />
      <PopularTours />
      <LatestNews />
    </main>
  );
}
