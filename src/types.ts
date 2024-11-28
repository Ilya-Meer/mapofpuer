import { LOCATION_TYPE } from "./constants";

export interface TileServer {
  url: string;
  attribution: string;
}

export interface Location {
  name: string
  type: typeof LOCATION_TYPE[keyof typeof LOCATION_TYPE]
  coordinates: [number, number]
  queryName?: string
  description?: string
  googleMapsLink?: string
}
