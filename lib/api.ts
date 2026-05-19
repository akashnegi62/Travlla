const fetchOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
  },
};

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://crm.mercurevacationclub.com";

export async function getNationalLocations() {
  const baseUrl = getBaseUrl();
  try {
    const response = await fetch(
      `${baseUrl}/application/api/national-locations.php`,
      fetchOptions,
    );
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch national locations:", error);
    return [];
  }
}

export async function getInternationalLocations() {
  const baseUrl = getBaseUrl();
  try {
    const response = await fetch(
      `${baseUrl}/application/api/international-locations.php`,
      fetchOptions,
    );
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch international locations:", error);
    return [];
  }
}

export async function getInternalExchangeProperties() {
  const baseUrl = getBaseUrl();
  try {
    const response = await fetch(
      `${baseUrl}/application/api/internal-exchange-properties.php`,
      fetchOptions,
    );
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch internal exchange properties:", error);
    return [];
  }
}

export async function getLocationProperties(locationName: string) {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(
      `${baseUrl}/application/api/properties-by-location.php?location=${encodeURIComponent(
        locationName.toLowerCase(),
      )}`,
      fetchOptions,
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Location Properties Fetch Error:", err);
    return [];
  }
}

export async function getPropertyDetails(id: string) {
  const baseUrl = getBaseUrl();
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
