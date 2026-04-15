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

// 1. Generate Static Params (Tells Vercel which pages to build)
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
      const name = loc.name || "";
      // Ensure the slug is formatted as "Dubai", "Goa", etc.
      return {
        slug: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
      };
    });
  } catch (error) {
    console.error("Static Params Fetch Failed:", error);
    // MUST return fallbacks so the build doesn't crash
    return [{ slug: "Dubai" }, { slug: "Goa" }, { slug: "Ayodya" }];
  }
}

// 2. Data Fetching Function (Handles your specific JSON structure)
async function getLocationProperties(locationName: string) {
  const baseUrl = "https://crm.mercurevacationclub.com";

  try {
    // We send lowercase to the API to be safe
    const res = await fetch(
      `${baseUrl}/application/api/properties-by-location.php?location=${locationName.toLowerCase()}`,
      fetchOptions,
    );

    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return [];
  }
}

export default async function LocationDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const properties = await getLocationProperties(slug);

  if (!properties || properties.length === 0) {
    return (
      <main className="bg-white min-h-screen">
        <AboutHero title={slug} />
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-bold text-[#1a3d3d]">
            No Properties Found in {slug}
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
      <AboutHero title={`Explore ${slug}`} />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((item: any) => {
              // Extract all valid images from your img_1, img_2... structure
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
                  {/* Image Gallery / Preview */}
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image
                      src={images[0] || "/img/placeholder.jpg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
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
                        href="/client/book-tour"
                        className="block w-full text-center bg-[#1a3d3d] text-white py-3 rounded-full font-bold hover:bg-[#fbbf24] hover:text-[#1a3d3d] transition-all"
                      >
                        Book Now
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
