import React from "react";
import HeaderClient from "./HeaderClient";
import { getNationalLocations, getInternationalLocations } from "@/lib/api";

export default async function Header() {
  const [national, international] = await Promise.all([
    getNationalLocations(),
    getInternationalLocations(),
  ]);

  return <HeaderClient national={national} international={international} />;
}

// Header API call success