/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "@/components/About/AboutHero";

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// 1. Generate Static Params (Strictly matching the Link format)
export async function generateStaticParams() {
  const baseUrl = "https://crm.mercurevacationclub.com";

  try {
    const [natRes, intRes] = await Promise.all([
      fetch(`${baseUrl}/application/api/national-locations.php`, fetchOptions),
      fetch(
        `${baseUrl}/application/api/international-locations.php`,
        fetchOptions,
      ),
    ]);

    const national = await natRes.json();
    const international = await intRes.json();
    const allLocations = [...national, ...international];

    return allLocations.map((loc: any) => {
      const name = loc.name ? loc.name.trim() : "";

      // Standard Title Case: "delhi" -> "Delhi", "sri lanka" -> "Sri Lanka"
      const formattedSlug = name
        .split(/\s+/)
        .map(
          (word: string) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");

      return {
        slug: formattedSlug,
      };
    });
  } catch (error) {
    console.error("Static Params Fetch Failed:", error);
    // FALLBACKS: Must match the strings exactly
    return [
      { slug: "Dubai" },
      { slug: "Goa" },
      { slug: "Ayodya" },
      { slug: "Sri Lanka" },
      { slug: "United State Of America" },
    ];
  }
}

// 2. Data Fetching Function
async function getLocationProperties(locationName: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    // API expects lowercase search terms usually, but handles spaces via encode
    const res = await fetch(
      `${baseUrl}/application/api/properties-by-location.php?location=${encodeURIComponent(locationName.toLowerCase())}`,
      fetchOptions,
    );

    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Location Properties Fetch Error:", err);
    return [];
  }
}

export default async function LocationDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // decodeURIComponent handles the %20 from the URL for clean display and API search
  const decodedSlug = decodeURIComponent(slug);
  const properties = await getLocationProperties(decodedSlug);

  if (!properties || properties.length === 0) {
    return (
      <main className="bg-white min-h-screen">
        <AboutHero title={decodedSlug} />
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-bold text-[#1a3d3d]">
            No Properties Found in {decodedSlug}
          </h2>
          <Link
            href="/locations/national"
            className="mt-4 inline-block text-[#fbbf24] font-bold"
          >
            ← Back to Destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <AboutHero title={`Explore ${decodedSlug}`} />
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((item: any) => {
              const images = [
                item.img_1,
                item.img_2,
                item.img_3,
                item.img_4,
                item.img_5,
                item.img_6,
              ].filter((img) => img && img.includes("https"));

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 flex flex-col"
                >
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image
                      src={images[0] || "/img/placeholder.jpg"}
                      alt={item.name}
                      fill
                      loading="lazy" // This is the default, but good to be explicit
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-xl font-bold text-[#1a3d3d] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#fbbf24] font-bold uppercase mb-4">
                      {item.location}
                    </p>
                    <p className="text-gray-500 text-sm line-clamp-4 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="mt-auto">
                      <p className="text-[10px] text-gray-400 mb-4">
                        {item.address}
                      </p>
                      <Link
                        href={`/property/${item.id}/`}
                        className="block w-full text-center bg-[#1a3d3d] text-white py-3 rounded-full font-bold hover:bg-[#fbbf24] transition-all"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
