import React from "react";
import HeaderClient from "./HeaderClient";

// 1. Safely fetch all possible search locations on the Server
async function getSearchableLocations() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com/";

  try {
    const [nationalRes, internationalRes] = await Promise.all([
      fetch(`${baseUrl}/application/api/national-locations.php`),
      fetch(`${baseUrl}/application/api/international-locations.php`),
    ]);

    const national = await nationalRes.json();
    const international = await internationalRes.json();
    const allLocations = [...national, ...international];

    // Extract names and format them to Title Case (e.g. "goa" -> "Goa")
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

    // Remove duplicates just in case the API returns the same location twice
    return Array.from(new Set(formattedLocations)) as string[];
  } catch (error) {
    console.error("Failed to fetch searchable locations:", error);
    return [];
  }
}

// 2. The Server Component Wrapper
export default async function Header() {
  const searchableLocations = await getSearchableLocations();

  // 3. Inject the fetched locations into the Client UI
  return <HeaderClient locations={searchableLocations} />;
}
