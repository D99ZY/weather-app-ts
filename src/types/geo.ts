// Raw API response
export interface GeoDataApiResponse {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

// Refined
export interface GeoData {
  name: string;
  country: string;
  lat: number;
  lon: number;
}
