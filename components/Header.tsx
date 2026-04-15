import React from "react";
import HeaderClient from "./HeaderClient";

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

// 1. Safely fetch all possible search locations on the Server
async function getSearchableLocations() {
  // FIXED: Removed trailing slash from fallback
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com";

  try {
    const [nationalRes, internationalRes] = await Promise.all([
      fetch(`${baseUrl}/application/api/national-locations.php`, fetchOptions),
      fetch(
        `${baseUrl}/application/api/international-locations.php`,
        fetchOptions,
      ),
    ]);

    if (!nationalRes.ok || !internationalRes.ok)
      throw new Error("Search API failed");

    const national = await nationalRes.json();
    const international = await internationalRes.json();
    const allLocations = [...national, ...international];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedLocations = allLocations.map((loc: any) => {
      const name = loc.name || "";
      return name
        .split(" ")
        .map(
          (word: string) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
    });

    return Array.from(new Set(formattedLocations)) as string[];
  } catch (error) {
    console.error("Failed to fetch searchable locations:", error);

    // FAILSAFE: Provide basic locations so search works even if build-time fetch fails
    return ["Goa", "Manali", "Dehradun", "Dubai", "Paris", "Singapore"];
  }
}

// 2. The Server Component Wrapper
export default async function Header() {
  const searchableLocations = await getSearchableLocations();

  // 3. Inject the fetched locations into the Client UI
  return <HeaderClient locations={searchableLocations} />;
}
