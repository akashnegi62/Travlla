import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "@/components/About/AboutHero";

// --- ANTI-TIMEOUT HEADERS FOR VERCEL ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// 1. Generate Static Params (With Capitalization Fix & Vercel Failsafes)
export async function generateStaticParams() {
  // FIXED: Removed trailing slash to prevent double-slashes in URLs
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com";

  try {
    const [nationalRes, internationalRes] = await Promise.all([
      // FIXED: Added fetchOptions and updated to your /application/api/ paths
      fetch(`${baseUrl}/application/api/national-locations.php`, fetchOptions),
      fetch(
        `${baseUrl}/application/api/international-locations.php`,
        fetchOptions,
      ),
    ]);

    if (!nationalRes.ok || !internationalRes.ok) {
      throw new Error("API rejected the build request.");
    }

    const national = await nationalRes.json();
    const international = await internationalRes.json();
    const allLocations = [...national, ...international];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return allLocations.map((loc: any) => {
      const name = loc.name || "";
      // Multi-word fix (e.g. "new delhi" -> "New Delhi")
      const formattedName = name
        .split(" ")
        .map(
          (word: string) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");

      return {
        slug: formattedName,
      };
    });
  } catch (error) {
    console.error("Failed to generate static params:", error);
    // FIXED: FAILSAFE. If API goes down during build, return dummy pages so Vercel doesn't crash the whole site.
    return [
      { slug: "Goa" },
      { slug: "Manali" },
      { slug: "Paris" },
      { slug: "Dubai" },
    ];
  }
}

// 2. Fetch properties by Location Name
async function getLocationProperties(locationName: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com";

  const res = await fetch(
    `${baseUrl}/application/api/properties-by-location.php?location=${encodeURIComponent(locationName)}`,
    fetchOptions, // Added headers here too, just in case!
  );

  if (!res.ok) throw new Error("Failed to fetch property details");
  return res.json();
}

// 3. Type Definition mapping all 6 potential images
type PropertyItem = {
  id: string;
  name: string;
  img_1?: string;
  img_2?: string;
  img_3?: string;
  img_4?: string;
  img_5?: string;
  img_6?: string;
  price?: string;
  description?: string;
};

// 4. The Dynamic Page Component
export default async function LocationDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const locationName = resolvedParams.slug;

  const properties = await getLocationProperties(locationName);

  if (!properties || properties.length === 0) {
    return (
      <main className="bg-white min-h-screen flex flex-col">
        <AboutHero title={`${locationName.toUpperCase()} Details`} />
        <div className="container mx-auto px-4 py-24 text-center grow flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-[#1a3d3d] mb-4">
            No Properties Found
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            We couldn&apos;t find any available properties in {locationName}{" "}
            right now. Please check back later!
          </p>
          <Link
            href="/locations/national"
            className="bg-[#fbbf24] text-[#1a3d3d] px-8 py-3 rounded-full font-bold hover:bg-[#1a3d3d] hover:text-white transition-colors"
          >
            Back to Locations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <AboutHero title={`Properties in ${locationName}`} />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-350">
          <div className="text-center mb-16">
            <span className="text-[#fbbf24] font-bold uppercase tracking-widest">
              Where to Stay
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d3d] mt-2 capitalize">
              Explore {locationName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((property: PropertyItem, i: number) => {
              const availableImages = [
                property.img_1,
                property.img_2,
                property.img_3,
                property.img_4,
                property.img_5,
                property.img_6,
              ].filter(Boolean);

              return (
                <div
                  key={property.id || i}
                  className="group relative bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 flex flex-col transition-transform hover:-translate-y-2 duration-300"
                >
                  <div className="relative h-75 w-full overflow-hidden">
                    {availableImages.length > 0 ? (
                      <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {availableImages.map((imgUrl, index) => (
                          <div
                            key={index}
                            className="relative min-w-full h-full snap-center"
                          >
                            <Image
                              src={imgUrl as string}
                              alt={`${property.name} - Image ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover bg-gray-200"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src="/img/placeholder.jpg"
                          alt="Placeholder"
                          fill
                          className="object-cover bg-gray-200"
                        />
                      </div>
                    )}

                    {availableImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider pointer-events-none z-10">
                        Swipe for more
                      </div>
                    )}

                    {property.price && (
                      <div className="absolute top-6 right-6 bg-[#1a3d3d]/90 backdrop-blur-sm text-white px-5 py-2 rounded-full font-bold shadow-lg z-10">
                        {property.price}
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-2xl font-bold text-[#1a3d3d] mb-4">
                      {property.name}
                    </h3>

                    <p className="text-gray-500 text-[15px] mb-8 grow line-clamp-3 leading-relaxed">
                      {property.description ||
                        "Experience luxury and comfort at this premium property, carefully selected for an unforgettable stay."}
                    </p>

                    <Link
                      href={`/client/book-tour`}
                      className="block w-full text-center bg-[#f0f9f9] text-[#1a3d3d] border border-[#1a3d3d]/10 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#fbbf24] hover:border-[#fbbf24] hover:shadow-md transition-all"
                    >
                      View Details
                    </Link>
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
