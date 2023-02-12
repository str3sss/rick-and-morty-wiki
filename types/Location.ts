import { Info } from "./Info";

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}


export interface LocationRequest {
  info: Info;
  results: Location[];
}