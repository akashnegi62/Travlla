import React from "react";
import AboutHero from "@/components/About/AboutHero";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// Define the TypeScript type based on what your API returns
type InternationalLocation = {
  id: string | number;
  name: string;
  img: string;
  desc?: string;
};

// 1. Server-side fetch function
async function getLocations() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com"; // Fixed: Removed trailing slash

  try {
    const res = await fetch(
      `${baseUrl}/application/api/international-locations.php`,
      fetchOptions, // Added browser spoofing
    );

    if (!res.ok) throw new Error("Failed to fetch international locations");
    return await res.json();
  } catch (error) {
    console.error("International Page Fetch Error:", error);
    // FAILSAFE: Return empty array so map doesn't crash during build timeout
    return [];
  }
}

// 2. Make the component async
export default async function InternationalPage() {
  // Await the data directly inside the component
  const locations = await getLocations();

  return (
    <main className="bg-white">
      <AboutHero title="Global Destinations" />

      <section className="py-24 bg-[#f0f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-4 text-[#fbbf24] text-4xl">
              <FaGlobe className="animate-[spin_4s_linear_infinite]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3d3d] uppercase tracking-tighter">
              Around The World
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We bring the finest international travel experiences directly to
              you with premium service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {locations.length > 0 ? (
              locations.map((loc: InternationalLocation, i: number) => {
                // FIXED: Multi-word formatting for the slug
                const slugName = loc.name
                  ? loc.name
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase(),
                      )
                      .join(" ")
                  : "Unknown";

                return (
                  <div
                    key={loc.id || i}
                    className="flex flex-col md:flex-row bg-white rounded-[50px] overflow-hidden shadow-2xl group transition-transform hover:translate-x-2"
                  >
                    <div className="md:w-1/2 relative h-75 md:h-auto overflow-hidden bg-gray-200">
                      <Image
                        src={loc.img || "/img/placeholder.jpg"}
                        alt={loc.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-[#1a3d3d] mb-4">
                        {loc.name}
                      </h3>
                      <p className="text-gray-500 mb-6 leading-relaxed">
                        {loc.desc ||
                          "Experience the best of this destination with our premium, carefully curated tour packages."}
                      </p>
                      <Link
                        href={`/tour-detail/${slugName}`}
                        className="text-[#fbbf24] font-black uppercase text-sm tracking-widest hover:text-[#1a3d3d] transition-colors"
                      >
                        Book This Trip →
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">
                  No international locations found. Please check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
