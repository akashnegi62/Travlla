import React from "react";
// import Image from "next/image";
import Link from "next/link";
import FavouriteSlider from "./FavouriteSlider"; // Import the client slider

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// Fetch securely on the server!
async function getTopProperties() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com"; // Fixed: Removed trailing slash

  try {
    const response = await fetch(
      `${baseUrl}/application/api/top-ten-properties.php`,
      fetchOptions, // Added browser spoofing
    );

    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch top properties:", error);
    // FAILSAFE: Return empty array so the slider doesn't crash the build
    return [];
  }
}

export default async function Favourite() {
  const properties = await getTopProperties();

  return (
    <section className="bg-white xl:p-0 p-0">
      <div className="relative bg-[#256168] overflow-hidden min-h-225 flex flex-col shadow-2xl pb-16 pt-16">
        {/* --- BACKGROUND DECORATIONS ---
        <div className="absolute top-0 -right-20 sm:right-0 z-10 w-70 md:w-100 lg:w-125 h-175 pointer-events-none opacity-50 lg:opacity-100 mix-blend-normal">
          <Image
            src="/img/man-rock.png"
            alt="Rock Climber"
            fill
            className="object-contain object-top-right drop-shadow-2xl"
            
          />
        </div> */}

        {/* --- HEADER CONTENT --- */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 mb-8 lg:mb-32">
          <div className="max-w-112.5 md:max-w-150 lg:max-w-112.5">
            <h2 className="text-3xl md:text-[50px] lg:text-4xl xl:text-6xl font-bold text-white leading-[1.2] mb-4">
              <span className="text-[#8bc34a]">Most Favorite</span> Tour Places!
            </h2>
            <p className="text-white/90 text-sm md:text-lg lg:text-sm xl:text-xl leading-relaxed mb-8">
              Choosing a destination can be exciting but also a bit overwhelming
              with so many amazing places out there!
            </p>

            <Link
              href="/locations/national"
              className="inline-block bg-[#8bc34a] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#ffff] hover:text-[#256168] transition-colors shadow-lg"
            >
              View More Destinations
            </Link>
          </div>
        </div>

        <div className="relative lg:absolute lg:top-30 xl:top-40 lg:left-1/2 flex flex-col items-start z-0 pointer-events-none select-none w-full max-w-250 px-6 md:px-12 lg:pl-12 mt-6 lg:mt-0 mb-10 lg:mb-0">
          <span className="text-[#8bc34a] text-[10vw] md:text-[10vw] lg:text-[7vw] xl:text-[6vw] font-black leading-[0.8] tracking-tighter">
            TOP!
          </span>
          <span className="text-white text-[10vw] md:text-[10vw] lg:text-[7vw] xl:text-[6vw] font-black leading-[0.9] tracking-tight z-0">
            DESTINATION
          </span>
        </div>

        {/* --- INJECT THE CLIENT SLIDER HERE --- */}
        {/* Even if fetch fails, passing an empty array [] prevents the slider from breaking */}
        <FavouriteSlider properties={properties || []} />
      </div>
    </section>
  );
}
