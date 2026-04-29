import React from "react";
import HeaderClient from "./HeaderClient";

const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

export default async function Header() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  let national = [];
  let international = [];

  try {
    const [natRes, intRes] = await Promise.all([
      fetch(`${baseUrl}/application/api/national-locations.php`, fetchOptions),
      fetch(
        `${baseUrl}/application/api/international-locations.php`,
        fetchOptions,
      ),
    ]);

    if (natRes.ok) national = await natRes.json();
    if (intRes.ok) international = await intRes.json();
  } catch (error) {
    console.error("Header Fetch Error:", error);
  }

  return <HeaderClient national={national} international={international} />;
}
