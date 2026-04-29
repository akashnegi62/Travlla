import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

// --- ANTI-BLOCK HEADERS (Mirroring your Favourite component) ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// 1. Fetch Securely on the Server
async function getNationalLocations() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://crm.mercurevacationclub.com";
  try {
    const response = await fetch(
      `${baseUrl}/application/api/national-locations.php`,
      fetchOptions,
    );

    if (!response.ok) return [];
    const data = await response.json();

    // Return only the first 8 locations as a grid looks best with even numbers
    return Array.isArray(data) ? data.slice(0, 8) : [];
  } catch (error) {
    console.error("Failed to fetch national locations:", error);
    return [];
  }
}

interface LocationData {
  id: string | number;
  name: string;
  img?: string;
}

export default async function PopularTours() {
  const locations = await getNationalLocations();

  return (
    <section className="xl:pt-30 pt-12.5 px-5 lg:px-0 bg-[#eefeff] xl:pb-25 pb-9 overflow-hidden">
      <div className="container mx-auto max-w-[1300px]">
        {/* Header Section */}
        <div className="sm:mb-15 mb-10 max-w-150 mx-auto text-center">
          <h2 className="xl:text-[46px] md:text-[40px] text-3xl font-bold mb-2.5 text-[#1a3d3d]">
            Explore Popular{" "}
            <span className="text-[#a3e635]">Destinations!</span>
          </h2>
          <p className="text-base text-gray-500">
            Handpicked national spots worth exploring for your next vacation.
          </p>
          <div className="-mt-7 flex justify-center">
            <Image
              src="/img/title-seperator.png"
              alt="Separator"
              width={470}
              height={70}
              className="w-117.5 h-auto"
            />
          </div>
        </div>

        {/* --- 8-ITEM STATIC GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {locations.map((loc: LocationData) => (
            <Link
              key={loc.id}
              href={`/tour-detail/${encodeURIComponent(loc.name)}/`}
              className="relative block group rounded-[20px] h-[400px] overflow-hidden shadow-xl bg-white"
            >
              {/* Destination Image */}
              <Image
                src={loc.img || "/img/placeholder.jpg"}
                alt={loc.name}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2 text-[#a3e635]">
                  <HiOutlineLocationMarker size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                    Explore
                  </span>
                </div>

                <h3 className="text-2xl xl:text-3xl font-black text-white capitalize leading-tight group-hover:text-[#a3e635] transition-colors">
                  {/* TRIM LOGIC: united state of america => united state.. */}
                  {loc.name.length > 15
                    ? `${loc.name.substring(0, 15)}..`
                    : loc.name}
                </h3>

                <div className="mt-4 overflow-hidden">
                  <span className="inline-block text-[#a3e635] text-xs font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    View Properties →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
