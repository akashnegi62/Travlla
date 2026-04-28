import React from "react";
import AboutHero from "@/components/About/AboutHero";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// Create a server-side fetch function
async function getLocations() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const res = await fetch(
      `${baseUrl}/application/api/national-locations.php`,
      fetchOptions,
    );

    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
  } catch (error) {
    console.error("National Page Fetch Error:", error);
    return [];
  }
}

type LocationItem = {
  id: string;
  name: string;
  img: string;
  count?: string;
};

export default async function NationalPage() {
  const locations = await getLocations();

  return (
    <main className="bg-white">
      <AboutHero title="National Destinations" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#8bc34a] font-bold uppercase tracking-widest">
              Incredible India
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d3d] mt-2">
              Explore Your Homeland
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {locations.length > 0 ? (
              locations.map((loc: LocationItem, i: number) => {
                // Formatting name to Title Case for the slug (e.g., "sri lanka" -> "Sri Lanka")
                const slug = loc.name
                  ? loc.name
                      .split(" ")
                      .map(
                        (w) =>
                          w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
                      )
                      .join(" ")
                  : "Unknown";

                return (
                  <div
                    key={loc.id || i}
                    className="group relative h-112.5 rounded-[40px] overflow-hidden shadow-xl"
                  >
                    <Image
                      src={loc.img || "/img/placeholder.jpg"}
                      alt={loc.name}
                      fill
                      loading="lazy" // This is the default, but good to be explicit
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-200"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a3d3d] via-[#1a3d3d]/40 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                      <div className="flex items-center gap-2 text-[#8bc34a] mb-2 font-bold">
                        <HiOutlineLocationMarker />
                        <span>{loc.count || "Explore"}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {loc.name}
                      </h3>
                      {/* Using the formatted slug and adding a trailing slash for Static Export consistency */}
                      <Link
                        href={`/tour-detail/${slug}/`}
                        className="inline-block bg-white text-[#1a3d3d] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#8bc34a] transition-colors"
                      >
                        Explore Now
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">
                  No national locations available at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
