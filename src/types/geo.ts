export interface GeoDataApiResponseItem {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type GeoDataApiResponse = GeoDataApiResponseItem[];

export interface GeoLocation {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}
