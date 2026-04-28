/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCheckCircle, FaStar } from "react-icons/fa";

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// 1. Generate Static Params
export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

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

    const propertyPromises = allLocations.map((loc: any) => {
      const locName = loc.name ? loc.name.toLowerCase() : "";
      return fetch(
        `${baseUrl}/application/api/properties-by-location.php?location=${encodeURIComponent(locName)}`,
        fetchOptions,
      )
        .then((res) => (res.ok ? res.json() : []))
        .catch(() => []);
    });

    const propertiesArrays = await Promise.all(propertyPromises);
    const uniqueIds = new Set<string>();

    propertiesArrays.forEach((propArray: any) => {
      if (Array.isArray(propArray)) {
        propArray.forEach((prop: any) => {
          if (prop.id) uniqueIds.add(prop.id.toString());
        });
      }
    });

    uniqueIds.add("259"); // Fallback

    return Array.from(uniqueIds).map((id) => ({ id }));
  } catch (error) {
    console.error("Static Params Fetch Failed:", error);
    return [{ id: "259" }];
  }
}

// 2. Fetch Single Property Data
async function getPropertyDetails(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const res = await fetch(
      `${baseUrl}/application/api/properties.php?id=${id}`,
      fetchOptions,
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Property Fetch Error:", error);
    return null;
  }
}

// 3. The Page Component
export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyDetails(id);

  if (!property || property.error) {
    return (
      <main className="bg-[#f0f9f9] min-h-screen flex flex-col items-center justify-center pt-32">
        <h1 className="text-3xl font-bold text-[#1a3d3d]">
          Property Not Found
        </h1>
        <Link
          href="/locations/national"
          className="mt-6 text-[#a3e635] font-bold"
        >
          ← Back to Destinations
        </Link>
      </main>
    );
  }

  // Filter out empty/broken image strings
  const validImages = Array.isArray(property.img)
    ? property.img.filter(
        (src: string) => src && src.match(/\.(jpeg|jpg|gif|png)$/i),
      )
    : [];

  const mainImage = validImages[0] || "/img/placeholder.jpg";
  const galleryImages = validImages.slice(1);

  return (
    // FIXED: Removed pt-[120px] so the image touches the very top behind the transparent header
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] lg:h-[75vh] bg-gray-900">
        <Image
          src={mainImage}
          alt={property.name}
          fill
          className="object-cover"
          loading="lazy"
        />
        {/* Dark gradient overlay so the white header and bottom text are perfectly readable */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-[#a3e635] mb-4 font-black text-sm md:text-base tracking-widest uppercase">
              <FaMapMarkerAlt />
              <span>{property.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-lg">
              {property.name}
            </h1>
            {property.address && (
              <p className="text-gray-300 max-w-3xl text-sm md:text-lg font-medium drop-shadow-md">
                {property.address}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16">
          {/* Left Column: Description & Gallery */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-3xl font-black text-[#1a3d3d] mb-6">
                About this Property
              </h2>
              <div className="prose prose-lg text-gray-500 leading-relaxed whitespace-pre-wrap">
                {property.description}
              </div>
            </div>

            {/* Gallery Grid */}
            {galleryImages.length > 0 && (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-black text-[#1a3d3d] mb-8">
                  Property Gallery
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((imgSrc: string, index: number) => (
                    <div
                      key={index}
                      className={`relative rounded-2xl overflow-hidden shadow-sm group ${
                        index === 0 && galleryImages.length % 2 !== 0
                          ? "col-span-2 h-64 md:h-80"
                          : "h-48 md:h-56"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${property.name} gallery image ${index + 1}`}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 sticky top-32 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-1 text-[#8bc34a] mb-2 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3 className="text-3xl font-black text-[#1a3d3d] mb-2">
                Book Your Stay
              </h3>
              <p className="text-gray-500 mb-8 font-medium">
                Experience {property.name} with premium service.
              </p>

              <div className="bg-[#f0f9f9] rounded-2xl p-6 mb-8 border border-[#20b2aa]/20">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-[#1a3d3d] font-bold">
                    <FaCheckCircle className="text-[#a3e635] text-xl shrink-0" />{" "}
                    Premium Member Rates
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#1a3d3d] font-bold">
                    <FaCheckCircle className="text-[#a3e635] text-xl shrink-0" />{" "}
                    24/7 Concierge Support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#1a3d3d] font-bold">
                    <FaCheckCircle className="text-[#a3e635] text-xl shrink-0" />{" "}
                    Priority Upgrades
                  </li>
                </ul>
              </div>

              <Link
                href="/client/book-tour"
                className="flex items-center justify-center w-full bg-[#1a3d3d] text-white py-4 md:py-5 rounded-full font-black uppercase tracking-wider text-sm hover:bg-[#a3e635] hover:text-[#1a3d3d] transition-colors shadow-lg hover:shadow-[#a3e635]/50"
              >
                Proceed to Booking
              </Link>

              <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                Need help?{" "}
                <Link
                  href="/contact"
                  className="text-[#20b2aa] hover:underline"
                >
                  Contact our support team
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
