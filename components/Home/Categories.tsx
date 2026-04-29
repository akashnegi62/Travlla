import React from "react";
import CategoriesClient from "./CategoriesClient";

// --- ANTI-BLOCK HEADERS ---
const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

async function getTopTenProperties() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://crm.mercurevacationclub.com";
  try {
    const response = await fetch(
      `${baseUrl}/application/api/top-ten-properties.php`,
      fetchOptions,
    );

    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch top properties:", error);
    return [];
  }
}

export default async function Categories() {
  const properties = await getTopTenProperties();

  // If fetch fails, we don't render the section to avoid empty UI
  if (properties.length === 0) return null;

  return <CategoriesClient properties={properties} />;
}
