import React from "react";
import AboutHero from "@/components/About/AboutHero";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

// Create a server-side fetch function
async function getLocations() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://rosewoodworldwidetravel.com";
  // The 'no-store' forces Next.js to fetch fresh data every time
  const res = await fetch(`${baseUrl}/api/national_locations.php`);

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

type LocationItem = {
  id: string;
  name: string;
  img: string;
  count?: string; // Optional, in case some items still have it
};

// Change the component to be an async function
export default async function NationalPage() {
  // Await the data directly inside the component!
  const locations = await getLocations();

  return (
    <main className="bg-white">
      <AboutHero title="National Destinations" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#fbbf24] font-bold uppercase tracking-widest">
              Incredible India
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d3d] mt-2">
              Explore Your Homeland
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {locations.map((loc: LocationItem, i: number) => (
              <div
                key={loc.id || i}
                className="group relative h-112.5 rounded-[40px] overflow-hidden shadow-xl"
              >
                <Image
                  src={loc.img || "/img/placeholder.jpg"}
                  alt={loc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-200"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a3d3d] via-[#1a3d3d]/40 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                  <div className="flex items-center gap-2 text-[#fbbf24] mb-2 font-bold">
                    <HiOutlineLocationMarker />
                    <span>{loc.count || "Explore"}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {loc.name}
                  </h3>
                  <Link
                    href={`/tour-detail/${loc.name.charAt(0).toUpperCase() + loc.name.slice(1).toLowerCase()}`}
                    className="inline-block bg-white text-[#1a3d3d] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#fbbf24] transition-colors"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
