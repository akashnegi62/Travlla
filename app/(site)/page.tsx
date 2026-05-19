import Booking from "@/components/Home/Booking";
import Categories from "@/components/Home/Categories";
import Favourite from "@/components/Home/Favourite";
import Hero from "@/components/Home/Hero";
import Itinerary from "@/components/Home/Itineraries";
import Appsec from "@/components/Home/Appsec";
import LatestNews from "@/components/Home/LatestNews";
import PartnersMarquee from "@/components/Home/PartnersMarquee";
import PopularTours from "@/components/Home/PopularTours";
import Recommendation from "@/components/Home/Recommendation";
import Testimonials from "@/components/Home/Testimonials";
import Roomsec from "@/components/Home/Roomsec";
export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Hero />
      <Booking />
      <Itinerary />
      <Roomsec />
      <Favourite />
      <PartnersMarquee />
      <Recommendation />
      <Appsec />
      <Categories />
      <Testimonials />
      <PopularTours />
      <LatestNews />
    </main>
  );
}
