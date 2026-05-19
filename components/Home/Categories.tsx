import React from "react";
import CategoriesClient from "./CategoriesClient";

import { getInternalExchangeProperties } from "@/lib/api";

export default async function Categories() {
  const properties = await getInternalExchangeProperties();

  // If fetch fails, we don't render the section to avoid empty UI
  if (properties.length === 0) return null;

  return <CategoriesClient properties={properties} />;
}
